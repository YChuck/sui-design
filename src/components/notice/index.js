import Notification from './base'
import { PRIMARY_COLOR, ERROR_COLOR } from '../../constants'

let defaultStyls = {
  top: '24px',
  right: '24px',
}

let config = {
  customStyls: null,
  block: false,
}

export default {
  config({ styles, block }) {
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
    block = false,
  }) {
    if (!this.instance)
      this.instance = Notification.newInstance({
        styles: config.customStyls || defaultStyls,
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
      block: block || config.block,
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
  destroy() {
    if (!this.instance) return
    this.instance.destroy()
    this.instance = null
  },
}
