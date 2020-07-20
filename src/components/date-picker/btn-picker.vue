<template>
  <div class="sui-btn-date-picker">
    <span class="sui-btn-date-picker-info">{{ htmlPrint }}</span>
    <div class="sui-btn-date-picker-menu">
      <div class="sui-btn-date-picker-list">
        <Button
          v-for="btn in btns"
          :key="btn.id"
          type="check"
          :class="{ 'sui-btn-check-selected': btn.id === selectedIndex }"
          @click="btn.click(btn)"
          >{{ btn.title }}</Button
        >
      </div>
      <div class="sui-btn-date-picker-panel">
        <date-picker
          ref="picker"
          v-for="picker in pickers"
          :key="picker.id"
          v-model="modelDate[picker.options.model]"
          v-show="picker.options.show"
          :type="picker.options.type"
          :format="picker.options.format"
          :placeholder="picker.options.placeholder"
          :picker-options="picker.options.pickerOptions"
          @blur="picker.options.show = false"
          @change="picker.options.change"
        ></date-picker>
      </div>
    </div>
  </div>
</template>

<script>
import { DatePicker } from 'element-ui'
import Button from '../button'
import moment from 'moment'
import { oneOf } from '../../utils'

const prefixCls = 'sui-btn-date-picker'

const BTN_PICKER_TYPE_MAP = {
  date: 0,
  week: 1,
  month: 2,
  one: 3,
  seven: 4,
  thirty: 5,
}

export default {
  name: 'SxBtnDatePicker',
  components: { Button, DatePicker },
  props: {
    // 默认选中: date week month one seven thirty
    defaultSelect: {
      type: String,
      default: 'one',
    },
    // UI展示级别
    level: {
      validator(v) {
        return oneOf(v, ['global', 'fragment'])
      },
      default: 'global',
    },
    pickerOptions: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      // 当前选中的按钮索引
      selectedIndex: -1,
      // 仅用于时间控件 v-model (不传无法触发change事件)
      modelDate: {
        date: '',
        week: '',
        month: '',
      },
      // 页面展示的时间格式化数据
      htmlPrint: '',
      // 各类型按钮配置对象
      btnOpts: [
        {
          id: 0,
          title: '日',
          // click 主要为选中按钮并触发 picker 弹窗
          click: ({ id, options }) => {
            options.show = true
            this.selectedIndex = id
            this.$nextTick(() => {
              this.$refs.picker[0].focus()
            })
          },
          options: {
            show: false,
            type: 'date',
            model: 'date',
            format: 'yyyy-MM-dd',
            placeholder: '选择日',
            // 监听 change 事件,对输出Moment化
            change: time => {
              this.clearTargetDate('date')
              let first = moment(time).startOf('day')
              let last = moment(time).endOf('day')
              this.htmlPrint = first.format('YYYY-MM-DD')
              this.$emit('on-change', { first, last, type: 'date' })
            },
            pickerOptions: {
              disabledDate: time => time.getTime() > Date.now(),
            },
          },
        },
        {
          id: 1,
          title: '周',
          click: ({ id, options }) => {
            options.show = true
            this.selectedIndex = id
            this.$nextTick(() => {
              this.$refs.picker[1].focus()
            })
          },
          options: {
            show: false,
            type: 'week',
            model: 'week',
            format: 'yyyy 第 WW 周',
            placeholder: '选择周',
            change: time => {
              this.clearTargetDate('week')
              let first = moment(time).startOf('week')
              let last = moment(time).endOf('week')
              this.htmlPrint = `${first.format('YYYY-MM-DD')}~${last.format(
                'YYYY-MM-DD',
              )}`
              this.$emit('on-change', { first, last, type: 'week' })
            },
            pickerOptions: {
              disabledDate: time =>
                time.getTime() >=
                moment()
                  .startOf('week')
                  .valueOf(),
            },
          },
        },
        {
          id: 2,
          title: '月',
          click: ({ id, options }) => {
            options.show = true
            this.selectedIndex = id
            this.$nextTick(() => {
              this.$refs.picker[2].focus()
            })
          },
          options: {
            show: false,
            type: 'month',
            model: 'month',
            format: 'yyyy-MM',
            placeholder: '选择月',
            change: time => {
              this.clearTargetDate('month')
              let first = moment(time).startOf('month')
              let last = moment(time).endOf('month')
              this.htmlPrint = `${first.format('YYYY-MM-DD')}~${last.format(
                'YYYY-MM-DD',
              )}`
              this.$emit('on-change', { first, last, type: 'month' })
            },
            pickerOptions: {
              disabledDate: time =>
                time.getTime() >=
                moment()
                  .startOf('month')
                  .valueOf(),
            },
          },
        },
        {
          id: 3,
          title: '1天',
          // 纯按钮逻辑: 选中按钮并输出Moment时间数据
          click: ({ id, options }) => {
            this.clearTargetDate()
            this.selectedIndex = id
            let first = moment()
              .subtract(1, 'days')
              .startOf('day')
            let last = moment(first).endOf('day')
            this.htmlPrint = `${first.format('YYYY-MM-DD')}`
            this.$emit('on-change', { first, last, type: 'one' })
          },
        },
        {
          id: 4,
          title: '7天',
          click: ({ id, options }) => {
            this.clearTargetDate()
            this.selectedIndex = id
            let last = moment()
              .subtract(1, 'days')
              .endOf('day')
            let first = moment(last)
              .subtract(6, 'days')
              .startOf('day')
            this.htmlPrint = `${first.format('YYYY-MM-DD')}~${last.format(
              'YYYY-MM-DD',
            )}`
            this.$emit('on-change', { first, last, type: 'seven' })
          },
        },
        {
          id: 5,
          title: '30天',
          click: ({ id, options }) => {
            this.clearTargetDate()
            this.selectedIndex = id
            let last = moment()
              .subtract(1, 'days')
              .endOf('day')
            let first = moment(last)
              .subtract(29, 'days')
              .startOf('day')
            this.htmlPrint = `${first.format('YYYY-MM-DD')}~${last.format(
              'YYYY-MM-DD',
            )}`
            this.$emit('on-change', { first, last, type: 'thirty' })
          },
        },
      ],
    }
  },
  computed: {
    // level: fragment 仅显示日周月
    showFragment() {
      return this.level === 'fragment'
    },
    // 根据显示级别获取按钮配置参数
    btns() {
      let { btnOpts, showFragment } = this
      return showFragment ? btnOpts.slice(0, 3) : btnOpts
    },
    // 获取 date-picker 的必要配置 (若存在 自定义配置 则增量覆盖)
    pickers() {
      const { pickerOptions } = this
      let pickers = this.btns.filter(v => v.options)
      return Array.isArray(pickerOptions)
        ? pickers.map((v, i) => {
            v.options = {
              ...v.options,
              ...(pickerOptions[i] || {}),
            }
            return v
          })
        : pickers
    },
  },
  /**
   * 默认选中'一天'按钮
   * 仅显示日周月则默认选中'日'按钮
   */
  mounted() {
    let { showFragment, defaultSelect } = this
    // 若仅显示日周月 但是默认选中不再其中 修改为date
    if (showFragment && !oneOf(defaultSelect, ['date', 'week', 'month']))
      defaultSelect = 'date'

    let btnIndex = BTN_PICKER_TYPE_MAP[defaultSelect]
    let btn = this.btns[btnIndex]
    if (oneOf(defaultSelect, ['date', 'week', 'month'])) {
      this.selectedIndex = btnIndex
      this.modelDate[defaultSelect] = moment()
        .subtract(defaultSelect === 'date' ? 0 : 1, defaultSelect)
        .format()
      btn.options.change(this.modelDate[defaultSelect])
    } else {
      btn.click(btn)
    }
  },
  methods: {
    clearTargetDate(type) {
      let { modelDate } = this
      Object.keys(modelDate).forEach(k => {
        if (k !== type) modelDate[k] = ''
      })
    },
  },
}
</script>
