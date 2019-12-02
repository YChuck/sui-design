import { DatePicker } from 'iview'
import BtnPicker from './btn-picker'
import moment from 'moment'
import { oneOf } from '../../utils'

const prefixCls = 'sui-date-picker'

/**
 * 根据类型加载对应组件
 */
const el = {
  button(ctx) {
    return [BtnPicker, { ...ctx.data, props: { ...ctx.props } }, ctx.children]
  },
  picker(ctx) {
    const { 'on-change': onChange } = ctx.listeners
    if (onChange) {
      // 对 on-change 事件进行拦截Moment化输出
      ctx.data.on['on-change'] = function(date, type) {
        let output
        // 清空数据
        if (!date || !date[0]) {
          onChange({ first: '', last: '', type }, { date, type })
          return
        }
        // 时间范围数据 (数组)
        if (Array.isArray(date)) {
          output = {
            first: moment(date[0]).startOf('day'),
            last: moment(date[1]).endOf('day'),
            type,
          }
        } else {
          let t = oneOf(type, ['year', 'month'])
          output = {
            // 第二个参数为格式: 仅年份要传格式否则有错误提示
            first: moment(date, type === 'year' && 'YYYY').startOf(
              t ? type : 'day',
            ),
            last: moment(date, type === 'year' && 'YYYY').endOf(
              t ? type : 'day',
            ),
            type,
          }
        }
        onChange(output, { date, type })
      }
    }
    const data = {
      ...ctx.data,
      props: { editable: false },
      class: `${prefixCls}-${ctx.props.level}`,
    }
    return [DatePicker, data, ctx.children]
  },
}

export default {
  name: 'SxDatePicker',
  functional: true,
  props: {
    // UI类型：button picker
    model: {
      validator(v) {
        return oneOf(v, ['button', 'picker'])
      },
      default: 'picker',
    },
    // UI展示级别: global fragment form
    level: {
      validator(v) {
        return oneOf(v, ['global', 'fragment', 'form'])
      },
      default: 'fragment',
    },
  },
  render(h, ctx) {
    const { model } = ctx.props
    return h('div', { class: prefixCls }, [h(...el[model](ctx))])
  },
}
