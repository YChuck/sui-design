<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <div>id: {{ id }}</div>
        <sx-button @click="openAsync" class="template-instance-item"
          >openAsync
        </sx-button>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">实例化使用方法(1)</span>
        <span class="template-info-content"
          >调用 $Modal.open 方法传入配置对象展示弹窗 (<b>返回 Promise 对象</b
          >).<br />配置对象(类似 render 中的数据对象)包含 <b>props</b>
          <b>on</b> <b>component</b> <b>scopedSlots</b> <b>keep</b>
          <b>componentData</b> 六大属性 (具体用途参考 api 文档)<br /><br /><b
            >keep</b
          >
          属性明确当前弹窗不自动销毁,可重复利用 (需自行销毁).<br /><b
            >componentData</b
          >
          属性用于逻辑组件向弹窗组件传递数据.<br /><b>component</b>
          属性用于弹出逻辑组件的引入 (必须为函数!).<br /><b>scopedSlots</b>
          作用域插槽配置函数(注意是函数,执行后才返回作用域插槽配置!) 用于设置
          Modal 组件中暴露的各种插槽 (其中 default 默认插槽优先级低于 component
          属性).<br /><br />当弹窗逻辑组件包含 ok cancel error
          函数时,点击默认按钮将优先触发之,再触发 config.on 中对应事件.</span
        >
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
    this.modal = null
    return {
      id: 0,
      json: `
async openAsync() {
  if (this.modal) {
    this.modal.display(true)
    return
  }
  this.modal = await this.$SxModal.open({
    // 异步组件导入
    component: () => import(/* webpackChunkName: 'temp0' */ './temp0'),
    // 数据传递标识数组 (首项必须是传递数据所在 this 指针)
    componentData: [this, 'id'],
    props: {
      title: '实例化弹窗',
      maskClosable: true,
    },
  })
}
beforeDestroy() {
  // 组件销毁时,手动销毁持有的 Modal 实例
  if (this.modal) {
    this.modal.destroy()
    this.modal = null
  }
}`,
    }
  },
  beforeDestroy() {
    if (this.modal) {
      this.modal.destroy()
      this.modal = null
    }
  },
  methods: {
    async openAsync() {
      if (this.modal) {
        this.modal.display(true)
        return
      }
      this.modal = await this.$SxModal.open({
        component: () => import(/* webpackChunkName: 'temp0' */ './temp0'),
        componentData: [this, 'id'],
        props: {
          title: '实例化弹窗',
          maskClosable: true,
        },
      })
    },
  },
}
</script>
