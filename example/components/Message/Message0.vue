<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-button class="template-instance-item" @click="open(false)"
          >消息</sx-button
        >
        <sx-button class="template-instance-item" @click="open(true)"
          >消息(添加额外内容)</sx-button
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">基础用法</span>
        <span class="template-info-content"
          >基础用法:默认 1.5秒后关闭(title:描述 content:额外内容)</span
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
<sx-button @click="open(false)">消息</sx-button>
<sx-button @click="open(true)">消息(添加额外内容)</sx-button>

open(show) {
  this.$SxMessage.open({
    title: '我是消息',
    content: show ? '默认将在1.5秒后自动关闭' : '',
  })
},`,
    }
  },
  methods: {
    open(show) {
      this.$SxMessage.open({
        title: '我是消息',
        content: show ? '默认将在1.5秒后自动关闭' : '',
      })
    },
  },
}
</script>
