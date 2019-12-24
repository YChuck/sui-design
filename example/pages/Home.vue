<template>
  <div class="home">
    <h1>SUI-DESIGN</h1>
    <h3>快速上手</h3>
    <h4>1. NPM 安装</h4>
    <pre><code class='language-shell' lang='shell'>$ npm install sui-design --save
</code></pre>
    <h4>2. 引入 <strong>SUI-DESIGN</strong></h4>
    <h5>全局引入:</h5>
    <p>一般在 webpack 入口 <code>main.js</code> 中如下配置：</p>
    <pre><code class='language-javascript' lang='javascript'>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;
// 添加样式
import &#39;sui-design/lib/sui.css&#39;
// 导入 sui-design
import SUI from &#39;sui-design&#39;
// 注册
Vue.use(SUI)

Vue.config.productionTip = false

new Vue({
  render: h =&gt; h(App),
}).$mount(&#39;#app&#39;)
</code></pre>
    <h5>按需引入:</h5>
    <p>
      借助插件
      <a href="https://github.com/ant-design/babel-plugin-import"
        >babel-plugin-import</a
      >可以实现按需加载组件，减少文件体积
    </p>
    <ol>
      <li><code>npm install</code> 并配置 <code>.babelrc</code> 文件</li>
    </ol>
    <pre><code class='language-javascript' lang='javascript'>// shell
$ npm install babel-plugin-import --save-dev

// .babelrc
&quot;plugins&quot;: [[&quot;import&quot;, {
  &quot;libraryName&quot;: &quot;sui-design&quot;,
  &quot;libraryDirectory&quot;: &quot;src/components&quot;
}, &quot;sui-design&quot;]]
</code></pre>
    <ol start="2">
      <li>使用 <code>ES6 Module</code> 按需引入组件</li>
    </ol>
    <pre><code class='language-javascript' lang='javascript'>import { button } from &#39;sui-design&#39;
Vue.component(&#39;sxButton&#39;, button)
</code></pre>
    <p><strong>特别提醒</strong></p>
    <ol>
      <li>
        1.不要在项目中同时 <strong>全部引入</strong> 和
        <strong>按需引入</strong> (存在冲突)
      </li>
      <li>
        2.全局引入和按需引用都必须导入样式，即在
        <strong>main.js</strong> 或根组件执行
        <code>import &#39;sui-design/lib/sui.css&#39;</code>
      </li>
      <li>
        3.由于封装库强依赖: <strong>iView</strong> <strong>Element-Ui</strong>
        <strong>Moment</strong> 请确保项目中引入对应库
      </li>
    </ol>
  </div>
</template>
<style lang="scss">
.home {
  margin: 20px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    margin: 10px 0;
  }
  h1 {
    margin-bottom: 20px;
  }
  h3 {
    font-size: 18px;
  }
  h4 {
    font-weight: 700;
    font-size: 20px;
  }
  h5 {
    font-weight: 700;
    border-left: 2px solid black;
    padding-left: 10px;
  }
  blockquote {
    margin: 10px;
    text-indent: 2ch;
    border-left: 4px solid #aeabab;
    padding: 10px;
    background-color: #f6f6f69e;
  }
  pre {
    background-color: #f3f3f3;
    padding: 10px;
    font-size: 12px;
  }
  li {
    padding: 5px;
  }
}
</style>
