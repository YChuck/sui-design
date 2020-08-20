import Icon from '../icon'

const prefixCls = 'sui-loading'

export default {
  name: 'SxLoading',
  functional: true,
  props: {
    icon: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  render(h, ctx) {
    return h('div', { class: prefixCls }, [
      h(Icon, {
        props: {
          type: 'icon-loading-2',
          color: '#6D9CFC',
          size: 'normal',
          ...ctx.props.icon,
        },
        class: ['sui-load-loop'],
      }),
    ])
  },
}
