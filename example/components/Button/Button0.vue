<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-button class="template-instance-item" type="default"
          >default</sx-button
        >
        <sx-button class="template-instance-item" type="dashed"
          >dashed</sx-button
        >
        <sx-button class="template-instance-item" type="error">error</sx-button>
        <sx-button class="template-instance-item" type="cancel"
          >cancel</sx-button
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">基础用法</span>
        <span class="template-info-content"
          >使用 Button 组件设置按钮,根据传入 type
          类型来显示不同按钮(默认:default)</span
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
<sx-button type="default">default</sx-button>
<sx-button type="dashed">dashed</sx-button>
<sx-button type="error">error</sx-button>
<sx-button type="cancel">cancel</sx-button>`,
    }
  },
}
</script>
