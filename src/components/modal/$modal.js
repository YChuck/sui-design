import Vue from 'vue'
import Modal from './modal.vue'

const prefixCls = 'sui-modal'

Modal.new = config => {
  let props_ = { ...config.props }
  const instance = new Vue({
    data: props_,
    render(h) {
      // content
      let body
      if (this.render) {
        body = h('div', { attrs: { class: `${prefixCls}-body` } }, [
          this.render(h),
        ])
      } else {
        body = h('div', { domProps: { innerText: this.content } })
      }

      return h(
        Modal,
        {
          props: props_,
          domProps: {
            value: this.visible,
          },
          on: {
            input: val => {
              this.visible = val
            },
            'on-ok': this.ok,
            'on-cancel': this.cancel,
            'on-error': this.error,
          },
        },
        [body],
      )
    },
    methods: {
      ...config.event,
      ok() {
        this.$children[0].visible = false
        this.remove()
        this.onOk()
      },
      cancel() {
        this.$children[0].visible = false
        this.remove()
        this.onCancel()
      },
      error() {
        this.$children[0].visible = false
        this.remove()
        this.onError()
      },
      remove() {
        document.body.removeChild(this.$el)
        this.$destroy()
        this.onRemove()
      },
    },
  })

  const component = instance.$mount()
  document.body.appendChild(component.$el)
  const modal = instance.$children[0]

  return {
    show() {
      modal.visible = true
    },
    remove() {
      modal.visible = false
      modal.$parent.remove()
    },
    component: modal,
  }
}

export default Modal
