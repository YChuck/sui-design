<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-button class="template-instance-item" @click="open">消息</sx-button>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">自定义时长(及设置否关闭)</span>
        <span class="template-info-content"
          >duration属性: 自定义消息显示时长(为0则不自动关闭).使用 closable: true
          来设置可关闭消息.
        </span>
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
    title: '我是消息(可关闭哦)',
    duration: 0,
    closable: true,
  })
},`,
    }
  },
  methods: {
    open() {
      this.$SxMessage.open({
        title: '我是消息(可关闭哦)',
        duration: 0,
        closable: true,
      })
    },
  },
}
</script>
