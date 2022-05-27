<template>
  <popover>
    <template #reference>
      <!-- 具名插槽 外框-->
      <svg-icon
        :name="svgIconName"
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
        @click="onItemClick(item)"
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
import { computed } from 'vue';
import { useStore } from 'vuex';
/**监听主题
 * 1. 简体主题切换行为
 * 2.根据行为保存当前展示主题到vuex
 * 3 根据vuex中主题 展示 header-theme下的显示图标
 * 4.根据vuex保存的状态 改变html 和css
 */
const themeList = [
  { id: 0, name: "极简白", icon: "icontubiao", type: "light" },
  { id: 1, name: "极夜黑", icon: "igw-l-moon", type: "dark" },
  { id: 2, name: "跟随系统", icon: "zhuti", type: "system" }
]
// 切换事件
const store = useStore()
const onItemClick = (themeItem) => {
  store.commit('themeState/changeThemeType', themeItem.type)
}

// 选择主题图标
const svgIconName = computed(() => {
  const findTheme = themeList.find(item => item.type === store.getters.themeType)
  return findTheme.icon
})




</script>

<style lang="scss" scoped>
</style>