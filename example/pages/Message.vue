<template>
  <div class="Message template">
    <h1>Message</h1>
    <sx-header title="代码示例" level="secondary"></sx-header>
    <div class="template-view">
      <Message0></Message0>
      <Message1></Message1>
      <Message2></Message2>
      <Message3></Message3>
      <Message4></Message4>
      <Message5></Message5>
    </div>
    <sx-header title="Api" level="secondary"></sx-header>
    <div class="api-view">
      <h5>message func:</h5>
      <figure>
        <table>
          <thead>
            <tr>
              <th style="text-align:center;">方法</th>
              <th style="text-align:center;">参数</th>
              <th style="text-align:center;">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;">Message.config(config)</td>
              <td style="text-align:center;">
                config: 全局默认配置 (Object类型)
              </td>
              <td style="text-align:center;">
                用于配置 Message 自定义样式及是否开启全局阻塞(即所有 Message
                都会判断是否阻塞)
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">Message.open(option)</td>
              <td style="text-align:center;">
                option: 单消息配置 (Object类型)
              </td>
              <td style="text-align:center;">通过传入对应配置来展示单个消息</td>
            </tr>
            <tr>
              <td style="text-align:center;">Message.success(option)</td>
              <td style="text-align:center;">
                option: 单消息配置 (Object | String 类型)
              </td>
              <td style="text-align:center;">
                通过传入对应配置来展示单个消息(默认设置成功图标).若传入字符串则用于设置消息内容
                (content属性)
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">Message.error(option)</td>
              <td style="text-align:center;">
                option: 单消息配置 (Object | String 类型)
              </td>
              <td style="text-align:center;">
                通过传入对应配置来展示单个消息(默认设置失败图标).若传入字符串则用于设置消息内容
                (content属性)
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">Message.close(name)</td>
              <td style="text-align:center;">name: 要关闭的消息的唯一表识</td>
              <td style="text-align:center;">
                通过传入要关闭的消息的唯一表识来关闭正在显示的提醒
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">Message.destroy()</td>
              <td style="text-align:center;">--</td>
              <td style="text-align:center;">
                调用该方法将销毁当前 Message 实例及所有消息并从 Dom 中剔除元素
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>message config:</h5>
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
              <td style="text-align:center;">styles</td>
              <td style="text-align:center;">Message 队列元素样式</td>
              <td style="text-align:center;">Object</td>
              <td style="text-align:center;">
                { top: &#39;24px&#39;,left: &#39;50%&#39;,transform:
                &#39;translateX(-50%)&#39;}
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">block</td>
              <td style="text-align:center;">
                是否开启全局阻塞(开启后同时有且仅有一个消息存在)
              </td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">false</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h5>message option:</h5>
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
              <td style="text-align:center;">name</td>
              <td style="text-align:center;">当前消息的唯一标识</td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">自动生成</td>
            </tr>
            <tr>
              <td style="text-align:center;">title</td>
              <td style="text-align:center;">消息标题</td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">content</td>
              <td style="text-align:center;">
                消息内容(可选):可设置 html 字符串 或 render 函数
                (render优先级更高)
              </td>
              <td style="text-align:center;">String | Function</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">duration</td>
              <td style="text-align:center;">
                自动关闭延时(单位秒,设置0则不自动关闭)
              </td>
              <td style="text-align:center;">Number</td>
              <td style="text-align:center;">1.5</td>
            </tr>
            <tr>
              <td style="text-align:center;">closable</td>
              <td style="text-align:center;">是否可手动关闭(显示关闭按钮)</td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">false</td>
            </tr>
            <tr>
              <td style="text-align:center;">icon</td>
              <td style="text-align:center;">
                自定义图标: 对象类型包括所有 Icon 组件属性,字符串类型仅设置 Icon
                type 属性
              </td>
              <td style="text-align:center;">String | Object</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">onClose</td>
              <td style="text-align:center;">消息关闭时回调</td>
              <td style="text-align:center;">Function</td>
              <td style="text-align:center;">--</td>
            </tr>
            <tr>
              <td style="text-align:center;">transitionName</td>
              <td style="text-align:center;">消息的过度效果</td>
              <td style="text-align:center;">String</td>
              <td style="text-align:center;">message-move</td>
            </tr>
            <tr>
              <td style="text-align:center;">block</td>
              <td style="text-align:center;">
                设置单个消息是否阻塞(优先级高于全局配置)
              </td>
              <td style="text-align:center;">Boolean</td>
              <td style="text-align:center;">false</td>
            </tr>
          </tbody>
        </table>
      </figure>
    </div>
  </div>
</template>

<script>
import {
  Message0,
  Message1,
  Message2,
  Message3,
  Message4,
  Message5,
} from '../components/Message'

export default {
  name: 'Message',
  components: {
    Message0,
    Message1,
    Message2,
    Message3,
    Message4,
    Message5,
  },
}
</script>
