<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-tab
          class="template-instance-item"
          v-model="tab"
          :tabs="tabs"
        ></sx-tab>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">设置标签独有类</span>
        <span class="template-info-content"
          >通过为每个 tab 的配置项设置 class 属性来设置标签独有类</span
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
<sx-tab v-model="tab" :tabs="tabs"></sx-tab>

data () {
  return {
    tab: 0,
    tabs: [
      {
        label: 'tab1',
        value: 0,
      },
      {
        label: 'tab2',
        value: 1,
        class: 'tab-magic',
      },
      {
        label: 'tab3',
        value: 2,
      },
    ],
  }
}`,
      tab: 0,
      tabs: [
        {
          label: 'tab1',
          value: 0,
        },
        {
          label: 'tab2',
          value: 1,
          class: 'tab-magic',
        },
        {
          label: 'tab3',
          value: 2,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.tab-magic {
  color: skyblue;
  font-weight: bolder;
  background-color: yellow;
}
</style>
