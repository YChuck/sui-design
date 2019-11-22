/**
 * 判断值是否在给定验证数组中
 * @param {*} val - 需验证的值
 * @param {Array} valids - 验证数组
 */
export const oneOf = (val, valids) => valids.indexOf(val) !== -1
