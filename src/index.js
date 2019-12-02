import './styles'

import SxIcon from './components/icon'
import SxButton from './components/button'
import SxNotice from './components/notice'
import SxMessage from './components/message'
import SxTab from './components/tab'

const components = [SxIcon, SxButton, SxTab]

function install(_Vue) {
  components.forEach(comp => {
    _Vue.component(comp.name, comp)
  })
  _Vue.prototype.$SxNotice = SxNotice
  _Vue.prototype.$SxMessage = SxMessage
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: process.env.VERSION,
  install,
  SxIcon,
  SxButton,
  SxNotice,
  SxMessage,
  SxTab,
}
