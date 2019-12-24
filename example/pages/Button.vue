<template>
  <div class="button template">
    <h1>Button</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Button0></Button0>
      <Button1></Button1>
      <Button2></Button2>
      <Button3></Button3>
      <Button4></Button4>
      <Button5></Button5>
      <Button6></Button6>
      <Button7></Button7>
      <Button8></Button8>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view">
      <h5>Button props:</h5>
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
              <td style="text-align:center;">type</td>
              <td style="text-align:center;">
                按钮类型: default dashed error cancel
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">default</td>
            </tr>
            <tr>
              <td style="text-align:center;">size</td>
              <td style="text-align:center;">
                按钮规范大小(可自定义): small normal large
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">normal</td>
            </tr>
            <tr>
              <td style="text-align:center;">icon</td>
              <td style="text-align:center;">按钮添加自定义图标</td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">shape</td>
              <td style="text-align:center;">
                按钮形状,可选值为 circle 或不设置
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">reverse</td>
              <td style="text-align:center;">
                按钮样式反转 (仅 default error 有效)
              </td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">false</td>
            </tr>
            <tr>
              <td style="text-align:center;">loading</td>
              <td style="text-align:center;">设置按钮为加载中状态</td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">false</td>
            </tr>
            <tr>
              <td style="text-align:center;">disabled</td>
              <td style="text-align:center;">设置按钮为禁用状态</td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">false</td>
            </tr>
            <tr>
              <td style="text-align:center;">to</td>
              <td style="text-align:center;">
                跳转的链接 (支持 vue-router 对象)
              </td>
              <td style="text-align:center;">String | Object</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">replace</td>
              <td style="text-align:center;">
                路由跳转,不会向 history 添加新记录
              </td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">false</td>
            </tr>
            <tr>
              <td style="text-align:center;">target</td>
              <td style="text-align:center;">a 标签的 target 属性</td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">_self</td>
            </tr>
            <tr>
              <td style="text-align:center;">append</td>
              <td style="text-align:center;">
                同 vue-router append (生成的路由是否依赖当前路由)
              </td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">false</td>
            </tr>
            <tr>
              <td style="text-align:center;">htmlType</td>
              <td style="text-align:center;">
                按钮原生类型: button submit reset
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">button</td>
            </tr>
          </tbody>
        </table>
      </figure>
    </div>
  </div>
</template>

<script>
import {
  Button0,
  Button1,
  Button2,
  Button3,
  Button4,
  Button5,
  Button6,
  Button7,
  Button8,
} from '../components/Button'

export default {
  name: 'Button',
  components: {
    Button0,
    Button1,
    Button2,
    Button3,
    Button4,
    Button5,
    Button6,
    Button7,
    Button8,
  },
}
</script>
