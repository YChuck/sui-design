<template>
  <div class="Input template">
    <h1>Input</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Input0></Input0>
      <Input1></Input1>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view"></div>
  </div>
</template>

<script>
import { Input0, Input1, Input2, Input3 } from '../components/Input'

export default {
  name: 'Input',
  components: {
    Input0,
    Input1,
  },
}
</script>
