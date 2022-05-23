<template>
  <div class="navigation">
    <mobile-navigation v-if="isMobileTerminal"></mobile-navigation>
    <pc-navigation v-else></pc-navigation>
  </div>
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible.js';
import mobileNavigation from './mobile/index.vue';
import pcNavigation from './pc/index.vue';

</script>

<style lang="scss" scoped>
</style>