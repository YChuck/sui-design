<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-button class="template-instance-item" disabled>disabled</sx-button>
        <sx-button class="template-instance-item" disabled loading
          >loading...</sx-button
        >
        <sx-button
          class="template-instance-item"
          loading
          disabled
          shape="circle"
        ></sx-button>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">禁用</span>
        <span class="template-info-content"
          >向 Button 组件传入 disabled 属性来开启触发禁用</span
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
<sx-button disabled>disabled</sx-button>
<sx-button disabled loading>loading...</sx-button>
<sx-button loading disabled shape="circle"></sx-button>`,
    }
  },
}
</script>
