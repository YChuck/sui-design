<template>
  <transition :name="transitionName" appear>
    <div class="sui-notice">
      <icon
        v-if="icon"
        class="sui-notice-icon"
        :type="iconType"
        :size="iconSize"
        :color="iconColor"
      ></icon>
      <div class="sui-notice-main">
        <div class="sui-notice-title" v-if="title">{{ title }}</div>
        <div class="sui-notice-content" v-if="content">
          <div v-if="!isRender" v-html="content"></div>
          <render-cell v-else :render="content"></render-cell>
        </div>
      </div>
      <icon
        v-if="closable"
        class="sui-notice-close"
        type="icon-close"
        size="small"
        color="#999"
        @click="close"
      ></icon>
    </div>
  </transition>
</template>

<script>
import { isFunction, isString, isObject } from '../../../utils'
import Icon from '../../icon'
import RenderCell from './render'

const prefixCLs = 'sui-notice'

export default {
  name: 'SxNotice',
  components: {
    Icon,
    RenderCell,
  },
  props: {
    name: {
      type: String,
      require: true,
    },
    title: String,
    content: {
      type: [String, Function],
    },
    duration: {
      type: Number,
      default: 1.5,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: [String, Object],
      default: '',
    },
    onClose: {
      type: Function,
    },
    transitionName: String,
  },
  computed: {
    isRender() {
      return isFunction(this.content)
    },
    iconType() {
      let icon = this.icon
      return isString(icon) ? icon : icon.type || ''
    },
    iconSize() {
      return this.icon.size || 'small'
    },
    iconColor() {
      return this.icon.color || ''
    },
  },
  methods: {
    clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer)
        this.closeTimer = null
      }
    },
    close() {
      this.clearCloseTimer()
      if (isFunction(this.onClose)) this.onClose()
      this.$parent.close(this.name)
    },
  },
  mounted() {
    this.clearCloseTimer()
    if (this.duration !== 0) {
      this.closeTimer = setTimeout(() => {
        this.close()
      }, this.duration * 1000)
    }
  },
  beforeDestroy() {
    this.clearCloseTimer()
  },
}
</script>
