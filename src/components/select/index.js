import Vue from 'vue'
import { Select } from 'iview'
import Icon from '../icon'
import { oneOf, shallowCopy } from '../../utils'

const prefixCls = 'sui-select'

// 标记响应化
const state = Vue.observable({
  close: false,
})

export default {
  name: 'SxSelect',
  functional: true,
  props: {
    // UI展示级别: global fragment form
    level: {
      validator(v) {
        return oneOf(v, ['global', 'fragment', 'form'])
      },
      default: 'fragment',
    },
  },
  render(h, ctx) {
    const { level } = ctx.props
    const { staticStyle = {}, staticClass = {} } = ctx.data
    /**
     * 经测试使用 v-model 后,覆盖input方法会使 Vue 处理多个事件 (保留原事件处理函数)
     * input事件处理函数将通过数组保存, Vue 的 事件处理 invoker 支持数组处理
     */
    if (!ctx.data.on) ctx.data.on = {}
    ctx.data.on['input'] = function(v) {
      state.close = !!v
    }
    return h(
      'div',
      { class: [prefixCls, `${prefixCls}-${level}`], staticStyle, staticClass },
      [
        h(
          Select,
          {
            ...shallowCopy(ctx.data, ['staticStyle', 'staticClass']),
            props: { clearable: true },
          },
          ctx.children,
        ),
        h('div', { class: `${prefixCls}-icon` }, [
          h(Icon, {
            props: {
              type: state.close
                ? 'icon-error-circle'
                : level === 'fragment'
                ? 'icon-arraw-vertical'
                : 'icon-arrow-down',
            },
            style: {
              width: level === 'fragment' && !state.close ? '16px' : '12px',
              height: level === 'fragment' && !state.close ? '16px' : '12px',
            },
          }),
        ]),
      ],
    )
  },
}
