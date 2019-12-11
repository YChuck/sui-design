<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-button class="template-instance-item" to="/">to</sx-button>
        <sx-button class="template-instance-item" to="/" replace
          >replace</sx-button
        >
        <sx-button class="template-instance-item" to="/" target="_blank"
          >target</sx-button
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">跳转</span>
        <span class="template-info-content"
          >设置 to (a标签) 可以实现点击按钮直接跳转(支持vue-router)。 设置
          replace 则不会保存历史记录。 设置 target，会跟 a 标签一样的行为</span
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
<sx-button to="/">to</sx-button>
<sx-button to="/" replace>replace</sx-button>
<sx-button to="/" target="_blank">target</sx-button>`,
    }
  },
}
</script>
