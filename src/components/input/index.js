import { Input } from 'iview'
import { oneOf } from '../../utils'

const prefixCls = 'sui-input'

export default {
  name: 'SxInput',
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
    return h(
      Input,
      {
        ...ctx.data,
        class: [prefixCls, `${prefixCls}-${level}`],
      },
      ctx.children,
    )
  },
}
