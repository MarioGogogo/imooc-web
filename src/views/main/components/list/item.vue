<template>
  <div
    class="
      group
      item
      bg-white
      dark:bg-zinc-900
      xl:dark:bg-zinc-800
      rounded
      pb-1
    "
  >
    <div class="relative w-full rounded cursor-zoom-in gruop">
      <!-- 图片 -->
      <img
        class="w-full rounded bg-transparent"
        :src="data.photo"
        alt="wallpaper"
        srcset=""
        :style="{ height: (width / data.photoWidth) * data.photoHeight + 'px' }"
      />
      <!-- 遮罩层 -->
      <div
        class="
          hidden
          opacity-0
          w-full
          h-full
          bg-zinc-90/50
          absolute
          top-0
          left-0
          rounded
          duration-300
          group-hover:opacity-100
          xl:block
        "
      >
        <!-- 分享 -->
        <base-button class="absolute top-1.5 left-1.5">分享</base-button>
        <!-- 点赞 -->
        <base-button
          class="absolute top-1.5 right-1.5"
          type="info"
          icon="heart"
          iconClass="fill-zinc-900 dark:fill-zinc-200"
        ></base-button>
        <!-- 下载 -->
        <base-button
          class="absolute bottom-1.5 left-1.5 bg-zinc-100/70"
          type="info"
          size="small"
          icon="download"
          iconClass="fill-zinc-900 dark:fill-zinc-200"
        ></base-button>
        <!-- 全屏 -->
        <base-button
          class="absolute bottom-1.5 right-1.5 bg-zinc-100/70"
          type="info"
          size="small"
          icon="sceen"
          iconClass="fill-zinc-900 dark:fill-zinc-200"
        ></base-button>
      </div>
    </div>
    <!-- 标题 -->
    <p class="text-sm mt-1 font-bold text-zinc-900 dark:text-zinc-300 px-1">
      {{ data.title }}
    </p>
    <!-- 作者头像 姓名 -->
    <div class="flex items-center mt-1 px-1">
      <img class="w-2 h-2 rounded-full" :src="data.avatar" alt="" srcset="" />
      <p class="text-sm text-zinc-500 ml-1">{{ data.author }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  width: {
    type: Number,
  }
})
</script>

<style lang="scss" scoped>
</style>