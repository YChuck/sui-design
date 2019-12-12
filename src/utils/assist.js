import { type } from './type'
/**
 * 判断值是否在给定验证数组中
 * @param {*} val - 需验证的值
 * @param {Array} valids - 验证数组
 */
export const oneOf = (val, valids) => valids.indexOf(val) !== -1

/**
 * 判断入参是否为空
 * @param {*} val
 */
export const isEmpty = val => {
  switch (type(val)) {
    case 'object':
      return Object.keys(val).length === 0
    case 'array':
      return val.length === 0
    case 'string':
    case 'number':
    case 'boolean':
    case 'undefined':
    case 'null':
      return !val
  }
}
