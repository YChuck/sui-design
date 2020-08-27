# SUI-DESIGN 使用手册 [demo](http://119.45.142.60:8080/sui-design/)

### 快速上手

#### 1. NPM 安装

```shell
$ npm install sui-design --save
```

#### 2. 引入 **SUI-DESIGN**

##### 全局引入:

一般在 webpack 入口 `main.js` 中如下配置：

```javascript
import Vue from 'vue'
import App from './App.vue'
// 添加样式
import 'sui-design/lib/sui.css'
// 导入 sui-design
import SUI from 'sui-design'
// 注册
Vue.use(SUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

##### 按需引入:

借助插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)可以实现按需加载组件，减少文件体积

1.  `npm install` 并配置 `.babelrc` 文件

```javascript
// shell
$ npm install babel-plugin-import --save-dev

// .babelrc
"plugins": [["import", {
  "libraryName": "sui-design",
  "libraryDirectory": "src/components"
}, "sui-design"]]
```

2. 使用 `ES6 Module` 按需引入组件

```javascript
import { button } from 'sui-design'
Vue.component('sxButton', button)
```

**特别提醒**

- 不要在项目中同时 **全部引入** 和 **按需引入** (存在冲突)
- 全局引入和按需引用都必须导入样式，即在 **main.js** 或根组件执行 `import 'sui-design/lib/sui.css'`
- 由于封装库强依赖: **iView** **Element-Ui** **Moment** 请确保项目中引入对应库
