import { Table } from 'iview'
import Icon from '../icon'
import { PRIMARY_COLOR } from '../../constants'
import { isNumber } from '../../utils'

const prefixCls = 'sui-table'

/**
 * 记录:
 * 曾使用函数式组件开发,但是考虑到“显示部分”按钮是有状态的,所以搭配使用 functional+Vue.observable 进行开发
 * 但是这样又引入了新问题: 所有 SxTable 组件共享相同响应式状态!!! (目前无法解决该问题,虽然函数式组件写起来很方便)
 * 因此函数式组件的基础上改为常规组件的 render 写法来完成开发:
 * 由于我们要将大量状态从封装组件上移植到其子组件(iView Table)
 * 退而求其次,不声明属性并禁用特性继承(用于隐藏在根元素上显示的 attrs)
 * 再将这些属性传入到子组件中来达到数据移植的效果
 * 另外再考虑到 iView Table 事件及具名插槽,我们通过 this 对象获取设置在封装组件上的数据,然后再 render 到组件中
 */
export default {
  name: 'SxTable',
  // 禁用特性继承
  inheritAttrs: false,
  data() {
    return {
      isAll: false,
    }
  },
  props: {
    /**
     * 展示更多 (根据显可展示数判断是否展示“显示更多”)
     * 值为数值:作为限制条数
     */
    more: {
      type: [Number, Boolean],
      default: false,
    },
    /**
     * 为了方便使用将要传入 iView Table 组件的 data、columns 属性变成封装组件的 props
     */
    data: Array,
    columns: Array,
  },
  computed: {
    limitSize() {
      const { more } = this
      return isNumber(more) ? more : 2
    },
    moreFlag() {
      const { more, limitSize, data } = this
      return more && data.length > limitSize
    },
    formatData() {
      let { data, moreFlag, isAll, limitSize } = this
      if (moreFlag && !isAll) return data.slice(0, limitSize)
      else return data
    },
  },
  render(h) {
    let children = [
      h(
        Table,
        {
          props: {
            data: this.formatData,
            columns: this.columns,
            ...this.$attrs,
          },
          on: {
            ...this.$listeners,
          },
          /**
           * 将封装组件的作用域插槽传入 iView Table 组件
           */
          scopedSlots: this.$scopedSlots,
        },
        this.$slots.default,
      ),
    ]
    if (this.moreFlag) {
      children.push(
        h(
          'div',
          {
            class: [`${prefixCls}-more`],
            on: {
              click: () => {
                this.isAll = !this.isAll
              },
            },
          },
          [
            h('span', this.isAll ? '显示部分' : '显示全部'),
            h(Icon, {
              style: {
                width: '10px',
                height: '10px',
              },
              props: {
                color: PRIMARY_COLOR,
                type: this.isAll
                  ? 'icon-double-arrow-up'
                  : 'icon-double-arrow-down',
              },
            }),
          ],
        ),
      )
    }
    return h('div', { class: prefixCls }, children)
  },
}
