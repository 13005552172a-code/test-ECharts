<template>
  <div class="title">
    <div ref="chart" id="main" :style="style"></div>
  </div>
</template>

<script setup>
import { onMounted,ref,defineProps,computed } from 'vue'
import * as echarts from 'echarts'
const {width,height,option}=defineProps({
  width:{
    type:String,
    default:'100%'
  },
  height:{
    type:String,
    default:'200px'
  },
  option:{
    type:Object,
    default:()=>({
    xAxis: {
    type:'category',
    data:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
    })
  }
})

const chart = ref(null)
const style=computed(()=>({
  width,
  height
}))

onMounted(()=>{

  
const myChart = echarts.init(chart.value);
      // 使用刚指定的配置项和数据显示图表。
   myChart.setOption(option);
  //  图标响应式
  window.addEventListener(`resize`,()=>{
    myChart.resize()
  })
})


   
    

</script>