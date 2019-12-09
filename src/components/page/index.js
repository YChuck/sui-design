import Vue from 'vue'
import { Page } from 'iview'
import Button from '../button'

const prefixCls = 'sui-page'

// 响应化
const state = Vue.observable({
  // input 输入值
  inputNumber: false,
  // 具体页数
  currentPage: false,
  // 每页条数
  pageSize: 0,
  // 总数
  total: 0,
})

/**
 * 组件可使用 v-model 获取 page 变化
 */
export default {
  name: 'SxPage',
  functional: true,
  render(h, ctx) {
    // input 事件监听 (为了实现 v-model)
    const input = ctx.listeners['input']
    const onChange = ctx.listeners['on-change']

    state.total = ctx.props.total
    // 未设置则使用默认 10 条
    state.pageSize = ctx.props.pageSize || 10

    // 未记录当前页码 则使用传入 value 或 默认值
    if (!state.currentPage)
      state.currentPage = (ctx.data.attrs && ctx.data.attrs.value) || 1

    // current 参数是为了设置 iview page 组件选中
    ctx.props.current = state.currentPage

    if (ctx.data.on) {
      // 拦截 iview page 组件的 on-change 事件: 用于触发 v-model 变化、change 事件以及改变当前选中页码
      ctx.data.on['on-change'] = function(page) {
        // 设置当前选中
        state.currentPage = page
        if (onChange) onChange(page)
        if (input) input(page)
      }
    }

    return h('div', { class: prefixCls }, [
      h(
        Page,
        {
          props: ctx.props,
          on: ctx.listeners,
        },
        ctx.children,
      ),
      h('input', {
        class: `${prefixCls}-input`,
        on: {
          input(event) {
            // 限制 input value 值: 1 <= v <= 最大页数
            let v = Math.min(
              Number(event.target.value) || 0,
              Math.round(state.total / state.pageSize),
            )

            if (v) event.target.value = v
            else event.target.value = ''

            state.inputNumber = v
          },
        },
      }),
      h(
        Button,
        {
          props: {
            size: 'small',
            type: 'default',
            disabled:
              state.currentPage === state.inputNumber || !state.inputNumber,
          },
          on: {
            /**
             * 用于触发 v-model 变化、change 事件以及改变当前选中页码
             */
            click() {
              const { inputNumber } = state
              if (input) input(inputNumber)
              if (onChange) onChange(inputNumber)
              state.currentPage = state.inputNumber
            },
          },
        },
        'GO',
      ),
    ])
  },
}
