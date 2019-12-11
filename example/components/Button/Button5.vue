<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-button
          class="template-instance-item"
          :loading="loading"
          @click="click"
          >{{ title }}</sx-button
        >
        <sx-button class="template-instance-item" loading>loading</sx-button>
        <sx-button
          class="template-instance-item"
          loading
          shape="circle"
        ></sx-button>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">加载中</span>
        <span class="template-info-content"
          >向 Button 组件传入 loading 属性来开启加载状态</span
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
<sx-button :loading='loading'>click</sx-button>
<sx-button loading>loading</sx-button>
<sx-button loading shape="circle"></sx-button>`,
      loading: false,
      title: 'click',
    }
  },
  watch: {
    loading() {
      this.title = this.loading ? 'loading' : 'click'
    },
  },
  methods: {
    click() {
      this.loading = !this.loading
      if (this.loading) {
        setTimeout(() => {
          this.loading = !this.loading
        }, 2000)
      }
    },
  },
}
</script>
