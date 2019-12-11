<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="template-instance">
        <sx-icon
          class="template-instance-item"
          type="iconfangwupingmiantu"
        ></sx-icon>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">自定义图标</span>
        <span class="template-info-content"
          >使用 SxIcon.createFromSymbol 方法来引入 IconFont
          外部链接并直接使用(注意:若iconfont自带fill属性则无法修改其颜色)</span
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
SUI.SxIcon.createFromSymbol(
  'http://at.alicdn.com/t/font_1183153_bao6nseg46i.js',
)
<sx-icon type="iconfangwupingmiantu"></sx-icon>`,
    }
  },
}
</script>
