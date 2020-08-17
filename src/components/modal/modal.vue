<template>
  <section>
    <div :class="`${prefixCls}-mask`" v-show="visible" @click="mask"></div>
    <div :class="`${prefixCls}`" :style="customStyles" v-show="visible">
      <div :class="`${prefixCls}-content`">
        <a :class="`${prefixCls}-close`" v-if="hasIcon" @click="close">
          <slot name="close">
            <Icon type="icon-close"></Icon>
          </slot>
        </a>
        <div :class="`${prefixCls}-header`" v-if="showHead">
          <slot name="header">
            <div :class="`${prefixCls}-header-inner`">{{ title }}</div>
          </slot>
        </div>
        <div :class="`${prefixCls}-body`">
          <slot></slot>
        </div>
        <div :class="`${prefixCls}-footer`" v-if="!hasFooter">
          <slot name="footer">
            <div :class="`${prefixCls}-footer-boot`">
              <Button type="default" @click.native="ok">{{ okText }}</Button>
              <Button type="cancel" @click.native="cancel">{{
                cancelText
              }}</Button>
            </div>
            <Button type="error" @click.native="error" v-show="hasError">{{
              errorText
            }}</Button>
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from '../icon/index'
import Button from '../button/index'

const prefixCls = 'sui-modal'

export default {
  name: 'SxModal',
  components: { Icon, Button },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    hasIcon: {
      type: Boolean,
      default: true,
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
    },
    okText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    errorText: {
      type: String,
      default: '删除',
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: 520,
    },
    customStyle: {
      type: Object,
    },
    hasFooter: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      prefixCls: prefixCls,
      showHead: true,
      visible: this.value,
    }
  },
  computed: {
    customStyles() {
      let style = {}
      const width = parseInt(this.width)
      const styleWidth = {
        width: width <= 100 ? `${width}%` : `${width}px`,
      }
      const customStyle = this.customStyle ? this.customStyle : {}
      Object.assign(style, styleWidth, customStyle)
      return style
    },
  },
  methods: {
    ok() {
      this.visible = false
      this.$emit('input', false)
      this.$emit('on-ok')
    },
    close() {
      this.visible = false
      this.$emit('input', false)
      this.$emit('on-cancel')
    },
    error() {
      this.visible = false
      this.$emit('input', false)
      this.$emit('on-error')
    },
    cancel() {
      this.close()
    },
    mask() {
      if (this.maskClosable) {
        this.close()
      }
    },
    EscClose(e) {
      if (this.visible && this.hasIcon) {
        if (e.keyCode === 27) {
          this.close()
        }
      }
    },
  },
  mounted() {
    let showHead = true
    if (this.$slots.header === undefined && !this.title) {
      showHead = false
    }
    this.showHead = showHead
    document.addEventListener('keydown', this.EscClose)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.EscClose)
  },
  watch: {
    value(val) {
      this.visible = val
    },
    // 无title时自动隐藏header
    title(val) {
      if (this.$slots.header === undefined) {
        this.showHead = !!val
      }
    },
  },
}
</script>
