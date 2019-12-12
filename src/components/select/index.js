import Vue from 'vue'
import { Select } from 'iview'
import Icon from '../icon'
import { oneOf } from '../../utils'

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
    const { level } = this
    return h('div', { class: [prefixCls, `${prefixCls}-${level}`] }, [
      h(
        Select,
        {
          props: { clearable: true, ...this.$attrs },
          on: {
            ...this.$listeners,
            /**
             * 经测试使用 v-model 后,覆盖input方法会使 Vue 处理多个事件 (保留原事件处理函数)
             * input事件处理函数将通过数组保存, Vue 的 事件处理 invoker 支持数组处理
             */
            input: v => {
              this.close = !!v
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
