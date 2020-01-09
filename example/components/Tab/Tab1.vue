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
        <span class="template-info-title">设置图标</span>
        <span class="template-info-content"
          >通过为每个 tab 的配置项设置 icon 属性来展示图标.<br />默认图标展示在右侧(设置
          icon.position = left 来左展示图标).<br />请务必设置 icon.show
          属性(always:总是展示 active:仅选中该tab时展示)</span
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
        icon: {
          type: 'icon-history',
          show: 'active',
          size: 'normal',
          position: 'left',
        },
      },
      {
        label: 'tab2',
        value: 1,
      },
      {
        label: 'tab3',
        value: 2,
        icon: {
          type: 'icon-area-hot',
          show: 'always',
          color: 'red',
          size: 'normal',
        },
      },
    ],
  }
}`,
      tab: 0,
      tabs: [
        {
          label: 'tab1',
          value: 0,
          icon: {
            type: 'icon-history',
            show: 'active',
            size: 'normal',
            position: 'left',
          },
        },
        {
          label: 'tab2',
          value: 1,
        },
        {
          label: 'tab3',
          value: 2,
          icon: {
            type: 'icon-area-hot',
            show: 'always',
            color: 'red',
            size: 'normal',
          },
        },
      ],
    }
  },
}
</script>
