import Notification from './notification'
import Vue from 'vue'

/**
 * 单例构造方式
 * 由于Vue默认挂载单一根元素而弹窗会有多个同时弹出,挂在到项目的根Vue实例上容易污染造成大开销,且挂载在根Vue实例上无法对 notification 组件进行人为销毁
 * 因此创建新的Vue实例挂载 notification 组件,简化对 notification 实例生命周期的维护
 */
Notification.newInstance = options => {
  const _props = options || {}

  const instance = new Vue({
    render(h) {
      return h(Notification, {
        props: _props,
      })
    },
  })

  /**
   * 手动挂载该 Vue 实例并将组件生成的实际根元素添加到 body 中
   */
  const component = instance.$mount()
  document.body.appendChild(component.$el)
  const notification = component.$children[0]

  return {
    notice(noticeProps) {
      notification.add(noticeProps)
    },
    remove(name) {
      notification.close(name)
    },
    component: notification,
    destroy() {
      notification.closeAll()
      setTimeout(function() {
        document.body.removeChild(component.$el)
        component.$destroy()
      }, 500)
    },
  }
}

export default Notification
