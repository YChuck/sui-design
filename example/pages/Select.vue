<template>
  <div class="Select template">
    <h1>Select</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Select0></Select0>
      <Select1></Select1>
      <Select2></Select2>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view"></div>
  </div>
</template>

<script>
import { Select0, Select1, Select2 } from '../components/Select'

export default {
  name: 'Select',
  components: {
    Select0,
    Select1,
    Select2,
  },
}
</script>
