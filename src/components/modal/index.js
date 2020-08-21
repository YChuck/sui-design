import Modal from './$modal'

let instance

function preconfig(config) {
  let props = {
    ...config.props,
    keyClosable: false,
    maskClosable: false,
  }
  instance = Modal.new({ ...config, props })
  instance.show()
}

Modal.confirm = function(config = {}) {
  return (
    config.props &&
    config.event &&
    (() => {
      config.props.hasError = false
      return preconfig(config)
    })()
  )
}

Modal.error = function(config = {}) {
  return (
    config.props &&
    config.event &&
    (() => {
      config.props.hasError = true
      return preconfig(config)
    })()
  )
}

Modal.config = function(config = {}) {
  instance = Modal.new(config)
  instance.show()
}

Modal.remove = function() {
  instance && instance.remove()
}

export default Modal
