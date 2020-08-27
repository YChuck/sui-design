<template>
  <div class="Table template">
    <h1>Loading</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Loading0></Loading0>
      <Loading1></Loading1>
      <Loading2></Loading2>
      <Loading3></Loading3>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view">
      <h5>loading func:</h5>
      <figure>
        <table>
          <thead>
            <tr>
              <th style="text-align:center;">方法</th>
              <th style="text-align:center;">参数</th>
              <th style="text-align:center;">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;">Loading.config(config)</td>
              <td style="text-align:center;">
                config: 全局默认配置 (Object类型)
              </td>
              <td style="text-align:center;">
                用于配置 Loading&#39;icon 自定义样式 (优先级低于自定义配置)
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">Loading.show(option)</td>
              <td style="text-align:center;">
                option: 自定义配置 (Object | String 类型)
              </td>
              <td style="text-align:center;">
                通过传入对应配置来展示 loading.若传入字符串则用于设置 loading
                依赖的 父节点选择器 (query属性)
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">Loading.hide(query)</td>
              <td style="text-align:center;">
                query: 要关闭的 loading 的 query 标识 (String | Null 类型)
              </td>
              <td style="text-align:center;">
                通过传入 query (父节点选择器) 来查找已显示的 loading
                实例并关闭.无参则关闭全局 loading 实例
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>loading config:</h5>
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
              <td style="text-align:center;">icon</td>
              <td style="text-align:center;">
                自定义图标: 包括所有 Icon 组件属性, 用于设置 Loading 组件全局
                icon 配置
              </td>
              <td style="text-align:center;">Object</td>
              <td style="text-align:center;">--</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>loading option:</h5>
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
              <td style="text-align:center;">query</td>
              <td style="text-align:center;">
                当前展示的 loading 组件依赖的父元素选择器 (也用作已存在 loading
                实例的唯一标识)
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">CSS选择器</td>
            </tr>
            <tr>
              <td style="text-align:center;">icon</td>
              <td style="text-align:center;">
                自定义图标: 包括所有 Icon 组件属性 (用于设置当前 loading
                实例自定义 icon 样式, 优先级高于全局配置)
              </td>
              <td style="text-align:center;">Object</td>
              <td style="text-align:center;">--</td>
            </tr>
          </tbody>
        </table>
      </figure>
    </div>
  </div>
</template>

<script>
import { Loading0, Loading1, Loading2, Loading3 } from '../components/Loading'

export default {
  name: 'Loading',
  components: {
    Loading0,
    Loading1,
    Loading2,
    Loading3,
  },
}
</script>
