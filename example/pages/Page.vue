<template>
  <div class="Page template">
    <h1>Page</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Page0></Page0>
      <Page1></Page1>
      <Page2></Page2>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view">
      <h5>Page props:</h5>
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
              <td style="text-align:center;">value</td>
              <td style="text-align:center;">
                当前激活的页码，可以使用 v-model 双向绑定数据
              </td>
              <td style="text-align:center;">Number</td>
              <td style="text-align:center;">--</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>Page events:</h5>
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
              <td style="text-align:center;">选中页码变化时触发</td>
              <td style="text-align:center;">页码</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <p class="api-desc">
        Page组件基于 iView Page 封装,更多用法请查看
        <a href="http://v3.iviewui.com/components/page" target="_blank"
          >iView Page</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import { Page0, Page1, Page2 } from '../components/Page'

export default {
  name: 'Page',
  components: {
    Page0,
    Page1,
    Page2,
  },
}
</script>
