import { oneOf } from '../utils'

/**
 * 封装页面跳转功能
 */
export default {
  props: {
    // 要跳转的路由
    to: {
      type: [String, Object],
    },
    // 是否替换当前路由
    replace: {
      type: Boolean,
      default: false,
    },
    // 跳转方式
    target: {
      validator(v) {
        return oneOf(v, ['_blank', '_self', '_parent', '_top'])
      },
      default: '_self',
    },
    // 生成的路由是否依赖(追加)当前路由 (依赖 vue-router)
    append: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    // 生成最终跳转 URL
    linkUrl() {
      const { to, $router: router } = this
      // 完整URL 不作处理
      if (to.includes('//')) return to
      if (router) {
        // 根据 vue-router 解析方法生成 route
        const route = router.resolve(to, this.$route, this.append)
        return route ? route.href : to
      }
      return to
    },
  },
  methods: {
    /**
     * 点击事件监听处理
     * @param {*} e - 事件对象
     * @param {Boolean} new_window - 是否在新窗口打开
     */
    handleCheckClick(e, new_window = false) {
      const { to } = this
      if (to) {
        //不作处理,走a标签默认事件(自动打开新网页)
        if (this.target === '_blank') return
        else {
          e.preventDefault()
          // 新窗口打开
          if (new_window) window.open(this.linkUrl)
          else {
            const { $router: router } = this
            if (router) {
              // 有 vue-router 则 router 的流程进行跳转
              this.replace ? router.replace(to) : router.push(to)
            } else {
              // 无 vue-router 则原生调转
              window.location.href = to
            }
          }
        }
      }
    },
  },
}
