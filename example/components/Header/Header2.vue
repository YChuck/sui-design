<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-header title="填充内容啦"><sx-button>click</sx-button></sx-header>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">内容填充</span>
        <span class="template-info-content">使用插槽向标题栏填充内容</span>
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
<sx-header title="我是主标题">
  <sx-button>click</sx-button>
</sx-header>`,
    }
  },
}
</script>
