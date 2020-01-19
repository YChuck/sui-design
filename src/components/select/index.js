import { Select } from 'iview'
import Icon from '../icon'
import { oneOf, isArray } from '../../utils'

const prefixCls = 'sui-select'

export default {
  name: 'SxSelect',
  // 禁用特性继承
  inheritAttrs: false,
  data() {
    return {
      close: false,
    }
  },
  props: {
    // UI展示级别: global fragment form
    level: {
      validator(v) {
        return oneOf(v, ['global', 'fragment', 'form'])
      },
      default: 'fragment',
    },
    value: {
      type: [String, Number],
    },
  },
  render(h) {
    let {
      level,
      value,
      $listeners: { input },
    } = this

    return h('div', { class: [prefixCls, `${prefixCls}-${level}`] }, [
      h(
        Select,
        {
          props: { clearable: true, value, ...this.$attrs },
          on: {
            ...this.$listeners,
            // 创建 input 事件传入 iview select 模拟 v-model
            input: v => {
              this.close = !!v
              // 这里的input事件处理函数: 封装组件的v-model的事件处理函数
              input(v)
            },
          },
          /**
           * 将封装组件的作用域插槽传入 iView Select 组件
           */
          scopedSlots: this.$scopedSlots,
        },
        this.$slots.default,
      ),
      h('div', { class: `${prefixCls}-icon` }, [
        h(Icon, {
          props: {
            type: this.close
              ? 'icon-error-circle'
              : level === 'fragment'
              ? 'icon-arraw-vertical'
              : 'icon-arrow-down',
          },
          style: {
            width: level === 'fragment' && !this.close ? '16px' : '12px',
            height: level === 'fragment' && !this.close ? '16px' : '12px',
          },
        }),
      ]),
    ])
  },
}
