<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-button @click="display0 = true" class="template-instance-item"
          >应用插槽
        </sx-button>
      </div>
      <sx-modal v-model="display0">
        <div slot="close">
          Slot:Icon
        </div>
        <div slot="header">
          Slot:Header
        </div>
        <div>Slot:default</div>
        <div slot="footer">
          Slot:Footer
        </div>
      </sx-modal>
      <div class="template-item-info">
        <span class="template-info-title">插槽用法</span>
        <span class="template-info-content"
          >Modal 包含 header close default(默认) footer 四个插槽
          (用于自定义内容插入).</span
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
      json: `
<sx-modal v-model="display0">
  <div slot="close">
    Slot:Icon
  </div>
  <div slot="header">
    Slot:Header
  </div>
  <div>Slot:default</div>
  <div slot="footer">
    Slot:Footer
  </div>
</sx-modal>`,
    }
  },
}
</script>
