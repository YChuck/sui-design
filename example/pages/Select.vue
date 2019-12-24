<template>
  <div class="Select template">
    <h1>Select</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Select0></Select0>
      <Select1></Select1>
      <Select2></Select2>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view">
      <h5>Select props:</h5>
      <figure>
        <table>
          <thead>
            <tr>
              <th style="text-align:center;">属性</th>
              <th style="text-align:center;">说明</th>
              <th style="text-align:center;">类型</th>
              <th style="text-align:center;">默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;">level</td>
              <td style="text-align:center;">
                下拉选择框展示级别: global fragment form
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">fragment</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <p class="api-desc">
        Select组件基于 iView Select 封装,更多用法请查看
        <a href="http://v3.iviewui.com/components/select" target="_blank"
          >iView Select</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import { Select0, Select1, Select2 } from '../components/Select'

export default {
  name: 'Select',
  components: {
    Select0,
    Select1,
    Select2,
  },
}
</script>
