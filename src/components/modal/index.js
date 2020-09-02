import Vue from 'vue'
import Modal from './modal.vue'
import { isFunction, shallowCopy, isBoolean, isObject } from '../../utils'

// 事件处理函数生成器
const eventBuilder = function(type, on, keep) {
  return async () => {
    const { modal, content, _this } = this
    // 通过对应的 disabled 变量来进行防抖
    if (modal[`${type}Dis`]) return
    modal[`${type}Dis`] = true
    let res
    if (isFunction(content[type])) {
      res = await content[type]()
      // content.ok 返回 false 则明确需要暂停后续操作
      if (type === 'ok' && isBoolean(res) && !res) {
        modal.okDis = false
        return
      }
      // 根据 弹窗逻辑内部返回 来修改 _this 的对应数据
      if (isObject(res) && isObject(_this) && _this._isVue) {
        Object.keys(res).forEach(key => {
          _this[key] = res[key]
        })
      }
    }
    if (isFunction(on[type])) on[type]()
    modal[`${type}Dis`] = false
    modal.visible = false
    // 根据 keep 属性来确定是否要走销毁逻辑
    !keep && this.remove()
  }
}

Modal.newInstance = async ({
  // 逻辑组件要传递到弹窗逻辑组件的标示数组: [_this: 第一项必须为逻辑组件实例指针, ...tags: 要传递给弹窗逻辑组件的数据标识 (只允许传递 data 属性)]
  // 通过 content[tag] = _this[tag] 实现数据传递
  componentData = [],
  // 内容渲染函数: 支持异步组件加载 (优先级高于默认插槽配置)
  component: content,
  // 作用域插槽生成器 (执行后生成作用域插槽配置对象)
  scopedSlots,
  // 事件额外处理函数 (再对应弹窗事件处理函数之后处理)
  on = {},
  // 传递给 Modal 组件的 prop
  props = {},
  // 是否保留当前渲染的 Modal 实例 (若为 false 则再关闭时自动销毁,否则需要手动销毁)
  keep = true,
}) => {
  const [_this, ...tags] = componentData

  content = isFunction(content) ? await content() : null
  if (content && content.default) content = content.default

  const component = new Vue({
    data() {
      this.modal = null
      this.content = null
      this.unWatchList = []
      this._this = _this
      return {}
    },
    mounted() {
      let modal = (this.modal = this.$children[0])
      let content = (this.content = modal.$slots.default[0].componentInstance)
      if (isObject(_this) && _this._isVue)
        // 数据关联
        tags.forEach(key => {
          content[key] = _this[key]
          // 通过 watch 进行数据更新 (并存储 watch 销毁函数)
          this.unWatchList.push(
            _this.$watch(key, val => {
              if (val !== content[key]) {
                content[key] = val
              }
            }),
          )
        })
    },
    beforeDestroy() {
      // 销毁之前的 watch
      this.unWatchList.forEach(unWatch => unWatch())
    },
    render(h) {
      scopedSlots = isFunction(scopedSlots) ? scopedSlots(h) : {}

      if (!content) content = scopedSlots.default()
      else content = h(content)

      return h(
        Modal,
        {
          props,
          on: {
            /* 三个内置处理函数都需要弹窗逻辑组件对应函数返回后再视情况进行后续操作 */
            'on-ok': eventBuilder.call(this, 'ok', on, keep),
            'on-cancel': eventBuilder.call(this, 'cancel', on, keep),
            'on-error': eventBuilder.call(this, 'error', on, keep),
          },
          scopedSlots: shallowCopy(scopedSlots, ['default']),
        },
        [content],
      )
    },
    methods: {
      remove() {
        if (!this._isDestroyed) {
          document.body.removeChild(this.$el)
          this.$destroy()
        }
      },
    },
  }).$mount()

  document.body.appendChild(component.$el)
  const modal = component.$children[0]

  return {
    display(visible) {
      if (!modal._isDestroyed) modal.visible = visible
    },
    destroy() {
      if (!modal._isDestroyed) {
        modal.visible = false
        document.body.removeChild(component.$el)
        component.$destroy()
      }
    },
    component: modal,
  }
}

Modal.open = ({ props, ...config }) => {
  return Modal.newInstance({
    props: {
      ...props,
      value: true,
    },
    ...config,
  })
}

export default Modal
