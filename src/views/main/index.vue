<template>
  <div class="main h-full overflow-auto bg-white dark:bg-zinc-800 duration-500">
    <navigation-head />
    <div class="max-w-screen-xl mx-auto relative m-1 xl:mt-4">
      <wallpaper-list></wallpaper-list>
    </div>
  </div>
</template>

<script setup>
import navigationHead from './components/navigation/index.vue';
import WallpaperList from './components/list/index.vue';
</script>

<style lang="scss" scoped>
</style>