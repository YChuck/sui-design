<template>
  <div class="notice template">
    <h1>Notice</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Notice0></Notice0>
      <Notice1></Notice1>
      <Notice2></Notice2>
      <Notice3></Notice3>
      <Notice4></Notice4>
      <Notice5></Notice5>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view"></div>
  </div>
</template>

<script>
import {
  Notice0,
  Notice1,
  Notice2,
  Notice3,
  Notice4,
  Notice5,
} from '../components/Notice'

export default {
  name: 'Notice',
  components: {
    Notice0,
    Notice1,
    Notice2,
    Notice3,
    Notice4,
    Notice5,
  },
}
</script>
