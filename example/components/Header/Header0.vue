<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-header title="我是主标题"></sx-header>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">基础用法</span>
        <span class="template-info-content"
          >使用 Header 组件设置页面标题 (title: 标题内容)</span
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
<sx-header title="我是主标题"></sx-header>`,
    }
  },
}
</script>
