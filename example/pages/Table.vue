<template>
  <div class="Table template">
    <h1>Table</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Table0></Table0>
      <Table1></Table1>
      <Table2></Table2>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view">
      <h5>Table props:</h5>
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
              <td style="text-align:center;">more</td>
              <td style="text-align:center;">
                设置展示更多限制,默认15条限制 (若为 Number
                则自动开启并将数值设置为最大限制条数)
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">false</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <p class="api-desc">
        Table组件基于 iView Table 封装,更多用法请查看
        <a href="http://v3.iviewui.com/components/table" target="_blank"
          >iView Table</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import { Table0, Table1, Table2 } from '../components/Table'

export default {
  name: 'Table',
  components: {
    Table0,
    Table1,
    Table2,
  },
}
</script>
