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
  if (data.data) {
    wallpaperData.value = data.data.list
  } else {
    wallpaperData.value = []
  }

}


wallpaperList()
</script>

<style lang="scss" scoped>
</style>