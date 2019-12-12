<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-input
          class="template-instance-item"
          style="width: 200px;"
        ></sx-input>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">基础用法</span>
        <span class="template-info-content"
          >使用 Input 组件展示输入框(默认填充父元素宽度).输入框基于 iView Input
          开发,可使用 iView 其他特征(<a
            href="http://v3.iviewui.com/components/input"
            >iView input</a
          >)</span
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
<sx-input style="width: 200px;"></sx-input>`,
    }
  },
}
</script>
