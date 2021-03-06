import Notification from './base'
import { PRIMARY_COLOR, ERROR_COLOR } from '../../constants'
import { isBoolean, isString } from '../../utils'

let defaultStyls = {
  top: '24px',
  right: '24px',
}

let config = {
  styles: null,
  block: false,
}

export default {
  config({ styles = null, block = false }) {
    config = { styles, block }
  },
  open({
    name = '',
    title = '',
    content = '',
    duration = 4.5,
    closable = true,
    icon = '',
    onClose = () => {},
    transitionName = 'notice-move',
    block,
  }) {
    if (!this.instance)
      this.instance = Notification.newInstance({
        styles: config.styles || defaultStyls,
        classes: 'sui-notification-notice',
      })
    this.instance.notice({
      name,
      title,
      content,
      duration,
      closable,
      icon,
      onClose,
      transitionName,
      block: isBoolean(block) ? block : config.block,
      type: 'notice',
    })
  },
  success(option) {
    return this.open(
      Object.assign(
        {
          icon: {
            type: 'icon-success-circle',
            size: 'normal',
            color: PRIMARY_COLOR,
          },
        },
        option,
      ),
    )
  },
  error(option) {
    return this.open(
      Object.assign(
        {
          icon: {
            type: 'icon-error-circle',
            size: 'normal',
            color: ERROR_COLOR,
          },
        },
        option,
      ),
    )
  },
  close(name) {
    if (!name || !this.instance) return false
    this.instance.remove(isString(name) ? name : name.toString())
  },
  destroy() {
    if (!this.instance) return
    this.instance.destroy()
    this.instance = null
  },
}
