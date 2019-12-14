import Vue from 'vue'
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
  },
  render(h) {
    let {
      level,
      $listeners: { input },
    } = this

    const inputFn = v => {
      this.close = !!v
    }

    if (input) {
      if (isArray(input.fns)) input.fns.push(inputFn)
      else input.fns = [input.fns, inputFn]
    } else input = inputFn

    return h('div', { class: [prefixCls, `${prefixCls}-${level}`] }, [
      h(
        Select,
        {
          props: { clearable: true, ...this.$attrs },
          on: {
            ...this.$listeners,
            input,
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
