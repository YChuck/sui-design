<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-date-picker
          class="template-instance-item"
          model="picker"
          level="global"
        />
        <sx-date-picker
          class="template-instance-item"
          model="picker"
          level="fragment"
        />
        <sx-date-picker
          class="template-instance-item"
          model="picker"
          level="form"
        />
      </div>
      <div class="template-item-info">
        <span class="template-info-title">显示框时间选择器</span>
        <span class="template-info-content"
          >根据 level 属性展示不同层级显示框时间选择器 (level: global、fragment,
          form).显示框时间选择器基于 iView Datepicker 组件开发,可使用 iView
          其他特征</span
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
<sx-date-picker model="picker" level="global"/>,
<sx-date-picker model="picker" level="fragment"/>,
<sx-date-picker model="picker" level="form"/>`,
    }
  },
}
</script>
