<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-icon
          class="template-instance-item"
          type="icon-cumulative"
          color="#f5e"
        ></sx-icon>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">修改颜色</span>
        <span class="template-info-content"
          >向 Icon 组件传入 color 属性来修改颜色(字符串类型)</span
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
<sx-icon type="icon-cumulative" color="#f5e"></sx-icon>`,
    }
  },
}
</script>
