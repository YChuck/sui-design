<template>
  <div class="icon template">
    <h1>Icon</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Icon0></Icon0>
      <Icon1></Icon1>
      <Icon2></Icon2>
      <Icon3></Icon3>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view"></div>
    <sx-header title="所有图标" level="secondary"></sx-header>
    <div class="icon-view">
      <div
        class="icon-view-item"
        v-for="type in types"
        :key="type"
        :title="'icon-' + type"
        @click="copyHandler(type)"
      >
        <sx-icon :type="'icon-' + type" color="#565656"></sx-icon>
        <span class="view-item-desc">{{ type }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { types, Icon0, Icon1, Icon2, Icon3 } from '../components/Icon'

export default {
  name: 'Icon',
  components: {
    Icon0,
    Icon1,
    Icon2,
    Icon3,
  },
  data() {
    return {
      types: [],
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.types = types
    },
    copyHandler(type) {
      this.$copyText(`icon-${type}`).then(
        r => {
          this.$SxMessage.success({
            title: '复制成功',
          })
          console.log('图标类型:', r.text)
        },
        e => {
          this.$SxMessage.error({
            title: '复制失败',
          })
          console.log('图标类型复制失败', e)
        },
      )
    },
  },
}
</script>

<style lang="scss">
.icon {
  &-view {
    display: grid;
    grid-template-columns: repeat(auto-fit, 100px);
    grid-auto-rows: auto;
    grid-gap: 20px;
    margin-bottom: 20px;
    &-item {
      display: inline-flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      .view-item-desc {
        display: inline-block;
        margin-top: 5px;
        width: 100px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
      }
    }
  }
}
</style>
