<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-icon
          class="template-instance-item"
          type="icon-calendar"
          size="small"
        ></sx-icon>
        <sx-icon
          class="template-instance-item"
          type="icon-calendar"
          size="normal"
        ></sx-icon>
        <sx-icon
          class="template-instance-item"
          type="icon-calendar"
          size="large"
        ></sx-icon>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">修改大小</span>
        <span class="template-info-content"
          >向 Icon 组件传入 size 属性来修改大小(small、normal、large)</span
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
<sx-icon type="icon-calendar" size="small"></sx-icon>
<sx-icon type="icon-calendar" size="normal"></sx-icon>
<sx-icon type="icon-calendar" size="large"></sx-icon>`,
    }
  },
}
</script>
