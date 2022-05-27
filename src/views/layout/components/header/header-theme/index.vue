<template>
  <popover>
    <template #reference>
      <!-- 具名插槽 外框-->
      <svg-icon
        name="icontubiao"
        class="
          w-4
          h-4
          p-1
          cursor-pointer
          rounded-sm
          duration-200
          outline-none
          hover:bg-zinc-100/60
          dark:hover:bg-zinc-900
        "
        fillClass="fill-zinc-900 dark:fill-zinc-300"
      ></svg-icon>
    </template>
    <!-- 匿名插槽 弹出层内容-->
    <div class="w-[140px] overflow-hidden">
      <div
        class="
          flex
          items-center
          p-1
          cursor-pointer
          rounded
          hover:bg-zinc-100
          dark:hover:bg-zinc-800
        "
        v-for="item in themeList"
        :key="item.id"
      >
        <svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></svg-icon>
        <span class="text-sm text-zinc-800 dark:text-zinc-300">{{
          item.name
        }}</span>
      </div>
    </div>
  </popover>
</template>

<script setup>
const themeList = [
  { id: 0, name: "极简白", icon: "icontubiao" },
  { id: 1, name: "极夜黑", icon: "igw-l-moon" },
  { id: 2, name: "跟随系统", icon: "zhuti" }
]
</script>

<style lang="scss" scoped>
</style>