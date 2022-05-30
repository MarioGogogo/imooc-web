<template>
  <div
    class="
      mobilehead
      bg-white
      sticky
      top-0
      left-0
      w-full
      z-10
      dark:bg-zinc-800
      duration-500
    "
  >
    <ul
      class="
        w-[800px]
        relative
        flex flex-wrap
        justify-center
        overflow-x-auto
        px-[10px]
        py-1
        text-xs text-zinc-600
        overflow-hidden
        mx-auto
        duration-500
      "
      :class="[isOpenCategory ? 'h-[206px]' : 'h-[56px]']"
    >
      <!-- 展示箭头 -->
      <div
        class="
          absolute
          right-1
          bottom-1
          z-20
          p-1
          rounded
          cursor-pointer
          duration-500
          hover:bg-zinc-200
          dark:text-zinc-500 dark:hover:text-zinc-300
        "
        @click="toggleOpenState"
      >
        <svg-icon
          :name="
            isOpenCategory
              ? 'arrow-ios-forward-outline'
              : 'arrow-ios-back-outline'
          "
          class="w-1.5 h-1.5"
          fillClass="fill-zinc-900"
        ></svg-icon>
      </div>
      <li
        v-for="(item, index) in $store.getters.categorys"
        :key="item.id"
        class="
          flex-shrink-0
          px-1.5
          py-0
          z-10
          duration-300
          text-zinc-900 text-base
          font-bold
          h-4
          leading-4
          cursor-pointer
          hover:bg-zinc-200
          rounded
          mr-1
          mb-1
          dark:text-zinc-500 dark:hover:bg-zinc-800
        "
        :class="{
          'text-zinc-900 bg-zinc-200 dark:text-zinc-300 dark:bg-zinc-900':
            $store.getters.currentCategoryIndex === index,
        }"
        @click="onItemClick(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
const isOpenCategory = ref(false)

const toggleOpenState = () => {
  isOpenCategory.value = !isOpenCategory.value
}
// 选中状态
const store = useStore()

const onItemClick = (item) => {
  store.commit("appState/changeCurrentCategory", item)
}
</script>

<style lang="scss" scoped>
</style>