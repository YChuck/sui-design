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
        <span class="template-info-title">提示类型</span>
        <span class="template-info-content"
          >带有状态的提醒(success、error)</span
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
    this.$SxNotice.success({
      title: '我是成功消息',
      content: '成功啦!成功啦!成功啦!成功啦!',
    })
  } else {
    this.$SxNotice.error({
      title: '我是失败消息',
      content: '失败啦!失败啦!失败啦!',
    })
  }
},`,
    }
  },
  methods: {
    open(flag) {
      if (flag) {
        this.$SxNotice.success({
          title: '我是成功消息',
          content: '成功啦!成功啦!成功啦!成功啦!',
        })
      } else {
        this.$SxNotice.error({
          title: '我是失败消息',
          content: '失败啦!失败啦!失败啦!',
        })
      }
    },
  },
}
</script>
