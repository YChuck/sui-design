<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <div>id: {{ id }}</div>
        <sx-button @click="openSlots" class="template-instance-item"
          >openSlots
        </sx-button>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">实例化使用方法(2)</span>
        <span class="template-info-content">
          <b>componentData</b> 格式: [_this, ...tags]<br />
          -- _this: 要传递给弹窗内容组件的数据来源 (vue 实例)<br />
          -- tag: 要传递给弹窗内容组件的数据标识<br />
          (通过 content[tag] = _this[tag] 实现数据传递)
        </span>
      </div>
    </div>
    <div class="template-item-right">
      <code-section :content="json" json></code-section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      id: 0,
      json: `
async openSlots() {
  this.$SxModal.open({
    // 不持久化 Modal 实例 (关闭即销毁)
    keep: false,
    componentData: [this, 'id'],
    props: {
      title: '实例化弹窗(普通标题)',
      maskClosable: true,
      hasError: true,
    },
    // 额外事件监听
    on: {
      ok: () => {
        console.log('modal3 ok')
      },
      cancel: () => {
        console.log('modal3 cancel')
      },
      error: () => {
        console.log('modal3 error')
      },
    },
    // 插槽模式 (不支持异步组件,支持 render 渲染)
    scopedSlots: h => ({
      default: () => h(require('./temp0').default),
      header: () => h('span', '实例化弹窗(插槽模式)'),
      close: () => h('span', 'close'),
      // footer: () => h('span', 'footer'),
    }),
  })
}`,
    }
  },
  methods: {
    async openSlots() {
      this.$SxModal.open({
        keep: false,
        componentData: [this, 'id'],
        props: {
          title: '实例化弹窗(普通标题)',
          maskClosable: true,
          hasError: true,
        },
        on: {
          ok: () => {
            console.log('modal3 ok')
          },
          cancel: () => {
            console.log('modal3 cancel')
          },
          error: () => {
            console.log('modal3 error')
          },
        },
        scopedSlots: h => ({
          default: () => h(require('./temp1').default),
          header: () => h('span', '实例化弹窗(插槽模式)'),
          close: () => h('span', 'close'),
          // footer: () => h('span', 'footer'),
        }),
      })
    },
  },
}
</script>
