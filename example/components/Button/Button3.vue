<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-button
          class="template-instance-item"
          shape="circle"
          icon="icon-close"
        ></sx-button>
        <sx-button class="template-instance-item" shape="circle"
          >circle</sx-button
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">修改形状</span>
        <span class="template-info-content"
          >向 Button 组件传入 shape 属性来修改形状(circle)</span
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
<sx-button shape="circle" icon="icon-close"></sx-button>
<sx-button shape="circle">circle</sx-button>`,
    }
  },
}
</script>
