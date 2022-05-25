<template>
  <div>是否移动设备---{{ isMobileTerminal }}</div>
  <!-- 一级路由 -->
  <router-view></router-view>
</template>



<script setup>
import { isMobileTerminal } from './utils/flexible.js';
import { onMounted } from 'vue';
import { fetchGetCategory } from '@/api/category.js';

onMounted(() => {
  fetchGetCategory()
})

</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
