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
  pageSize: 10,
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
    let value = ctx.data.attrs.value || 1

    state.total = ctx.props.total
    state.pageSize = ctx.props.pageSize

    // 未记录当前页码 则使用传入 value 值
    if (!state.currentPage) state.currentPage = value
    // 若已记录当前页码 则触发 input 事件
    else if (input) input(state.currentPage)

    // current 参数是为了设置 iview page 组件选中
    ctx.data.attrs.current = state.currentPage

    // 监听 iview page 组件的 on-change 事件
    ctx.data.on['on-change'] = function(page) {
      // 设置当前选中
      state.currentPage = page
      if (onChange) onChange(page)
    }

    return h('div', { class: prefixCls }, [
      h(Page, {
        ...ctx.data,
      }),
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
            click() {
              state.currentPage = state.inputNumber
            },
          },
        },
        'GO',
      ),
    ])
  },
}
