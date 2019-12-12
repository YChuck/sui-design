<template>
  <div class="Page template">
    <h1>Page</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Page0></Page0>
      <Page1></Page1>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view"></div>
  </div>
</template>

<script>
import { Page0, Page1, Page2, Page3 } from '../components/Page'

export default {
  name: 'Page',
  components: {
    Page0,
    Page1,
  },
}
</script>
