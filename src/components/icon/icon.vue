<template>
  <svg aria-hidden="true" :class="classes" :fill="color" @click="handleClick">
    <use :xlink:href="href" />
  </svg>
</template>

<script>
const prefixCLs = 'sui-icon'

/**
 * Icon 组件
 */
export default {
  name: 'SxIcon',
  props: {
    // 图标id
    type: {
      type: String,
      default: '',
    },
    // 图标大小: small normal large
    size: {
      type: String,
      default: 'normal',
    },
    // 图标颜色
    color: String,
  },
  computed: {
    href() {
      return `#${this.type}`
    },
    classes() {
      return [prefixCLs, `${prefixCLs}-${this.size}`]
    },
  },
  methods: {
    handleClick($event) {
      this.$emit('click', $event)
    },
  },
}
</script>
