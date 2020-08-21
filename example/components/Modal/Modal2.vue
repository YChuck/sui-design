<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-button @click="buttonConfirm" class="template-instance-item"
          >$Modal.confirm
        </sx-button>
        <sx-button @click="buttonError" class="template-instance-item"
          >$Modal.error
        </sx-button>
        <sx-button @click="buttonRender" class="template-instance-item"
          >$Modal.config
        </sx-button>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">$SxModal用法</span>
        <span class="template-info-content">config格式</span>
        <br />
        <span class="template-info-content">config{props:{ },event:{ }}</span>
        <br />
        <span class="template-info-content">详细见下</span>
      </div>
    </div>
    <div class="template-item-right">
      <code-section :content="json" json></code-section>
    </div>
  </div>
</template>

<script>
import { default as Modal } from './Modal1'
export default {
  components: {
    Modal,
  },
  data() {
    return {
      display0: false,
      json: ` let config = {
      props: {
      title: 'title',
      content: 'content',
      render: h => {
        return h(Modal)
        },
      },
    event: { onOk: this.ok, onCancel: this.cancel },
  }
  this.$SxModal.config(config)`,
    }
  },
  methods: {
    buttonConfirm() {
      let config = {
        props: {
          title: 'confirm',
          okText: 'ok',
          content: 'content',
          hasError: 'true', // 错配
        },
        event: { onOk: this.ok, onCancel: this.cancel },
      }
      this.$SxModal.confirm(config)
    },
    buttonError() {
      let config = {
        props: {
          title: 'error',
          content: 'content',
        },
        event: { onOk: this.ok, onCancel: this.cancel, onError: this.error },
      }
      this.$SxModal.error(config)
    },
    buttonRender() {
      let config = {
        props: {
          title: 'title',
          content: 'content',
          render: h => {
            return h(Modal)
          },
        },
        event: { onOk: this.ok, onCancel: this.cancel },
      }
      this.$SxModal.config(config)
    },
    ok() {
      this.$SxMessage.success('ok')
    },
    cancel() {
      this.$SxMessage.success('cancel')
    },
    error() {
      this.$SxMessage.error('error')
    },
  },
}
</script>
