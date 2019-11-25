import './styles'

import SxIcon from './components/icon'
import SxButton from './components/button'

const components = [SxIcon, SxButton]

function install(_Vue) {
  components.forEach(comp => {
    _Vue.component(comp.name, comp)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: process.env.VERSION,
  install,
  SxIcon,
  SxButton,
}
