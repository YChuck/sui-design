<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-icon class="template-instance-item" type="icon-area"></sx-icon>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">基础用法</span>
        <span class="template-info-content"
          >使用 Icon 组件快速显示图标,根据传入 type 类型来显示不同的图标</span
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
<sx-icon type="icon-area"></sx-icon>`,
    }
  },
}
</script>
