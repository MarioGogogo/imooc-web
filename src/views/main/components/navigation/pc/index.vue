<template>
  <div class="mobilehead bg-white sticky top-0 left-0 w-full z-10">
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
        duration-500
        overflow-hidden
        mx-auto
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
        "
        @click="toggleOpenState"
      >
        <svg-icon
          :name="[
            isOpenCategory
              ? 'arrow-ios-back-outline'
              : 'arrow-ios-forward-outline',
          ]"
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
          duration-500
          text-zinc-900 text-base
          font-bold
          h-4
          leading-4
          cursor-pointer
          hover:bg-zinc-200
          rounded
          mr-1
          mb-1
        "
        :class="{ 'text-zinc-900 bg-zinc-200': currentCategoryIndex === index }"
        @click="onItemClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpenCategory = ref(false)

const toggleOpenState = () => {
  isOpenCategory.value = !isOpenCategory.value
}
// 选中状态
const currentCategoryIndex = ref(0)
const onItemClick = (index) => {
  currentCategoryIndex.value = index
}
</script>

<style lang="scss" scoped>
</style>