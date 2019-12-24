<template>
  <div class="DatePicker template">
    <h1>DatePicker</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <DatePicker0></DatePicker0>
      <DatePicker1></DatePicker1>
      <DatePicker2></DatePicker2>
      <DatePicker3></DatePicker3>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view">
      <h5>DatePicker props:</h5>
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
              <td style="text-align:center;">model</td>
              <td style="text-align:center;">
                选择器类型: button(按钮选择器) picker(通用选择器)
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">picker</td>
            </tr>
            <tr>
              <td style="text-align:center;">level</td>
              <td style="text-align:center;">
                选择器展示级别: global fragment form(按钮类型无 form 级别)
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">fragment</td>
            </tr>
            <tr>
              <td style="text-align:center;">defaultSelect</td>
              <td style="text-align:center;">
                默认选中:date week month one seven thirty (仅 button 可用,
                picker 请设置 value 值)
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">one</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>DatePicker events:</h5>
      <figure>
        <table>
          <thead>
            <tr>
              <th style="text-align:center;">事件名</th>
              <th style="text-align:center;">说明</th>
              <th style="text-align:center;">返回值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;">on-change</td>
              <td style="text-align:center;">当日期选择发生变化时触发</td>
              <td style="text-align:center;">
                { first: moment (00:00:00), last: moment (23:59:59), type:
                日期类型 }
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <p class="api-desc">
        DatePicker组件基于 iView DatePicker 封装,更多用法请查看
        <a href="http://v3.iviewui.com/components/date-picker" target="_blank"
          >iView DatePicker</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import {
  DatePicker0,
  DatePicker1,
  DatePicker2,
  DatePicker3,
} from '../components/DatePicker'

export default {
  name: 'DatePicker',
  components: {
    DatePicker0,
    DatePicker1,
    DatePicker2,
    DatePicker3,
  },
}
</script>
