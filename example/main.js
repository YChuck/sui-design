import App from './App'
import Vue from 'vue'

import SUI from '../src/index'

Vue.use(SUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
