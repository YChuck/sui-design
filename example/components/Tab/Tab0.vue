<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-tab
          class="template-instance-item"
          v-model="tab"
          :list="list"
        ></sx-tab>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">基础用法</span>
        <span class="template-info-content"
          >使用 Tab 组件传入选项数据并对选中项的 value
          进行双向绑定(请注意选项数据格式)</span
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
<sx-tab v-model="tab" :list="list"></sx-tab>

data () {
  return {
    tab: 0,
    list: [
      {
        label: 'tab1',
        value: 0,
      },
      {
        label: 'tab2',
        value: 1,
      },
      {
        label: 'tab3',
        value: 2,
      },
    ],
  }
}`,
      tab: 0,
      list: [
        {
          label: 'tab1',
          value: 0,
        },
        {
          label: 'tab2',
          value: 1,
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
