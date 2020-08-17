<template>
  <div class="Modal template">
    <h1>Modal</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Modal0></Modal0>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view">
      <h5>Modal props:</h5>
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
            <tr v-for="(value, key, index) in props" :key="index">
              <td>{{ key }}</td>
              <td>{{ value.intro }}</td>
              <td>{{ value.type.name }}</td>
              <td>{{ value.default }}</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>Modal events:</h5>
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
              <td style="text-align:center;">on-ok</td>
              <td style="text-align:center;">确认按钮点击事件</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">on-cancel</td>
              <td style="text-align:center;">取消按钮点击事件</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">on-error</td>
              <td style="text-align:center;">error按钮点击事件</td>
              <td style="text-align:center;">--</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <p class="api-desc">Modal组件类似于 iView Modal</p>
    </div>
  </div>
</template>

<script>
import { Modal0 } from '../components/Modal/index'

export default {
  name: 'Modal',
  components: {
    Modal0,
  },
  data() {
    return {
      props: {
        value: {
          type: Boolean,
          default: false,
          intro: 'v-model绑定切换显示',
        },
        closable: {
          type: Boolean,
          default: true,
          intro: '开启关闭按钮与ESC按键关闭',
        },
        maskClosable: {
          type: Boolean,
          default: true,
          intro: '蒙版关闭',
        },
        title: {
          intro: '标题',
          type: String,
          default: '--',
        },
        hasIcon: {
          intro: '关闭按钮是否展示',
          type: Boolean,
          default: true,
        },
        okText: {
          intro: '确认按钮文字',
          type: String,
          default: '确定',
        },
        cancelText: {
          intro: '取消按钮文字',
          type: String,
          default: '取消',
        },
        errorText: {
          intro: 'error按钮文字',
          type: String,
          default: '删除',
        },
        hasError: {
          intro: '有无error按钮',
          type: Boolean,
          default: false,
        },
        width: {
          intro: 'Modal宽度',
          type: [Number, String],
          default: 520,
        },
        customStyle: {
          intro: '自定义样式',
          default: '--',
          type: Object,
        },
        hasFooter: {
          intro: '有无底部栏',
          type: Boolean,
          default: false,
        },
      },
    }
  },
}
</script>
