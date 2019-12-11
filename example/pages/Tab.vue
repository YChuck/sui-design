<template>
  <div class="Tab template">
    <h1>Tab</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Tab0></Tab0>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view"></div>
  </div>
</template>

<script>
import { Tab0 } from '../components/Tab'

export default {
  name: 'Tab',
  components: {
    Tab0,
  },
}
</script>
