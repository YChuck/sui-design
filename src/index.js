import './styles'

import SxIcon from './components/icon'
import SxButton from './components/button'
import SxNotice from './components/notice'
import SxMessage from './components/message'
import SxTab from './components/tab'
import SxTable from './components/table'
import SxDatePicker from './components/date-picker'
import SxInput from './components/input'
import SxSelect from './components/select'
import SxHeader from './components/header'
import SxPage from './components/page'
import SxModal from './components/modal'
import SxLoading from './components/loading'

export const components = [
  SxIcon,
  SxButton,
  SxTab,
  SxTable,
  SxDatePicker,
  SxInput,
  SxSelect,
  SxHeader,
  SxPage,
  SxModal,
]

function install(_Vue) {
  components.forEach(comp => {
    _Vue.component(comp.name, comp)
  })
  _Vue.prototype.$SxNotice = SxNotice
  _Vue.prototype.$SxMessage = SxMessage
  _Vue.prototype.$SxModal = SxModal
  _Vue.prototype.$SxLoading = SxLoading
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
  SxTable,
  SxDatePicker,
  SxInput,
  SxSelect,
  SxHeader,
  SxPage,
  SxModal,
  SxLoading,
}
