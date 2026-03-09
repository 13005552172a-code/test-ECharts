<template>
  <div class="index-container">
    <div style="flex:0 1 40%" >
      <div class="content">
        <MyCharts
        height="200px"
        :option="option"
        />
        <MyCharts
        height="200px"
        :option="option"
        />
        <MyCharts
        height="200px"
        :option="option"
        />
      </div>
    </div>
    <div style="flex:0 1 60%">
      <div class="content">
        <MyCharts
        height="400px"
        :option="option1"
        />
      </div>  
    </div>
  </div>
</template>

<script setup>
import{ref,reactive,onMounted} from 'vue'
import MyCharts from '@/components/MyCharts.vue';
import option1 from '@/utils/LineOption/OpTion1';
import option from '@/utils/LineOption/OpTion';

 </script>