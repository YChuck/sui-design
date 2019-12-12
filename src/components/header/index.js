import { oneOf } from '../../utils'

const prefixCls = 'sui-header'
const levelMap = { primary: 2, secondary: 3, small: 4 }

export default {
  name: 'SxHeader',
  functional: true,
  props: {
    // 标题级别: primary secondary small
    level: {
      type: String,
      validator(v) {
        return oneOf(v, ['primary', 'secondary', 'small'])
      },
      default: 'primary',
    },
    // 标题内容
    title: {
      type: String,
      required: false,
    },
  },
  render(h, ctx) {
    const { level, title } = ctx.props
    return h(
      'header',
      {
        ...ctx.data,
        class: [prefixCls, ctx.data.class],
      },
      [
        h(
          `h${levelMap[level]}`,
          {
            class: [`${prefixCls}-title`, `${prefixCls}-${level}`],
          },
          [title],
        ),
        ctx.children,
      ],
    )
  },
}
