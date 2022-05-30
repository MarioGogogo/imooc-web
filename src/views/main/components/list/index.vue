<template>
  <infinite
    v-model="loading"
    :isFinished="isFinished"
    @onLoad="getWallpaperList"
  >
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
  </infinite>
</template>

<script setup>
import { getPexlesList } from '@/api/pexels.js';
import { computed, ref } from 'vue';
import WallpaperItem from './item.vue';
import { isMobileTerminal } from '@/utils/flexible.js';

// 请求分页
let query = {
  page: 1,
  size: 20
}
const loading = ref(false)
const isFinished = ref(false)

const wallpaperData = ref([])

const getWallpaperList = async () => {
  //全部加载完成
  if (isFinished.value) return
  // 完成第一次请求后 后续page +1 分页
  if (wallpaperData.value.length) {
    query.page += 1
  }
  const { data } = await getPexlesList(query)
  if (data.data && query.page === 1) {
    wallpaperData.value = data.data.list
  } else {
    wallpaperData.value.push(...data.data.list)
  }
  //判断数据加载完成
  if (wallpaperData.value.length === data.data.total) {
    isFinished.value = true
  }
  loading.value = false
}







</script>

<style lang="scss" scoped>
</style>