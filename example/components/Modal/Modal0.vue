<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-button @click="display = true">基础Modal</sx-button>
        <sx-modal
          v-model="display"
          hasError
          title="test"
          :hasIcon="hasIcon"
          @on-ok="ok"
          @on-cancel="cancel"
          @on-error="error"
        >content</sx-modal>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">基础用法</span>
        <span class="template-info-content">三个预置按钮事件绑定，标题设置</span>
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
      display: false,
      json: `<sx-modal
          v-model="display"
          hasError
          title="test"
          :hasIcon="hasIcon"
          @on-ok="ok"
          @on-cancel="cancel"
          @on-error="error"
          >content
        </sx-modal>`,
      hasIcon: true,
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
