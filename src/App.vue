<template>
  <message type="error" content="测试"></message>
  <!-- 一级路由出口 -->
  <div class="h-screen fixed top-0 left-0 w-screen">
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>



<script setup>
import { isMobileTerminal } from './utils/flexible.js';


</script>



<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
