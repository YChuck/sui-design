<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-button class="template-instance-item" @click="open">消息</sx-button>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">弹出阻塞</span>
        <span class="template-info-content"
          >单个消息设置 block
          属性来阻塞消息弹出(若已显示消息则不再弹出新消息,除非已显示消息销毁)或
          SxMessage.config() 全局配置阻塞(全局配置优先级低)</span
        >
      </div>
    </div>
    <div class="template-item-right">
      <code-section :content="json" json></code-section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      json: `
<sx-button @click="open">消息</sx-button>

open() {
  this.$SxMessage.open({
    title: '我被阻塞啦',
    block: true,
  })
},
// 全局配置(该SxMessage实例的所有消息都将受到阻塞影响)
this.$SxMessage.config({
  block: true,
})
`,
    }
  },
  methods: {
    open() {
      this.$SxMessage.open({
        title: '我被阻塞啦',
        block: true,
      })
    },
  },
}
</script>
