const toStr = Object.prototype.toString

/**
 * 安全判断数据结构类型(包括原始类型及引用类型判断)
 * @param {*} value
 */
const type = value => {
  let t = typeof value
  if (t === 'object') return /\s(\w*)/g.exec(toStr.call(value))[1].toLowerCase()
  return t
}

/**
 * 安全判断数据是否为对象
 * @param {*} value
 */
const isObject = value => toStr.call(value) === '[object Object]'

/**
 * 安全判断数据是否为数组
 * @param {*} value
 */
const isArray = value => toStr.call(value) === '[object Array]'

/**
 * 安全判断数据是否为函数
 * @param {*} value
 */
const isFunction = value => toStr.call(value) === '[object Function]'

/**
 * 判断数据是否为字符串
 * @param {*} value
 */
const isString = value => typeof value == 'string'

/**
 * 判断数据是否为数字
 * @param {*} value
 */
const isNumber = value => typeof value == 'number'

/**
 * 判断数据是否为布尔值
 * @param {*} value
 */
const isBoolean = value => typeof value == 'boolean'

export { type, isObject, isArray, isFunction, isString, isNumber, isBoolean }
