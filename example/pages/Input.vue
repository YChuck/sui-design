<template>
  <div class="Input template">
    <h1>Input</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Input0></Input0>
      <Input1></Input1>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view">
      <h5>Input props:</h5>
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
                输入框展示级别: global fragment form
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">fragment</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <p class="api-desc">
        Input组件基于 iView Input 封装,更多用法请查看
        <a href="http://v3.iviewui.com/components/input" target="_blank"
          >iView Input</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import { Input0, Input1, Input2, Input3 } from '../components/Input'

export default {
  name: 'Input',
  components: {
    Input0,
    Input1,
  },
}
</script>
