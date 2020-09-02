<template>
  <div :class="`${prefixCls}`">
    <div
      :class="`${prefixCls}-mask`"
      v-show="visible"
      @click="onMaskClick"
    ></div>
    <div :class="`${prefixCls}-content`" v-show="visible">
      <div :class="`${prefixCls}-header`">
        <slot name="header">
          <div :class="`${prefixCls}-header-inner`">{{ title }}</div>
        </slot>
        <a :class="`${prefixCls}-close`" v-if="hasIcon" @click="close">
          <slot name="close">
            <Icon
              :class="`${prefixCls}-close-icon`"
              type="icon-close"
              color="#4A4A4A"
            ></Icon>
          </slot>
        </a>
      </div>
      <div :class="`${prefixCls}-body`">
        <slot></slot>
      </div>
      <div :class="`${prefixCls}-footer`" v-if="hasFooter">
        <slot name="footer">
          <Button type="default" @click="ok" :disabled="okDis">{{
            okText
          }}</Button>
          <Button type="cancel" @click="cancel" :disabled="cancelDis">{{
            cancelText
          }}</Button>
          <Button
            type="error"
            @click="error"
            :disabled="errorDis"
            v-if="hasError"
            >{{ errorText }}</Button
          >
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
import Button from '../button'

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
      default: false,
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
    okDisabled: {
      type: Boolean,
      default: false,
    },
    cancelDisabled: {
      type: Boolean,
      default: false,
    },
    errorDisabled: {
      type: Boolean,
      default: false,
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
      visible: this.value,
      okDis: this.okDisabled,
      cancelDis: this.cancelDisabled,
      errorDis: this.errorDisabled,
    }
  },
  watch: {
    value(val) {
      this.visible = val
    },
    okDisabled(val) {
      this.okDis = val
    },
    cancelDisabled(val) {
      this.cancelDis = val
    },
    errorDisabled(val) {
      this.errorDis = val
    },
  },
  mounted() {
    document.addEventListener('keydown', this.onKeyDown)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeyDown)
  },
  methods: {
    ok() {
      this.$emit('input', false)
      this.$emit('on-ok')
    },
    cancel() {
      this.$emit('input', false)
      this.$emit('on-cancel')
    },
    error() {
      this.$emit('input', false)
      this.$emit('on-error')
    },
    close() {
      this.cancel()
    },
    onMaskClick() {
      this.maskClosable && this.close()
    },
    onKeyDown(e) {
      this.visible && this.keyClosable && e.keyCode === 27 && this.close()
    },
  },
}
</script>
