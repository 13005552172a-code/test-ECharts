<template>
  <div class="title">
    <div ref="chart" id="main" style="width:400%;height:400px;"></div>
  </div>
</template>

<script setup>
import { onMounted,ref,defineProps,computed } from 'vue'
import * as echarts from 'echarts'

const chart = ref(null)

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