<template>
  <!-- 头部组件 -->
  <div
    class="
      w-full
      bg-white
      dark:bg-zinc-800 dark:border-b-zinc-700
      border-b border-b-zinc-200
      px-2
      py-1
      duration-500
    "
  >
    <div class="flex items-center">
      <svg-icon
        class="w-5 h-5 cursor-pointer mr-2"
        name="zhangyu"
        @click="onGoHomeClick"
      ></svg-icon>

      <header-search class="w-full"></header-search>
      <header-theme></header-theme>
      <header-my></header-my>
    </div>
  </div>
</template>

<script setup>
import HeaderSearch from './header-search/index.vue';
import HeaderTheme from './header-theme/index.vue';
import HeaderMy from './header-my/index.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const onGoHomeClick = () => {
  router.push("/")
}
</script>

<style lang="scss" scoped>
</style>