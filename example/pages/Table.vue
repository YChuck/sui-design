<template>
  <div class="Table template">
    <h1>Table</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Table0></Table0>
      <Table1></Table1>
      <Table2></Table2>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view"></div>
  </div>
</template>

<script>
import { Table0, Table1, Table2 } from '../components/Table'

export default {
  name: 'Table',
  components: {
    Table0,
    Table1,
    Table2,
  },
}
</script>
