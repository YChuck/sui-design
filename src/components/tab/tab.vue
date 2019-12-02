<template>
  <div class="sui-tab">
    <div
      v-for="item in list"
      :key="item.value"
      :class="[
        'sui-tab-item',
        { 'sui-tab-item-active': selectedId === item.value },
      ]"
      @click="click($event, item)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SxTab',
  props: {
    // 组件使用 v-model
    value: {
      type: Number,
    },
    list: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      selectedId: -1,
    }
  },
  mounted() {
    // 初始化选中项
    if (this.value) this.selectedId = this.value
  },
  methods: {
    click($event, { label, value }) {
      // 点击已选中项仅触发 on-click 事件
      this.$emit('on-click', { label, value }, $event)
      // 点击未选中项触发
      if (this.selectedId !== value) {
        this.selectedId = value
        // 组件使用 v-model
        this.$emit('input', value)
        this.$emit('on-change', { label, value }, $event)
      }
    },
  },
}
</script>
