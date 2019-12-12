<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-table :columns="columns" :data="data" :more="2"></sx-table>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">展示更多</span>
        <span class="template-info-content"
          >传入 more 属性来判断是否显示更多按钮 默认限制15条数据(more: 支持
          Boolean 及 Number 格式)</span
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
  :data="data" 
  :more="2"></sx-table>`,
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
