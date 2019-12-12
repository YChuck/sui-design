<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-table :columns="columns" :data="data" ref="table"></sx-table>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">Table Ref</span>
        <span class="template-info-content"
          >由于封装组件包裹 iView Table 实例,请使用 this.$refs.[封装组件的
          Ref].$children[0] 获取 iView Table 实例</span
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
  ref="table"></sx-table>
  
// iView table 实例 = this.$refs.table.$children[0]`,
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
