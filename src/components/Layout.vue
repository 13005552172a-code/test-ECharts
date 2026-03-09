<template>
  <el-row class="tac">
    <el-col :span="3">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
      >
        <el-menu-item @click="goHome" ><span>首页</span></el-menu-item>
        <el-menu-item @click="goCount" ><span>统计管理</span></el-menu-item>
        <el-menu-item @click="goOrder"><span>订单管理</span></el-menu-item>
        <el-menu-item @click="goOther"><span>其他</span></el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goHome = () => {
  router.push('/home');
};
const goCount=()=>{
  router.push('/count')
}
const goOrder=()=>{
  router.push('/order')
}
const goOther=()=>{
  router.push('/other')
}
</script>