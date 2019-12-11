import { Page } from 'iview'
import Button from '../button'

const prefixCls = 'sui-page'

/**
 * 组件可使用 v-model 获取 page 变化
 */
export default {
  name: 'SxPage',
  data() {
    return {
      // input 输入值
      inputNumber: false,
    }
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    // 具体页数
    value: {
      type: Number,
      default: 1,
    },
  },
  render(h) {
    const onChange = this.$listeners['on-change']
    const input = this.$listeners['input']
    const { total, pageSize, value, inputNumber } = this

    return h('div', { class: prefixCls }, [
      h(
        Page,
        {
          props: {
            total,
            pageSize,
            current: value,
            ...this.$attrs,
          },
          on: {
            ...this.$listeners,
            'on-change': page => {
              if (input) input(page)
              if (onChange) onChange(page)
            },
          },
          scopedSlots: this.$scopedSlots,
        },
        this.$slots.default,
      ),
      h('input', {
        class: `${prefixCls}-input`,
        on: {
          input: event => {
            // 限制 input value 值: 1 <= v <= 最大页数
            let v = Math.min(
              Number(event.target.value) || 0,
              Math.round(total / pageSize),
            )

            if (v) event.target.value = v
            else event.target.value = ''

            this.inputNumber = v
          },
        },
      }),
      h(
        Button,
        {
          props: {
            size: 'small',
            type: 'default',
            disabled: value === inputNumber || !inputNumber,
          },
          on: {
            /**
             * 用于触发 v-model 变化、change 事件以及改变当前选中页码
             */
            click: () => {
              if (input) input(inputNumber)
              if (onChange) onChange(inputNumber)
            },
          },
        },
        'GO',
      ),
    ])
  },
}
