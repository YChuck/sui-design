<template>
  <component
    :is="tagName"
    :class="classes"
    :disabled="disabled"
    @click="handleClickLink"
    v-bind="tagProps"
  >
    <Icon class="sui-load-loop" type="icon-loading" v-if="loading"></Icon>
    <Icon :type="icon" v-if="icon && !loading"></Icon>
    <span v-if="showSlot" ref="slot">
      <slot></slot>
    </span>
  </component>
</template>

<script>
import Icon from '../icon'
import { oneOf } from '../../utils'
import minxinsLink from '../../mixins/link'

const prefixCls = 'sui-btn'

export default {
  name: 'SxButton',
  components: { Icon },
  mixins: [minxinsLink],
  props: {
    // 按钮类型
    type: {
      default: 'default',
      validator(v) {
        return oneOf(v, [
          'default',
          'primary',
          'dashed',
          'text',
          'success',
          'info',
          'error',
          'warning',
          'cancel',
          'check',
        ])
      },
    },
    // 按钮大小
    size: {
      default: 'normal',
      validator(v) {
        return oneOf(v, ['small', 'normal', 'large'])
      },
    },
    // 按钮形状: default circle
    shape: {
      validator(v) {
        return oneOf(v, ['circle'])
      },
    },
    // 样式反转 (内容和背景颜色反转 仅背景全填充样式有效:如 default error)
    reverse: {
      type: Boolean,
      default: false,
    },
    // 按钮原生 type
    htmlType: {
      default: 'button',
      validator(v) {
        return oneOf(v, ['button', 'submit', 'reset'])
      },
    },
    // 添加 Icon
    icon: {
      type: String,
      default: '',
    },
    // 禁用标记
    disabled: Boolean,
    // 显示加载中 Icon
    loading: Boolean,
  },
  data() {
    return {
      showSlot: true,
    }
  },
  computed: {
    classes() {
      return [
        prefixCls,
        `${prefixCls}-${this.type}`,
        {
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-${this.size}`]: this.size !== 'default',
          [`${prefixCls}-loading`]: this.loading,
          [`${prefixCls}-icon-only`]:
            !this.showSlot && (!!this.icon || this.loading),
          [`${prefixCls}-reverse`]: this.reverse,
        },
      ]
    },
    // 设置元素类型
    tagName() {
      return this.to ? 'a' : 'button'
    },
    // 根据 props 以及 元素类型 添加对应的 attrs
    tagProps() {
      if (this.to) {
        return { href: this.linkUrl, target: this.target }
      } else {
        return { type: this.htmlType }
      }
    },
  },
  methods: {
    // Ctrl or CMD and click, open in new window when use `to`
    handleClickLink(e) {
      this.$emit('click', e)
      this.handleCheckClick(e, e.ctrlKey || e.metaKey)
    },
  },
  mounted() {
    this.showSlot = this.$slots.default !== undefined
  },
}
</script>
