import 'iview/dist/styles/iview.css'
import './assets/scss/main.scss'

import App from './App'
import Vue from 'vue'
import router from './router'
import SUI from '../src/index'
import VueClipboard from 'vue-clipboard2'
import CodeSection from './components/code-section'

SUI.SxIcon.createFromSymbol(
  'http://at.alicdn.com/t/font_1183153_bao6nseg46i.js',
)

Vue.use(SUI)
Vue.use(VueClipboard)

Vue.component(CodeSection.name, CodeSection)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
