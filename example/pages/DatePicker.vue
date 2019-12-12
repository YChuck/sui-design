<template>
  <div class="DatePicker template">
    <h1>DatePicker</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <DatePicker0></DatePicker0>
      <DatePicker1></DatePicker1>
      <DatePicker2></DatePicker2>
      <DatePicker3></DatePicker3>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view"></div>
  </div>
</template>

<script>
import {
  DatePicker0,
  DatePicker1,
  DatePicker2,
  DatePicker3,
} from '../components/DatePicker'

export default {
  name: 'DatePicker',
  components: {
    DatePicker0,
    DatePicker1,
    DatePicker2,
    DatePicker3,
  },
}
</script>
