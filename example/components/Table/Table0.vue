<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-table :columns="columns" :data="data"></sx-table>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">基础用法</span>
        <span class="template-info-content"
          >使用 Table 组件传入列数据及数据源展示表格(封装自
          <a href="http://v3.iviewui.com/components/table" target="_blank"
            >iView Table</a
          >
          (可使用 iView 其他特征)</span
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
<sx-table 
  :columns="columns" 
  :data="data"></sx-table>`,
      columns: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
        },
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
        },
      ],
    }
  },
}
</script>
