<template>
  <div class="navigation">
    <mobile-navigation
      v-if="isMobileTerminal"
      :data="categoryData"
    ></mobile-navigation>
    <pc-navigation v-else></pc-navigation>
  </div>
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible.js';
import mobileNavigation from './mobile/index.vue';
import pcNavigation from './pc/index.vue';
import { ref, onMounted } from 'vue';
import { fetchGetCategory } from '@/api/category.js';


//初始化类别数据
const categoryData = ref([])


onMounted(async () => {
  const res = await fetchGetCategory()

  const { results, success } = res.data
  if (success && results[0]) {
    const { categorys } = results[0]
    categoryData.value = categorys
    console.log('%c 🍅 res: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', categorys);
  }

})
</script>

<style lang="scss" scoped>
</style> 