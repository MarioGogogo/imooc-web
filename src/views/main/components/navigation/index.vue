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
import { ref, onMounted } from 'vue';
import Layout from '@/views/layout/index.vue';
import { useStore } from 'vuex';
//初始化类别数据
const categoryData = ref([])

//异步请求类别数据
const store = useStore()
store.dispatch("categoryState/useFetchCategoryData")

</script>

<style lang="scss" scoped>
</style> 