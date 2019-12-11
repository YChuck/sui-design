<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-button class="template-instance-item" @click="open">提醒</sx-button>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">自定义时长</span>
        <span class="template-info-content"
          >duration属性: 自定义提醒显示时长(为0则不自动关闭)</span
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
    content: '设置 duration 属性为0,不自动关闭该提醒',
    duration: 0,
  })
},`,
    }
  },
  methods: {
    open() {
      this.$SxNotice.open({
        title: '我是提醒的标题',
        content: '设置 duration 属性为0,不自动关闭该提醒',
        duration: 0,
      })
    },
  },
}
</script>
