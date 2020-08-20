<template>
  <div class="template-item">
    <div class="template-item-left" id="father3">
      <div class="template-instance">
        <sx-button class="template-instance-item" @click="show"
          >loading</sx-button
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">全局配置</span>
        <span class="template-info-content"
          >用于统一修改项目中 loading 的基本 icon 样式
          (优先级低于自定义配置)</span
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

 this.$SxLoading.config({
    icon: {
      type: 'icon-distribution',
    },
  })
 
 show() {
    this.$SxLoading.show('#father3')
    setTimeout(() => {
      this.$SxLoading.hide('#father3')
    }, 3000)
  }`,
    }
  },
  methods: {
    show() {
      this.$SxLoading.show({
        query: '#father3',
        icon: {
          type: 'icon-distribution',
        },
      })
      setTimeout(() => {
        this.$SxLoading.hide('#father3')
      }, 3000)
    },
  },
}
</script>
