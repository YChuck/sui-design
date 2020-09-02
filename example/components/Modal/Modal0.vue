<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-button @click="display0 = true" class="template-instance-item"
          >Modal
        </sx-button>
        <sx-button @click="display1 = true" class="template-instance-item"
          >Modal(添加error按钮)
        </sx-button>
      </div>
      <sx-modal
        v-model="display0"
        title="基础弹窗"
        maskClosable
        ok-text="ok"
        cancel-text="cancel"
        error-text="error"
        @on-ok="ok"
        @on-cancel="cancel"
        >content
      </sx-modal>
      <sx-modal
        v-model="display1"
        hasError
        title="带删除按钮弹窗"
        @on-ok="ok"
        @on-cancel="cancel"
        @on-error="error"
        >content
      </sx-modal>
      <div class="template-item-info">
        <span class="template-info-title">基础用法</span>
        <span class="template-info-content"
          >以组件形式引入页面中,通过 value 属性来 显示/隐藏 弹窗.<br />可使用
          v-modal 实现双向绑定.<br />默认键盘 ESC 键可关闭弹窗.<br />
          maskClosable 属性设置蒙板是否可触发关闭.</span
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
      display0: false,
      display1: false,
      json: `
<sx-modal
  v-model="display0"
  title="基础弹窗"
  maskClosable
  ok-text="ok"
  cancel-text="cancel"
  error-text="error"
  @on-ok="ok"
  @on-cancel="cancel"
  >content
</sx-modal>`,
    }
  },
  methods: {
    ok() {
      this.$SxMessage.success('ok')
    },
    cancel() {
      this.$SxMessage.success('cancel')
    },
    error() {
      this.$SxMessage.success('error')
    },
  },
}
</script>
