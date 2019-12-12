import { isArray, isObject } from './type'
/**
 * 动态添加 Script 脚本 (promise)
 * 过滤重复 url 并添加标记
 */
const addScript = (function() {
  const cache = new Set()
  return function(url) {
    return new Promise(resolve => {
      if (
        typeof document !== 'undefined' &&
        typeof window !== 'undefined' &&
        typeof document.createElement === 'function' &&
        typeof url === 'string' &&
        url.length &&
        !cache.has(url)
      ) {
        const script = document.createElement('script')
        script.setAttribute('src', url)
        script.setAttribute('data-namespace', url)
        cache.add(url)
        script.onload = resolve
        document.body.appendChild(script)
      } else throw new Error('only load script in browser environment')
    })
  }
})()

/**
 * 浅拷贝 (可去除不必要的值/键)
 * @param {*} origin - 元数据
 * @param {Array} without - 元数据为数组则去除包含的值 元数据为对象则去除包含的键
 */
const shallowCopy = (origin, without) => {
  if (typeof origin !== 'object') return origin
  if (!without) without = []
  let output = new (Object.getPrototypeOf(origin).constructor)()
  if (isArray(origin)) {
    origin.forEach(v => {
      if (without.indexOf(v) === -1) {
        output.push(v)
      }
    })
  } else if (isObject(origin)) {
    Object.keys(origin).forEach(key => {
      if (without.indexOf(key) === -1) {
        output[key] = origin[key]
      }
    })
  }
  return output
}

export { shallowCopy, addScript }
