<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-button class="template-instance-item" @click="open(true)"
          >成功</sx-button
        >
        <sx-button
          class="template-instance-item"
          type="error"
          @click="open(false)"
          >失败</sx-button
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">消息类型</span>
        <span class="template-info-content"
          >带有状态的消息(success、error):
          可仅传递字符串(等于config.content)</span
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
<sx-button @click="open(true)">成功</sx-button>
<sx-button 
    type="error" @click="open(false)">失败</sx-button>

open(flag) {
  if (flag) {
    this.$SxMessage.success('我是成功消息')
  } else {
    this.$SxMessage.error('我是失败消息')
  }
},`,
    }
  },
  methods: {
    open(flag) {
      if (flag) {
        this.$SxMessage.success('我是成功消息')
      } else {
        this.$SxMessage.error('我是失败消息')
      }
    },
  },
}
</script>
