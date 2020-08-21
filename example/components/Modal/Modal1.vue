<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-button @click="display0 = true" class="template-instance-item"
          >应用Slot
        </sx-button>
      </div>
      <sx-modal v-model="display0">
        <div slot="close">
          Slot Icon
        </div>
        <div slot="header">
          Slot Header
        </div>
        content
        <div slot="footer">
          Slot Footer
        </div>
      </sx-modal>
      <div class="template-item-info">
        <span class="template-info-title">Slot用法</span>
        <span class="template-info-content">三Slot：close、header、footer</span>
        <br />
        <span class="template-info-content">设置子元素slot属性</span>
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
      json: ` <sx-modal v-model="display0">
        <div slot="close">
          Slot Icon
        </div>
        <div slot="header">
          Slot Header
        </div>
        content
        <div slot="footer">
          Slot Footer
        </div>
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
