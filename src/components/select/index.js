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
      $attrs,
    } = this

    // 初始化传入值 则设置可清除
    if (value) this.close = true

    // 用户是否设置 clearable
    let clearable = $attrs.hasOwnProperty('clearable')

    return h('div', { class: [prefixCls, `${prefixCls}-${level}`] }, [
      h(
        Select,
        {
          props: { value, ...$attrs },
          on: {
            ...this.$listeners,
            // 创建 input 事件传入 iview select 模拟 v-model
            input: v => {
              this.close = !!v
              // 这里的input事件处理函数: 封装组件的v-model的事件处理函数
              if (input) input(v)
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
            // 只有在设置了 clearable 并且 当前是可清除状态 才能显示删除按钮
            type:
              clearable && this.close
                ? 'icon-error-circle'
                : level === 'fragment'
                ? 'icon-arraw-vertical'
                : 'icon-arrow-down',
          },
          style: {
            width:
              level === 'fragment' && clearable && this.close ? '12px' : '16px',
            height:
              level === 'fragment' && clearable && this.close ? '12px' : '16px',
          },
        }),
      ]),
    ])
  },
}
