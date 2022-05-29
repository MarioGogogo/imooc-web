<template>
  <waterfall
    class="px-1 w-full"
    :data="wallpaperData"
    nodeKey="id"
    :column="isMobileTerminal ? 2 : 5"
    :picturePreReading="false"
  >
    <template v-slot="{ item, width }">
      <wallpaper-item :data="item" :width="width"></wallpaper-item>
    </template>
  </waterfall>
</template>

<script setup>
import { getPexlesList } from '@/api/pexels.js';
import { computed, ref } from 'vue';
import WallpaperItem from './item.vue';
import { isMobileTerminal } from '@/utils/flexible.js';

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