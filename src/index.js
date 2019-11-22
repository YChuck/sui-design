import './styles'

const components = []

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
}
