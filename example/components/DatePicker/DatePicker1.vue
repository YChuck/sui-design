<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-date-picker
          class="template-instance-item"
          model="button"
          level="global"
          :pickerOptions="pickers"
        />
        <sx-date-picker
          class="template-instance-item"
          model="button"
          level="fragment"
          showCustom
        />
      </div>
      <div class="template-item-info">
        <span class="template-info-title">按钮时间选择器</span>
        <span class="template-info-content"
          >根据 level 属性展示不同层级按钮时间选择器 (level:
          global、fragment).按钮选择器弹出框基于
          <a
            href="https://element.eleme.cn/#/zh-CN/component/date-picker"
            target="_blank"
          >
            Element-UI DatePicker</a
          >.<br />
          <b>pickerOptions</b> 属性自定义 Element UI 的 Picker Options 属性
          (区别本属性为数组 0项为第一个按钮的配置,以此类推
          仅作用于按钮选择器)<br />
          <b>showCustom</b> 属性判断是否显示自定义时间选择按钮 (选择时间范围)
        </span>
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
<sx-date-picker model="button" level="global" :pickerOptions="pickers"/>
<sx-date-picker model="button" level="fragment" showCustom/>

pickers: [
  {
    disabledDate: time => {
      return time.getTime() > Date.now() - 86400000 * 2
    },
  },
]`,
      pickers: [
        {
          disabledDate: time => {
            return time.getTime() > Date.now() - 86400000 * 2
          },
        },
      ],
    }
  },
}
</script>
