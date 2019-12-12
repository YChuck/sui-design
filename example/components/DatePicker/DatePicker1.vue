<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-date-picker
          class="template-instance-item"
          model="button"
          level="global"
        />
        <sx-date-picker
          class="template-instance-item"
          model="button"
          level="fragment"
        />
      </div>
      <div class="template-item-info">
        <span class="template-info-title">按钮时间选择器</span>
        <span class="template-info-content"
          >根据 level 属性展示不同层级按钮时间选择器 (level:
          global、fragment)</span
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
<sx-date-picker model="button" level="global"/>
<sx-date-picker model="button" level="fragment"/>`,
    }
  },
}
</script>
