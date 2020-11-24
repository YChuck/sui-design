<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-date-picker
          class="template-instance-item"
          model="button"
          level="global"
          defaultSelect="date"
          :defaultValue="new Date('2020.01.01')"
        />
      </div>
      <div class="template-item-info">
        <span class="template-info-title">默认选中</span>
        <span class="template-info-content"
          >按钮时间选择器使用 defaultSelect
          来控制默认选中(date、week、month、one、seven、thirty). 使用
          defaultValue 来控制默认选中日期. <br />显示框时间选择器使用 value
          属性(<a href="http://v3.iviewui.com/components/date-picker"
            >iView Datepicker</a
          >)</span
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
<sx-date-picker
  model="button"
  level="global"
  defaultSelect="date"
  :defaultValue="new Date('2020.01.01')"/>`,
    }
  },
}
</script>
