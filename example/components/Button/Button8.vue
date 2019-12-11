<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-button class="template-instance-item" htmlType="button"
          >button</sx-button
        >
        <sx-button class="template-instance-item" htmlType="submit"
          >submit</sx-button
        >
        <sx-button class="template-instance-item" htmlType="reset"
          >reset</sx-button
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">设置按钮类型</span>
        <span class="template-info-content"
          >通过 htmlType 属性来设置按钮的原生类型(button、submit、reset)</span
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
<sx-button htmlType="button">button</sx-button>
<sx-button htmlType="submit">submit</sx-button>
<sx-button htmlType="reset">reset</sx-button>`,
    }
  },
}
</script>
