import Notification from '../notice/base'
import { PRIMARY_COLOR, ERROR_COLOR } from '../../constants'

let defaultStyls = {
  top: '24px',
  left: '50%',
  transform: 'translateX(-50%)',
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
    duration = 1.5,
    closable = false,
    icon = '',
    onClose = () => {},
    transitionName = 'message-move',
    block = false,
  }) {
    if (!this.instance)
      this.instance = Notification.newInstance({
        styles: config.customStyls || defaultStyls,
        classes: 'sui-notification-message',
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
      type: 'message',
    })
  },
  success(option) {
    return this.open(
      Object.assign(
        {
          icon: {
            type: 'icon-success-circle',
            size: 'small',
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
            size: 'small',
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
