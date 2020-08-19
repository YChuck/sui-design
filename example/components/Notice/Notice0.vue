<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-button class="template-instance-item" @click="open(true)"
          >提醒</sx-button
        >
        <sx-button class="template-instance-item" @click="open(false)"
          >提醒(仅标题)</sx-button
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">基础用法</span>
        <span class="template-info-content"
          >基础用法:默认 4.5秒后关闭(title:标题 content:内容)</span
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
<sx-button @click="open(true)">提醒</sx-button>
<sx-button @click="open(false)">提醒(仅标题)</sx-button>

open(show) {
  this.$SxNotice.open({
    title: '我是提醒的标题',
    content: show ? '基础演示:默认将在4.5秒后自动关闭' : '',
  })
},`,
    }
  },
  methods: {
    open(show) {
      this.$SxNotice.open({
        title: '我是提醒的标题',
        content: show ? '基础演示:默认将在4.5秒后自动关闭' : '',
      })
    },
  },
}
</script>
