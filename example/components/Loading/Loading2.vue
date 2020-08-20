<template>
  <div class="template-item">
    <div class="template-item-left" id="father2">
      <div class="template-instance">
        <sx-button class="template-instance-item" @click="show"
          >loading</sx-button
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">样式修改</span>
        <span class="template-info-content"
          >通过设置 icon 属性来设置自定义图标,icon属性 (包含icon组件 type color
          size 三个属性)<br />
          query 属性用于设置 <b>父元素选择器</b> (默认全局展示)</span
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
 <sx-button @click="show">loading</sx-button>
 
 show() {
    this.$SxLoading.show({
      query: '#father2',
      icon: {
        type: 'icon-loading',
        color: 'skyblue',
        size: 'small',
      },
    })
    setTimeout(() => {
      this.$SxLoading.hide('#father2')
    }, 3000)
  }`,
    }
  },
  methods: {
    show() {
      this.$SxLoading.show({
        query: '#father2',
        icon: {
          type: 'icon-loading',
          color: 'skyblue',
          size: 'small',
        },
      })
      setTimeout(() => {
        this.$SxLoading.hide('#father2')
      }, 3000)
    },
  },
}
</script>
