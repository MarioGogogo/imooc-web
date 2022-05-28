<template>
  <waterfall
    :data="wallpaperData"
    nodeKey="id"
    :column="5"
    :picturePreReading="true"
  >
    <template v-slot="{ item, width }">
      <wallpaper-item :data="item" :width="width"></wallpaper-item>
    </template>
  </waterfall>
</template>

<script setup>
import { getPexlesList } from '@/api/pexels.js';
import { ref } from 'vue';
import WallpaperItem from './item.vue';


const wallpaperData = ref([])
const wallpaperList = async () => {
  const { data } = await getPexlesList()
  console.log('%c 🍯 壁纸请求: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', data);
  wallpaperData.value = data.photos
}


wallpaperList()
</script>

<style lang="scss" scoped>
</style>