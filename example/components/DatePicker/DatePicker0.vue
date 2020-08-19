<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-date-picker
          class="template-instance-item"
          model="button"
        ></sx-date-picker>
        <sx-date-picker
          class="template-instance-item"
          model="picker"
        ></sx-date-picker>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">基础用法</span>
        <span class="template-info-content"
          >使用 DatePicker 传入 model 属性来展示不同类型事件选择器 (model:
          button、picker)</span
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
<sx-date-picker model="button"></sx-date-picker>
<sx-date-picker model="picker"></sx-date-picker>`,
    }
  },
}
</script>
