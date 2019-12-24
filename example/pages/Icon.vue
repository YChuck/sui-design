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
    <div class="api-view">
      <h5>Icon props:</h5>
      <figure>
        <table>
          <thead>
            <tr>
              <th style="text-align:center;">属性</th>
              <th style="text-align:center;">说明</th>
              <th style="text-align:center;">类型</th>
              <th style="text-align:center;">默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;">type</td>
              <td style="text-align:center;">图标名称</td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">color</td>
              <td style="text-align:center;">图标颜色</td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">size</td>
              <td style="text-align:center;">
                图标规范大小(可自定义): small normal large
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">normal</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>Icon func:</h5>
      <figure>
        <table>
          <thead>
            <tr>
              <th>方法</th>
              <th>参数</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Icon.createFromSymbol(url)</td>
              <td>url: 外部链接地址 (String类型)</td>
              <td>
                用于导入外部 IconFont 链接,自定义图标类型 (返回 Promise,
                完成加载外部资源后可以直接使用)
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
    </div>
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
    grid-template-columns: repeat(auto-fit, 120px);
    grid-auto-rows: auto;
    grid-gap: 20px;
    margin-bottom: 20px;
    &-item {
      display: inline-flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
      cursor: pointer;
      &:hover {
        border-radius: 5px;
        box-shadow: 1px 1px 6px 0 rgba(145, 146, 149, 0.7);
      }
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
