import Vue from 'vue'
import { Table } from 'iview'
import Icon from '../icon'
import { PRIMARY_COLOR } from '../../constants'
import { isNumber } from '../../utils'

const prefixCls = 'sui-table'

let limitSize = 15

const formatData = data => {
  if (state.moreFlag && !state.isAll) return data.slice(0, limitSize)
  else return data
}

// 标记响应化
const state = Vue.observable({
  moreFlag: false,
  isAll: false,
})

export default {
  name: 'SxTable',
  functional: true,
  // 当显示设定 props 后则 ctx 中仅包含设定的 props
  props: {
    /**
     * 展示更多 (根据显可展示数判断是否展示“显示更多”)
     * 值为数值:作为限制条数
     */
    more: {
      type: [Number, Boolean],
      default: false,
    },
  },
  render(h, ctx) {
    const { more } = ctx.props
    const { data } = ctx.data.attrs

    if (isNumber(more)) limitSize = more

    state.moreFlag = more && data.length > limitSize

    // 根据条件处理 data 属性
    ctx.data.attrs.data = formatData(data)

    return h('div', { class: prefixCls }, [
      h(
        Table,
        {
          ...ctx.data,
        },
        ctx.children,
      ),
      state.moreFlag &&
        h(
          'div',
          {
            class: [`${prefixCls}-more`],
            on: {
              click() {
                state.isAll = !state.isAll
              },
            },
          },
          [
            h('span', state.isAll ? '显示部分' : '显示全部'),
            h(Icon, {
              style: {
                width: '10px',
                height: '10px',
              },
              props: {
                color: PRIMARY_COLOR,
                type: state.isAll
                  ? 'icon-double-arrow-up'
                  : 'icon-double-arrow-down',
              },
            }),
          ],
        ),
    ])
  },
}
