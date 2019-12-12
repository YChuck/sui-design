<template>
  <div class="Header template">
    <h1>Header</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Header0></Header0>
      <Header1></Header1>
      <Header2></Header2>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view"></div>
  </div>
</template>

<script>
import { Header0, Header1, Header2 } from '../components/Header'

export default {
  name: 'Header',
  components: {
    Header0,
    Header1,
    Header2,
  },
}
</script>
