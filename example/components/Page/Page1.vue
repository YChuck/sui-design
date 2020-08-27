<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-page
          class="template-instance-item"
          v-model="page"
          :total="50"
        ></sx-page>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">双向绑定</span>
        <span class="template-info-content"
          >使用 v-model 来双向绑定选中页码</span
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
<sx-page v-model="page" :total="50"></sx-page>`,
      page: 3,
    }
  },
}
</script>
