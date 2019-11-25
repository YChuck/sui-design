import './iconfont'
import Icon from './icon'
import { isString, addScript } from '../../utils'

/**
 * 类方法: 用于额外加载图标库 (传入链接,自动生成 script)
 */
Icon.createFromSymbol = function(url) {
  return new Promise((resolve, reject) => {
    if (!isString(url) || !url.includes('http'))
      reject(new Error('the symbol url must be a url str'))
    addScript(url)
      .then(v => {
        resolve(v)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default Icon
