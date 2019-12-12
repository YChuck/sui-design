<template>
  <div class="button template">
    <h1>Button</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Button0></Button0>
      <Button1></Button1>
      <Button2></Button2>
      <Button3></Button3>
      <Button4></Button4>
      <Button5></Button5>
      <Button6></Button6>
      <Button7></Button7>
      <Button8></Button8>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view"></div>
  </div>
</template>

<script>
import {
  Button0,
  Button1,
  Button2,
  Button3,
  Button4,
  Button5,
  Button6,
  Button7,
  Button8,
} from '../components/Button'

export default {
  name: 'Button',
  components: {
    Button0,
    Button1,
    Button2,
    Button3,
    Button4,
    Button5,
    Button6,
    Button7,
    Button8,
  },
}
</script>
