<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-button class="template-instance-item" @click="show"
          >loading</sx-button
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">基础用法</span>
        <span class="template-info-content"
          >调用 show 展示 loading 遮罩层 (默认全局展示)<br />调用 hide 隐藏
          loading 遮罩层</span
        >
      </div>
    </div>
    <div class="template-item-right">
      <code-section :content="json" json></code-section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      json: `
 <sx-button @click="show">loading</sx-button>
 
 show() {
    this.$SxLoading.show()
    setTimeout(() => {
      this.$SxLoading.hide()
    }, 3000)
  }`,
    }
  },
  methods: {
    show() {
      this.$SxLoading.show()
      setTimeout(() => {
        this.$SxLoading.hide()
      }, 3000)
    },
  },
}
</script>
