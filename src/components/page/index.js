import { Page } from 'iview'
import Button from '../button'
import { isArray } from '../../utils'

const prefixCls = 'sui-page'

/**
 * 组件可使用 v-model 获取 page 变化
 */
export default {
  name: 'SxPage',
  data() {
    return {
      // input 输入值
      inputNumber: false,
      // 具体页数
      current: 1,
    }
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    showCount: {
      type: Boolean,
      default: false,
    },
    // 仅供 v-model 实现使用
    value: Number,
  },
  watch: {
    value(value) {
      this.current = value
    },
  },
  mounted() {
    // 若存在 value 值设置给 iView page 作为默认选中
    const { value } = this
    if (value) this.current = value
  },
  render(h) {
    const onChange = this.$listeners['on-change']
    const input = this.$listeners['input']
    const { total, pageSize, inputNumber, current, showCount } = this
    /**
     * 标志: 是否设置 v-model
     * 经测试,通过判断 input 事件处理器中待被处理的监听函数的名称来判断是否设置 v-model
     * 若设置 v-model name => callback
     * 否则 name => bound input
     * (若存在两个待被处理的监听函数说明一定设置了 v-model)
     */
    const isModel =
      input &&
      (isArray(input.fns)
        ? input.fns.length === 2
        : input.fns.name === 'callback')

    let children = [
      h(
        Page,
        {
          props: {
            total,
            pageSize,
            current,
            ...this.$attrs,
          },
          on: {
            ...this.$listeners,
            /**
             * 拦截 iView page change 事件
             * 未设置 v-model 则只能手动修改 current 值来改变 iView page 选中项
             */
            'on-change': page => {
              if (!isModel) this.current = page
              if (input) input(page)
              if (onChange) onChange(page)
            },
          },
          scopedSlots: this.$scopedSlots,
        },
        this.$slots.default,
      ),
      h('input', {
        class: `${prefixCls}-input`,
        on: {
          input: event => {
            // 限制 input value 值: 1 <= v <= 最大页数
            let v = Math.min(
              Number(event.target.value) || 0,
              Math.round(total / pageSize),
            )

            if (v) event.target.value = v
            else event.target.value = ''

            this.inputNumber = v
          },
        },
      }),
      h(
        Button,
        {
          props: {
            size: 'small',
            type: 'default',
            /**
             * 若当前选中和输入一致 或 无输入值,则禁用按钮
             */
            disabled: current === inputNumber || !inputNumber,
          },
          on: {
            /**
             * 用于触发 v-model 变化、change 事件以及改变当前选中页码
             * 未设置 v-model 则只能手动修改 current 值来改变 iView page 选中项
             */
            click: () => {
              if (!isModel) this.current = inputNumber
              if (input) input(inputNumber)
              if (onChange) onChange(inputNumber)
            },
          },
        },
        'GO',
      ),
    ]
    if (showCount)
      children.unshift(
        h('span', { class: `${prefixCls}-total` }, `当前共${total}条搜索结果`),
      )
    return h('div', { class: prefixCls }, children)
  },
}
