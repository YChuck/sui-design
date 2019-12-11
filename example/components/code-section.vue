<template>
  <pre :class="cls"><code :class="cls" v-html='innerCode'></code></pre>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'CodeSection',

  props: {
    content: { default: '' },
    lang: { type: String, default: 'javascript' },
    json: { type: Boolean, default: false },
  },

  computed: {
    innerCode() {
      const { content } = this
      return Prism.highlight(`${content.slice(1)}`, Prism.languages[this.lang])
    },

    cls() {
      return { [`language-${this.lang}`]: true }
    },
  },
}
</script>
