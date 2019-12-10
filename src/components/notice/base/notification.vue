<template>
  <div :class="['sui-notification', classes]" :style="styles">
    <notice
      v-for="notice in notices"
      :key="notice.name"
      :name="notice.name"
      :title="notice.title"
      :content="notice.content"
      :duration="notice.duration"
      :closable="notice.closable"
      :icon="notice.icon"
      :on-close="notice.onClose"
      :transition-name="notice.transitionName"
      :type="notice.type"
    ></notice>
  </div>
</template>

<script>
import Notice from './notice'
import { isNumber } from '../../../utils'

const prefixCLs = 'sui-notification'

const createTime = Date.now()

let blockTime = null
let seed = 0

function getUuid() {
  return 'suiNotification_' + createTime + '_' + seed++
}

export default {
  name: 'SxNotification',
  components: {
    Notice,
  },
  props: {
    styles: {
      type: [Object, String],
      default() {
        return {}
      },
    },
    classes: {
      type: [Object, String],
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      notices: [],
    }
  },
  computed: {},
  methods: {
    /**
     * 添加阻塞判断：
     * 若为阻塞状态则直接丢弃事件
     * 全局配置则所有弹窗都会受到阻塞限制
     * 单独某个 notice 配置 block 参数则这个 notice 会受到限制
     */
    add(notice) {
      if (!isNumber(notice.duration)) notice.duration = 1.5
      notice.name = notice.name || getUuid()
      /**
       * 阻塞判断：
       * 1. 存在 notice 时阻塞之，有且仅有一个存在
       * 2. duration = 0 (不自动销毁),并存在阻塞状态,则有且仅有一个存在
       */
      if (notice.block) {
        let nowStamp = Date.now()
        if (blockTime) {
          if (notice.duration === 0) return
          if (nowStamp - blockTime < notice.duration * 1000) return
        }
        blockTime = nowStamp
      }

      let _notice = Object.assign(
        {
          title: '',
          content: '',
          closable: false,
        },
        notice,
      )

      this.notices.push(_notice)
    },
    close(name) {
      let index = this.notices.findIndex(v => {
        return name === v.name
      })
      this.notices.splice(index, 1)
      if (blockTime) blockTime = null
    },
    closeAll(all) {
      this.notices = []
    },
  },
}
</script>
