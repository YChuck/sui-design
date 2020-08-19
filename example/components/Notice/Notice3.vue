<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-button class="template-instance-item" @click="open">提醒</sx-button>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">弹出阻塞</span>
        <span class="template-info-content"
          >单个提醒设置 block
          属性来阻塞提醒弹出(若已显示提醒则不再弹出新提醒,除非已显示提醒销毁)或
          SxNotice.config() 全局配置阻塞(全局配置优先级低)</span
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
<sx-button @click="open">提醒</sx-button>

open() {
  this.$SxNotice.open({
    title: '我是提醒的标题',
    content:
      '设置 block 属性为 true 来阻塞提醒队列弹出新提醒(除非当前提醒销毁)',
    block: true,
  })
},
// 全局配置(该SxNotice实例的所有提醒都将受到阻塞影响)
this.$SxNotice.config({
  block: true,
})
`,
    }
  },
  methods: {
    open() {
      this.$SxNotice.open({
        title: '我是提醒的标题',
        content:
          '设置 block 属性为 true 来阻塞提醒队列弹出新提醒(除非当前提醒销毁)',
        block: true,
      })
    },
  },
}
</script>
