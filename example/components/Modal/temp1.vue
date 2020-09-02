<template>
  <div class="temp" id="temp1">
    <div class="content">
      <h3>弹窗逻辑插槽同步引入</h3>
      <div>id: <input type="number" v-model.number="id" /></div>
    </div>
    <code-section class="code" :content="json" json></code-section>
  </div>
</template>

<script>
const getId = id => {
  return new Promise(r => {
    setTimeout(() => {
      r({ code: 200, data: { id } })
    }, 2000)
  })
}

export default {
  name: 'temp1',
  data() {
    return {
      id: '',
      json: `
// 点击 Modal 默认按钮会触发弹窗内容组件中的 ok cancel error 事件处理函数
async ok() {
  if (!this.id) {
    this.$SxMessage.error('请输入ID')
    // 明确 return false 告诉 Modal 实例停止操作 等待用户处理
    return false
  }
  // 通过 return { key: value } 形式来改变外层逻辑组件中相同 key 的值
  return await this.getName() // getName() 最终返回 { id: res.data.id }
}`,
    }
  },
  methods: {
    async getName() {
      this.$SxLoading.show('#temp1')
      const res = await getId(this.id)
      if (res.code === 200 && res.data) {
        this.$SxLoading.hide('#temp1')
        return { id: res.data.id }
      }
    },
    async ok() {
      if (!this.id) {
        this.$SxMessage.error('请输入ID')
        return false
      }
      return await this.getName()
    },
    cancel() {
      console.log('temp0 cancel')
    },
    error() {
      console.log('temp0 error')
    },
  },
}
</script>

<style lang="scss" scoped>
.temp {
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .code {
    margin: 10px;
  }
}
</style>
