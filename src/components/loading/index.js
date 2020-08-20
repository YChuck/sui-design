import Loading from './loading'
import Vue from 'vue'

import { isObject, shallowCopy } from '../../utils'
import { NON_ABSOLUTE_POSITION } from '../../constants'

/**
 * 单例构造方式
 */
Loading.newInstance = ({ dom, ...options }) => {
  const _props = options || {}

  const component = new Vue({
    render(h) {
      return h(Loading, {
        props: _props,
      })
    },
  }).$mount()

  // 父节点存在则添加 loading 到父节点下,反之加入 body (全局模式)
  if (dom) {
    // 父节点为文档流节点 则使其脱离文档流
    const position = window.getComputedStyle(dom).getPropertyValue('position')
    if (!NON_ABSOLUTE_POSITION.includes(position))
      dom.style = 'position: relative;'
    dom.appendChild(component.$el)
  } else document.body.appendChild(component.$el)

  return {
    display(flag = true) {
      component.$el.style = `display: ${flag ? 'flex' : 'none'};`
    },
    destroy() {
      if (dom) dom.removeChild(component.$el)
      else document.body.removeChild(component.$el)
      component.$destroy()
    },
  }
}

// loading 实例缓存组
const cache = {}
// 依赖 vue 关联 loading 缓存组
const vueMap = {}

let defaultConfig = {}

export default {
  config(option) {
    if (isObject(option)) defaultConfig = option
  },
  show(query = 'global') {
    let option = {}

    // 参数处理
    if (isObject(query)) {
      option = shallowCopy(query, ['query'])
      query = query.query || 'global'
    }

    if (cache[query]) cache[query].display()
    // 存在缓存直接显示
    else {
      let dom = null
      if (query !== 'global') {
        // 根据 query 获取 父节点 dom (用于添加 loading 的节点)
        dom = document.querySelector(query)
        if (!dom) return
        // 根据 父节点 查找最近的 Vue 生成的 dom 节点
        let uid = checkParent(dom)
        vueMap[uid].push(query) // vue 关联 loading 数组添加当前 query 占位
      }
      // 创建 loading 实例  & 缓存
      cache[query] = Loading.newInstance({
        dom,
        ...defaultConfig,
        ...option,
      })
    }
  },
  hide(query = 'global') {
    if (!cache[query]) return
    cache[query].display(false)
  },
}

// 查找 loading 实例 可依赖的最近的 Vue 实例 (添加销毁 loading 实例的方法)
const checkParent = dom => {
  let t = dom
  while (t.parentNode) {
    // vue 生成的 dom 包含 __vue__ 指向 vue 实例
    if (t.parentNode.__vue__) {
      let parentVue = t.parentNode.__vue__
      // 向 vue 生命周期 beforeDestroy 添加销毁 loading 的方法
      parentVue.$options.beforeDestroy.push(loadingDestroy(parentVue._uid))
      if (!vueMap[parentVue._uid]) vueMap[parentVue._uid] = []
      return parentVue._uid
    } else t = t.parentNode
  }
  return null
}

// loading 实例销毁函数: 当依赖 父 vue 实例销毁时触发该方法 删除所有依赖该父实例的 loading 实例
const loadingDestroy = uid => {
  return () => {
    if (vueMap[uid]) {
      vueMap[uid].forEach(query => {
        if (cache[query]) {
          cache[query].destroy()
          delete cache[query]
        }
      })
      vueMap[uid].length = 0
      delete vueMap[uid]
    }
  }
}
