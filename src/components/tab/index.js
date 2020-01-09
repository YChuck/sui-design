import Icon from '../icon'
import { isEmpty } from '../../utils'
import { LIGHT_FONT_COLOR } from '../../constants'

const prefixCls = 'sui-tab'

export default {
  name: 'SxTab',
  props: {
    // 组件使用 v-model
    value: {
      type: [Number, String],
    },
    tabs: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      selectedId: null,
    }
  },
  mounted() {
    // 初始化选中项
    if (this.value || this.value === 0) this.selectedId = this.value
  },
  render(h) {
    const { tabs, selectedId } = this

    return h(
      'div',
      { class: prefixCls },
      tabs.map(({ label, value, icon, class: classes }) => {
        console.log(classes)
        return h(
          'div',
          {
            key: value,
            class: {
              [`${prefixCls}-item`]: true,
              [`${prefixCls}-item-active`]: selectedId === value,
              [classes]: !!classes,
            },
            style: {
              flexDirection:
                icon && icon.position === 'left' ? 'row-reverse' : 'row',
            },
            on: {
              click: $e => {
                // 点击已选中项仅触发 on-click 事件
                this.$emit('on-click', { label, value }, $e)
                // 点击未选中项触发
                if (selectedId !== value) {
                  this.selectedId = value
                  // 组件使用 v-model
                  this.$emit('input', value)
                  this.$emit('on-change', { label, value }, $e)
                }
              },
            },
          },
          [
            label,
            !isEmpty(icon) &&
              !isEmpty(icon.type) &&
              (icon.show === 'always' ||
                (icon.show === 'active' && selectedId === value)) &&
              h(Icon, {
                props: {
                  type: icon.type,
                  color: icon.color || LIGHT_FONT_COLOR,
                  size: icon.size || 'normal',
                },
                on: {
                  click: $e => {
                    this.$emit('on-icon-click', $e)
                  },
                },
              }),
          ],
        )
      }),
    )
  },
}
