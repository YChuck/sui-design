<template>
  <div class="Tab template">
    <h1>Tab</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Tab0></Tab0>
      <Tab1></Tab1>
      <Tab2></Tab2>
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
              <td style="text-align:center;">tabs</td>
              <td style="text-align:center;">传入 tabs 的格式化数据</td>
              <td style="text-align:center;">Array</td>
              <td style="text-align:center;">--</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>Tab tabs:</h5>
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
            <tr>
              <td style="text-align:center;">class</td>
              <td style="text-align:center;">单个tab面板独有 class</td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">icon</td>
              <td style="text-align:center;">单个tab面板显示图标</td>
              <td style="text-align:center;">Object</td>
              <td style="text-align:center;">--</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>Tab icon</h5>
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
              <td style="text-align:center;">show</td>
              <td style="text-align:center;">
                图标显示条件(必填): always (总是显示) active (选中标签时显示)
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">type</td>
              <td style="text-align:center;">
                图标类型(必填): icon 组件 type 属性
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">color</td>
              <td style="text-align:center;">
                图标颜色: icon 组件 color 属性(仅未选中状态有效)
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">标签字体颜色</td>
            </tr>
            <tr>
              <td style="text-align:center;">size</td>
              <td style="text-align:center;">图标大小: icon 组件 size 属性</td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">normal</td>
            </tr>
            <tr>
              <td style="text-align:center;">position</td>
              <td style="text-align:center;">
                图标显示位置(默认在 tab 内容右边,可设置左边): left
              </td>
              <td style="text-align:center;">String</td>
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
            <tr>
              <td style="text-align:center;">on-icon-click</td>
              <td style="text-align:center;">
                点击单个 tab 的图标时触发(默认冒泡触发 on-click)
              </td>
              <td style="text-align:center;">{ label, value }</td>
            </tr>
          </tbody>
        </table>
      </figure>
    </div>
  </div>
</template>

<script>
import { Tab0, Tab1, Tab2 } from '../components/Tab'

export default {
  name: 'Tab',
  components: {
    Tab0,
    Tab1,
    Tab2,
  },
}
</script>
