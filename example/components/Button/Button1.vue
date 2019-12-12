<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-button class="template-instance-item" size="small">small</sx-button>
        <sx-button class="template-instance-item" size="normal"
          >normal</sx-button
        >
        <sx-button class="template-instance-item" size="large">large</sx-button>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">修改大小</span>
        <span class="template-info-content"
          >向 Button 组件传入 size 属性来修改大小(small、normal、large)</span
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
<sx-button size="small">small</sx-button>
<sx-button size="normal">normal</sx-button>
<sx-button size="large">large</sx-button>`,
    }
  },
}
</script>
