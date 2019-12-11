<template>
  <div class="Message template">
    <h1>Message</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Message0></Message0>
      <Message1></Message1>
      <Message2></Message2>
      <Message3></Message3>
      <Message4></Message4>
      <Message5></Message5>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view"></div>
  </div>
</template>

<script>
import {
  Message0,
  Message1,
  Message2,
  Message3,
  Message4,
  Message5,
} from '../components/Message'

export default {
  name: 'Message',
  components: {
    Message0,
    Message1,
    Message2,
    Message3,
    Message4,
    Message5,
  },
}
</script>
