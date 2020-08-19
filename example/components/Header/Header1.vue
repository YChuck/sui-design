<template>
  <div class="template-item">
    <div class="template-item-left">
      <div>
        <sx-header title="我是主标题" level="primary"></sx-header>
        <sx-header title="我是次标题" level="secondary"></sx-header>
        <sx-header title="我是小标题" level="small"></sx-header>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">标题类型</span>
        <span class="template-info-content"
          >使用 level 来改变标题栏样式(level: primary
          (默认)、secondary、small)</span
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
<sx-header title="我是主标题" level="primary"></sx-header>
<sx-header title="我是次标题" level="secondary"></sx-header>
<sx-header title="我是小标题" level="small"></sx-header>`,
    }
  },
}
</script>
