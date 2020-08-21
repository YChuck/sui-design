<template>
  <section>
    <div :class="`${prefixCls}-mask`" v-show="visible" @click="mask"></div>
    <div :class="`${prefixCls}`" v-show="visible">
      <div :class="`${prefixCls}-content`">
        <a :class="`${prefixCls}-close`" v-if="hasIcon" @click="close">
          <slot name="close">
            <Icon size="normal" type="icon-close"></Icon>
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
        <div :class="`${prefixCls}-footer`" v-if="hasFooter">
          <slot name="footer">
            <div :class="`${prefixCls}-footer-boot`">
              <Button type="default" @click="ok">{{ okText }}</Button>
              <Button type="cancel" @click="cancel">{{ cancelText }}</Button>
            </div>
            <Button type="error" @click="error" v-show="hasError">{{
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
    keyClosable: {
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
    hasFooter: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      prefixCls: prefixCls,
      showHead: true,
      visible: this.value,
    }
  },
  methods: {
    ok() {
      this.visible = false
      this.$emit('input', false)
      this.$emit('on-ok')
    },
    cancel() {
      this.visible = false
      this.$emit('input', false)
      this.$emit('on-cancel')
    },
    close() {
      this.cancel()
    },
    error() {
      this.visible = false
      this.$emit('input', false)
      this.$emit('on-error')
    },
    mask() {
      this.maskClosable && this.close()
    },
    EscClose(e) {
      this.visible && this.keyClosable && e.keyCode === 27 && this.close()
    },
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
  mounted() {
    this.showHead = this.$slots.header || this.title
    document.addEventListener('keydown', this.EscClose)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.EscClose)
  },
}
</script>
