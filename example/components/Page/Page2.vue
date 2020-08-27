<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-page
          class="template-instance-item"
          v-model="page"
          :total="50"
          showCount
        ></sx-page>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">显示总量</span>
        <span class="template-info-content"
          >设置 showCount 属性来展示数据总数信息</span
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
<sx-page 
  v-model="page" 
  :total="50" 
  showCount></sx-page>`,
      page: 3,
    }
  },
}
</script>
