<template>
  <div class="Tab template">
    <h1>Tab</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Tab0></Tab0>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view">
      <h5>Tab props:</h5>
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
                当前激活 tab 面板的 value，可以使用 v-model 双向绑定数据
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">list</td>
              <td style="text-align:center;">传入 tabs 的格式化数据</td>
              <td style="text-align:center;">Array</td>
              <td style="text-align:center;">--</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>Tab list:</h5>
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
              <td style="text-align:center;">label</td>
              <td style="text-align:center;">单个 tab 面板显示的内容</td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">value</td>
              <td style="text-align:center;">
                单个 tab 面板实际值(用于确认选中哪个 tab)
              </td>
              <td style="text-align:center;">String | Number</td>
              <td style="text-align:center;">--</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>Tab events:</h5>
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
              <td style="text-align:center;">on-click</td>
              <td style="text-align:center;">tab 被点击时触发</td>
              <td style="text-align:center;">{ label, value }</td>
            </tr>
            <tr>
              <td style="text-align:center;">on-change</td>
              <td style="text-align:center;">tab 发生切换时触发</td>
              <td style="text-align:center;">{ label, value }</td>
            </tr>
          </tbody>
        </table>
      </figure>
    </div>
  </div>
</template>

<script>
import { Tab0 } from '../components/Tab'

export default {
  name: 'Tab',
  components: {
    Tab0,
  },
}
</script>
