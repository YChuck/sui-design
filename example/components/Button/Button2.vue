<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-button class="template-instance-item" icon="icon-play"
          >play</sx-button
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">添加图标</span>
        <span class="template-info-content"
          >向 Button 组件传入 icon 属性来添加图标(Icon组件type属性的别称)</span
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
<sx-button icon="icon-play">play</sx-button>`,
    }
  },
}
</script>
