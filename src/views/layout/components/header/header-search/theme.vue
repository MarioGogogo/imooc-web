<template>
  <div>
    <p class="text-xs mb-1 text-zinc-400">热门精选</p>
    <div class="flex h-[140px]" v-if="themeData.list.length > 0">
      <!-- 大图 -->
      <div
        class="relative rounded w-[260px] cursor-pointer"
        :style="{ background: randomRGB() }"
      >
        <img
          :src="themeData.big.photo"
          v-lazy
          class="w-full h-full object-cover rounded"
          alt=""
        />
        <p
          class="
            absolute
            bottom-0
            left-0
            w-full
            h-[45%]
            flex
            pl-1
            items-center
            rounded
            backdrop-blur
            text-white text-xs
            duration-300
            hover:backdrop-blur-none
          "
        >
          #{{ themeData.big.title }}
        </p>
      </div>
      <!-- 小图 -->
      <ul class="flex flex-wrap flex-1 max-w-[860px]">
        <li
          v-for="item in themeData.list"
          :key="item.id"
          class="
            h-[45%]
            w-[260px]
            text-white text-xs
            relative
            ml-1.5
            mb-1.5
            rounded
          "
        >
          <img
            :src="item.photo"
            alt=""
            v-lazy
            class="w-full h-full object-cover rounded"
          />
          <p
            class="
              absolute
              bottom-0
              left-0
              pl-1
              w-full
              h-full
              flex
              rounded
              items-center
              backdrop-blur
              text-white text-xs
              duration-300
              hover:backdrop-blur-none
            "
          >
            #{{ item.title }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { getHotTheme } from '@/api/pexels';
import { onMounted, ref } from 'vue';
import { randomRGB } from '@/utils/colors.js';
const themeData = ref({ big: {}, list: [] })

const getHotThemeData = async () => {
  const res = await getHotTheme()
  const { data } = res.data
  themeData.value = {
    big: data.themes[0],
    list: data.themes.splice(1, data.themes.length)
  }
  console.log('%c 🍇 data: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', themeData.value);
}
getHotThemeData()
</script>

<style lang="scss" scoped>
</style>