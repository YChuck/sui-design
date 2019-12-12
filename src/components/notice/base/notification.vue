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

// 记录上一个 notice
let lastNotice = null
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
     * 若为阻塞状态则判断当前是否有 notice 存在(当前已存在则直接丢弃新事件)
     * 全局配置则所有 notice 都会受到阻塞限制
     * 单独某个 notice 配置 block 参数则这个 notice 会受到限制
     */
    add(notice) {
      if (!isNumber(notice.duration)) notice.duration = 1.5
      notice.name = notice.name || getUuid()

      // 判断当前 notice 是否要被阻塞 (若已存在 notice 则结束当前流程)
      if (notice.block && lastNotice) return
      // 记录当前 notice
      lastNotice = notice

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
      // 若为记录的 notice 则清空记录
      if (lastNotice && name === lastNotice.name) lastNotice = null
    },
    closeAll(all) {
      this.notices = []
    },
  },
}
</script>
