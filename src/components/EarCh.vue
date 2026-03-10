<template>
  <div class="title">
    <div ref="chart"  style="width:100%;height:800px;"></div>
    
  </div>
</template>

<script setup>
import { onMounted,ref,defineProps,computed } from 'vue'
import * as echarts from 'echarts'
import TR from '../assets/ch.geo.json'
import HK from '../assets/HK.json'
import China from '../assets/china.json'  
const chart = ref(null)

onMounted(()=>{

  
const myChart = echarts.init(chart.value);
// 注册
    echarts.registerMap('China', China);

    const option={
      // series:[
      //   {type:'map',
      //     map: 'China',
      //     label:{
      //       // show:true,
      //     },
      //     zoom:1.2,
      //     // nameMap: {
      //     //   'Central and Western': '中西区',
      //     //   Eastern: '东区',
      //     //   Islands: '离岛',
      //     //   'Kowloon City': '九龙城',
      //     //   'Kwai Tsing': '葵青',
      //     //   'Kwun Tong': '观塘',
      //     //   North: '北区',
      //     //   'Sai Kung': '西贡',
      //     //   'Sha Tin': '沙田',
      //     //   'Sham Shui Po': '深水埗',
      //     //   Southern: '南区',
      //     //   'Tai Po': '大埔',
      //     //   'Tsuen Wan': '荃湾',
      //     //   'Tuen Mun': '屯门',
      //     //   'Wan Chai': '湾仔',
      //     //   'Wong Tai Sin': '黄大仙',
      //     //   'Yau Tsim Mong': '油尖旺',
      //     //   'Yuen Long': '元朗'
      //     // },
      //     data: [
      //       { name: '北京', value: 25482 },
            
      //     ],
      //     // itemStyle:{//文本样式
      //     //   // 区域颜色
      //     //   areaColor:'#219edb',
      //     //   borderColor:'#ddd'
      //     // }
      //   }

      // ],
      // visualMap: {
      //   min: 800,
      //   max: 50000,
      //   text: ['高值', '低值'],
      //   realtime: false,
      //   calculable: true,
      //   inRange: {
      //     color: ['lightskyblue', 'yellow', 'orangered']
      //   },
      // },

      geo:{      // 地理
        type:'map',
        map: 'China',
        label:{
          show:true,
          color:'#fff',
        },
        itemStyle:{
          areaColor:'#219edb',
        },
        zoom:1.2
      },
      series:[//标记
      {
        type:"effectScatter",/// 类型：带有涟漪特效的散点图
        coordinateSystem:'geo',//坐标系：绑定到地理坐标系（地图）上
        symbolSize: 10, //标记大小,
        label:{
          show:true,
          formatter:'{b}'//坐标格式化
        },
        itemStyle:{
          color:'red'
        },
        data:[
          {name:'上海',value:[121.4648,31.2891]},
          {name:'北京',value:[116.46,39.92]},

        ]
      }
      ]
    }
  // 使用刚指定的配置项和数据显示图表。
   myChart.setOption(option);
  //  图标响应式
  window.addEventListener(`resize`,()=>{
    myChart.resize()
  })
})


   
    

</script>