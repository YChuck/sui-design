<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-button class="template-instance-item" @click="open(true)"
          >提醒</sx-button
        >
        <sx-button class="template-instance-item" @click="open(false)"
          >提醒</sx-button
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">自定义图标</span>
        <span class="template-info-content"
          >通过设置 icon
          属性来设置自定义图标,icon属性支持字符串和对象方式(字符串:icon组件type属性别名,对象:包含icon组件
          type color size 三个属性)</span
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
<sx-button @click="open(false)">提醒</sx-button>

open(flag) {
  if (flag) {
    this.$SxNotice.open({
      title: '我是提醒的标题',
      content: '我是内容哦哦哦哦哦哦哦',
      icon: 'icon-camera',
    })
  } else {
    this.$SxNotice.open({
      title: '我是提醒的标题',
      content: '我是内容哦哦哦哦哦哦哦',
      icon: {
        type: 'icon-camera',
        size: 'small',
        color: 'skyblue',
      },
    })
  }
},`,
    }
  },
  methods: {
    open(flag) {
      if (flag) {
        this.$SxNotice.open({
          title: '我是提醒的标题',
          content: '我是内容哦哦哦哦哦哦哦',
          icon: 'icon-camera',
        })
      } else {
        this.$SxNotice.open({
          title: '我是提醒的标题',
          content: '我是内容哦哦哦哦哦哦哦',
          icon: {
            type: 'icon-camera',
            size: 'small',
            color: 'skyblue',
          },
        })
      }
    },
  },
}
</script>
