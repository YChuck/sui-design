<template>
  <div class="template-item">
    <div class="template-item-left">
      <div class="tempalte-instance">
        <sx-select
          class="template-instance-item"
          level="global"
          v-model="model"
          ref="select"
          style="width: 200px;"
          clearable
        >
          <Option
            v-for="item in cityList"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</Option
          >
        </sx-select>
      </div>
      <div class="template-item-info">
        <span class="template-info-title">Select Ref</span>
        <span class="template-info-content"
          >由于封装组件包裹 iView Select 实例,请使用 this.$refs.[封装组件的
          Ref].$children[0] 获取 iView Select 实例</span
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
<sx-select 
    level="global" 
    style="width: 200px;" 
    ref="select"
    clearable />
    
// iView select 实例 = this.$refs.select.$children[0]`,
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
