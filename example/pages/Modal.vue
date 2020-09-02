<template>
  <div class="Modal template">
    <h1>Modal</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Modal0></Modal0>
      <Modal1></Modal1>
      <Modal2></Modal2>
      <Modal3></Modal3>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view">
      <h5>Modal props:</h5>
      <figure>
        <table>
          <thead>
            <tr>
              <th style="text-align:center;">属性</th>
              <th style="text-align:center;">说明</th>
              <th style="text-align:center;">类型</th>
              <th style="text-align:center;">默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;">value</td>
              <td style="text-align:center;">
                是否显示弹窗，可以使用 v-model 双向绑定数据
              </td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">false</td>
            </tr>
            <tr>
              <td style="text-align:center;">hasIcon</td>
              <td style="text-align:center;">
                是否展示关闭按钮 (包括 close 插槽)
              </td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">true</td>
            </tr>
            <tr>
              <td style="text-align:center;">maskClosable</td>
              <td style="text-align:center;">蒙板关闭</td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">false</td>
            </tr>
            <tr>
              <td style="text-align:center;">keyClosable</td>
              <td style="text-align:center;">点击 ESC 按钮是否关闭弹窗</td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">true</td>
            </tr>
            <tr>
              <td style="text-align:center;">title</td>
              <td style="text-align:center;">
                弹窗标题 (优先级低于 header 插槽)
              </td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">okText</td>
              <td style="text-align:center;">确认按钮文字</td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">&quot;确定&quot;</td>
            </tr>
            <tr>
              <td style="text-align:center;">cancelText</td>
              <td style="text-align:center;">取消按钮文字</td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">&quot;取消&quot;</td>
            </tr>
            <tr>
              <td style="text-align:center;">errorText</td>
              <td style="text-align:center;">error 按钮文字</td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">&quot;删除&quot;</td>
            </tr>
            <tr>
              <td style="text-align:center;">hasError</td>
              <td style="text-align:center;">是否显示 error 按钮</td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">false</td>
            </tr>
            <tr>
              <td style="text-align:center;">hasFooter</td>
              <td style="text-align:center;">有无底部栏</td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">true</td>
            </tr>
            <tr>
              <td style="text-align:center;">okDisabled</td>
              <td style="text-align:center;">确定按钮是否禁用</td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">false</td>
            </tr>
            <tr>
              <td style="text-align:center;">cancelDisabled</td>
              <td style="text-align:center;">取消按钮是否禁用</td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">false</td>
            </tr>
            <tr>
              <td style="text-align:center;">errorDisabled</td>
              <td style="text-align:center;">error 按钮是否禁用</td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">false</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>Modal events:</h5>
      <figure>
        <table>
          <thead>
            <tr>
              <th style="text-align:center;">方法</th>
              <th style="text-align:center;">说明</th>
              <th style="text-align:center;">返回值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;">on-ok</td>
              <td style="text-align:center;">确认按钮点击事件</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">on-cancel</td>
              <td style="text-align:center;">取消按钮点击事件</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">on-error</td>
              <td style="text-align:center;">error按钮点击事件</td>
              <td style="text-align:center;">--</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>Modal slots:</h5>
      <figure>
        <table>
          <thead>
            <tr>
              <th style="text-align:center;">属性</th>
              <th style="text-align:center;">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;">default</td>
              <td style="text-align:center;">默认插槽用于插入弹窗具体内容</td>
            </tr>
            <tr>
              <td style="text-align:center;">header</td>
              <td style="text-align:center;">
                用于头部栏内容插入 (覆盖 title 属性)
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">close</td>
              <td style="text-align:center;">
                用于关闭区域内容插入 (覆盖默认关闭按钮)
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">footer</td>
              <td style="text-align:center;">
                用于底部栏内容插入 (覆盖默认操作按钮)
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>Modal func:</h5>
      <figure>
        <table>
          <thead>
            <tr>
              <th style="text-align:center;">方法</th>
              <th style="text-align:center;">参数</th>
              <th style="text-align:center;">说明</th>
              <th style="text-align:center;">返回值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;">open</td>
              <td style="text-align:center;">
                option: 弹窗个性配置(Object类型)
              </td>
              <td style="text-align:center;">通过传入对应配置来展示单个弹窗</td>
              <td style="text-align:center;">Promise&lt;Instance&gt;</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>Modal option:</h5>
      <figure>
        <table>
          <thead>
            <tr>
              <th style="text-align:center;">属性</th>
              <th style="text-align:center;">说明</th>
              <th style="text-align:center;">类型</th>
              <th style="text-align:center;">默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;">keep</td>
              <td style="text-align:center;">
                用于明确当前生成的弹窗实例不可自动销毁 (需手动销毁之)
              </td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">true</td>
            </tr>
            <tr>
              <td style="text-align:center;">props</td>
              <td style="text-align:center;">包含所有 Modal 的属性</td>
              <td style="text-align:center;">Object</td>
              <td style="text-align:center;">{ value: true }</td>
            </tr>
            <tr>
              <td style="text-align:center;">on</td>
              <td style="text-align:center;">
                Modal 监听事件配置对象 (再弹窗内容组件对应事件处理之后触发)
              </td>
              <td style="text-align:center;">Object</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">component</td>
              <td style="text-align:center;">
                用于引入弹窗逻辑组件 (支持异步组件) (将覆盖默认插槽配置)
              </td>
              <td style="text-align:center;">Function</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">scopedSlots</td>
              <td style="text-align:center;">
                作用域插槽生成函数 (用于生成作用域插槽) (default 优先级低于
                component 属性)
              </td>
              <td style="text-align:center;">Function</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">componentData</td>
              <td style="text-align:center;">
                用于向弹窗内容组件传递外部数据 格式: [_this (数据来源 vue 指针),
                ...tags (数据标识)]
              </td>
              <td style="text-align:center;">Array</td>
              <td style="text-align:center;">--</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>Modal instance:</h5>
      <figure>
        <table>
          <thead>
            <tr>
              <th style="text-align:center;">属性</th>
              <th style="text-align:center;">说明</th>
              <th style="text-align:center;">参数</th>
              <th style="text-align:center;">类型</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;">display</td>
              <td style="text-align:center;">是否展示当前弹窗实例</td>
              <td style="text-align:center;">visible (Boolean类型)</td>
              <td style="text-align:center;">Function</td>
            </tr>
            <tr>
              <td style="text-align:center;">destroy</td>
              <td style="text-align:center;">用于销毁当前弹窗实例</td>
              <td style="text-align:center;">--</td>
              <td style="text-align:center;">Function</td>
            </tr>
            <tr>
              <td style="text-align:center;">component</td>
              <td style="text-align:center;">当前弹窗的 vue 实例引用</td>
              <td style="text-align:center;">--</td>
              <td style="text-align:center;">Object</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <p>&nbsp;</p>
    </div>
  </div>
</template>

<script>
import { Modal0, Modal1, Modal2, Modal3 } from '../components/Modal'

export default {
  name: 'Modal',
  components: {
    Modal0,
    Modal1,
    Modal2,
    Modal3,
  },
}
</script>
