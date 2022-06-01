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
import { computed, ref, watch } from 'vue';
import WallpaperItem from './item.vue';
import { isMobileTerminal } from '@/utils/flexible.js';
import { useStore } from 'vuex';
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

//通过newQuery 重新发起请求
const restQuery = (newQuery) => {

  //判断type是否改变 
  if (query.categoryId !== newQuery.categoryId && newQuery.categoryId != "all") {
    query = { ...query, ...newQuery }
  } else {
    query = {
      page: 1,
      size: 20
    }
  }
  //  之前的类别数据是否为空
  wallpaperData.value = []
  //数据重置之后会重新触发页面onload刷新
  isFinished.value = false
  getWallpaperList()
}

// 监听currentCategory方法

const store = useStore()
watch(
  () => store.getters.currentCategory,
  (currentCategory) => {
    console.log('%c 🍈 监听currentCategory方法: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', currentCategory);
    restQuery({
      page: 1,
      categoryId: currentCategory.id
    })
  })

// 监听 搜索文本变化 重新搜索
watch(
  () => store.getters.searchText,
  (newSearchText) => {
    console.log('%c 🍈 监听newSearchText搜索: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', newSearchText);
    restQuery({
      page: 1,
      searchText: newSearchText
    })
  })


</script>

<style lang="scss" scoped>
</style>