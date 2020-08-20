<template>
  <div class="template-item">
    <div class="template-item-left" id="father1">
      <div class="template-instance">
        <sx-button class="template-instance-item" @click="show"
          >loading</sx-button
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">局部显示</span>
        <span class="template-info-content"
          >调用 show 传入 <b>父元素选择器</b> 展示 loading 遮罩层
          到对应元素内部<br />调用 hide 传入 <b>父元素选择器</b> 隐藏该 loading
          遮罩层</span
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
    this.$SxLoading.show('#father1')
    setTimeout(() => {
      this.$SxLoading.hide('#father1')
    }, 3000)
  }`,
    }
  },
  methods: {
    show() {
      this.$SxLoading.show('#father1')
      setTimeout(() => {
        this.$SxLoading.hide('#father1')
      }, 3000)
    },
  },
}
</script>
