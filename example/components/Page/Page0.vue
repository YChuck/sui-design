<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-page class="template-instance-item" :total="50"></sx-page>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">基础用法</span>
        <span class="template-info-content"
          >使用 Page 组件展示分页组件(total: 设置总数).分页基于 iView Input
          开发,可使用<a href="http://v3.iviewui.com/components/page"
            >iView page</a
          >其他特性</span
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
<sx-page :total="50"></sx-page>`,
    }
  },
}
</script>
