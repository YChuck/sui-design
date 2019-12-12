<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-button class="template-instance-item" @click="open">提醒</sx-button>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">Render 函数</span>
        <span class="template-info-content"
          >自定义 Render 函数来替代 content</span
        >
      </div>
    </div>
    <div class="template-item-right">
      <code-section :content="json" json></code-section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      json: `
<sx-button @click="open">提醒</sx-button>

open() {
  this.$SxNotice.open({
    title: '我是提醒的标题',
    content: h => {
      return h('div', [
        '这是一个 render 函数构建的 div.',
        h(
          'a',
          {
            attrs: {
              href: '/',
            },
          },
          '(跳转)',
        ),
      ])
    }
  })
},`,
    }
  },
  methods: {
    open() {
      this.$SxNotice.open({
        title: '我是提醒的标题',
        content: h => {
          return h('div', [
            '这是一个 render 函数构建的 div.',
            h(
              'a',
              {
                attrs: {
                  href: '/',
                },
              },
              '(跳转)',
            ),
          ])
        },
      })
    },
  },
}
</script>
