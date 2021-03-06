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
        <div :class="contentClasses" v-if="content">
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
    // 类型: notice message
    type: {
      type: String,
      require: true,
    },
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
      // 默认: notice's iconSize = normal; message's  iconSize = small
      return this.icon.size || (this.type === 'notice' ? 'normal' : 'small')
    },
    iconColor() {
      return this.icon.color || ''
    },
    contentClasses() {
      return {
        'sui-notice-content': true,
        'sui-notice-content-only': !this.title,
      }
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
