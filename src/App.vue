<script setup>
import { isMobileTerminal } from './utils/flexible.js';
</script>

<template>
  <div>是否移动设备---{{ isMobileTerminal }}</div>
</template>

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
