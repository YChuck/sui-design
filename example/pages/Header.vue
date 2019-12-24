<template>
  <div class="Header template">
    <h1>Header</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Header0></Header0>
      <Header1></Header1>
      <Header2></Header2>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view">
      <h5>Header props:</h5>
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
                head 展示级别: primary secondary small
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">primary</td>
            </tr>
            <tr>
              <td style="text-align:center;">title</td>
              <td style="text-align:center;">标题内容</td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">--</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>Header slots</h5>
      <figure>
        <table>
          <thead>
            <tr>
              <th>插槽</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>默认插槽</td>
              <td>用于向 head 填充额外内容: 如按钮等</td>
            </tr>
          </tbody>
        </table>
      </figure>
    </div>
  </div>
</template>

<script>
import { Header0, Header1, Header2 } from '../components/Header'

export default {
  name: 'Header',
  components: {
    Header0,
    Header1,
    Header2,
  },
}
</script>
