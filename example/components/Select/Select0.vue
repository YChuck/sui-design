<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-select class="template-instance-item" style="width: 200px;">
        </sx-select>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">基础用法</span>
        <span class="template-info-content"
          >使用 Select 组件展示下拉选择框(默认填充父元素宽度).下拉选择框基于
          iView Select 开发,可使用
          <a href="http://v3.iviewui.com/components/select">iView select</a>
          其他特征.(注: 仅封装 Select 组件, 下拉内容请使用 iView Option
          组件)</span
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
<sx-select style="width: 200px;"></sx-select>`,
    }
  },
}
</script>
