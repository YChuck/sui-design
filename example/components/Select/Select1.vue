<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-select
          class="template-instance-item"
          level="global"
          v-model="model"
          style="width: 100px;"
        >
          <Option
            v-for="item in cityList"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</Option
          >
        </sx-select>
        <sx-select
          class="template-instance-item"
          level="fragment"
          v-model="model"
          style="width: 100px;"
          ><Option
            v-for="item in cityList"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</Option
          ></sx-select
        >
        <sx-select
          class="template-instance-item"
          level="form"
          style="width: 100px;"
          ><Option
            v-for="item in cityList"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</Option
          ></sx-select
        >
      </div>
      <div class="template-item-info">
        <span class="template-info-title">样式类型</span>
        <span class="template-info-content"
          >使用 level 来改变下拉选择框样式(level: global、fragment、form)</span
        >
      </div>
    </div>
    <div class="template-item-right">
      <code-section :content="json" json></code-section>
    </div>
  </div>
</template>

<script>
import { Option } from 'iview'
export default {
  components: { Option },
  data() {
    return {
      json: `
<sx-select level="global" style="width: 100px;"/>
<sx-select level="fragment" style="width: 100px;"/>
<sx-select level="form" style="width: 100px;"/>`,
      cityList: [
        {
          value: 'New York',
          label: 'New York',
        },
        {
          value: 'London',
          label: 'London',
        },
        {
          value: 'Sydney',
          label: 'Sydney',
        },
        {
          value: 'Ottawa',
          label: 'Ottawa',
        },
        {
          value: 'Paris',
          label: 'Paris',
        },
        {
          value: 'Canberra',
          label: 'Canberra',
        },
      ],
      model: '',
    }
  },
}
</script>
