<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-input
          class="template-instance-item"
          level="global"
          style="width: 80px;"
        />
        <sx-input
          class="template-instance-item"
          level="fragment"
          style="width: 80px;"
        />
        <sx-input
          class="template-instance-item"
          level="form"
          style="width: 80px;"
        />
      </div>
      <div class="template-item-info">
        <span class="template-info-title">样式类型</span>
        <span class="template-info-content"
          >使用 level 来改变输入框样式(level: global、fragment、form)</span
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
<sx-input level="global""></sx-input>
<sx-input level="fragment""></sx-input>
<sx-input level="form""></sx-input>`,
    }
  },
}
</script>
