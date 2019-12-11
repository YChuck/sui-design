<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-button class="template-instance-item" reverse type="default"
          >reverse</sx-button
        >
        <sx-button class="template-instance-item" reverse type="error"
          >reverse</sx-button
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">样式反转</span>
        <span class="template-info-content"
          >向 Button 组件传入 reverse 属性来反转样式(仅 default 和 error
          有效)</span
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
<sx-button reverse type="default">reverse</sx-button>
<sx-button reverse type="error">reverse</sx-button>`,
    }
  },
}
</script>
