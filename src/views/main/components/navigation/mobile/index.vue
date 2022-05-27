<template>
  <div class="mobile-head dark:bg-zinc-900 bg-white sticky top-0 left-0 z-10">
    <ul
      ref="ulTarget"
      class="relative flex overflow-auto p-1 text-xs text-zinc-600"
    >
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="
          absolute
          h-[22px]
          bg-zinc-900
          rounded-lg
          duration-200
          dark:bg-zinc-800
        "
      ></li>
      <!-- 汉堡按钮 -->
      <li
        class="
          fixed
          top-0
          right-[-1px]
          h-4
          px-1
          flex
          items-center
          bg-white
          z-20
          duration-500
          shadow-l-white
          dark:bg-zinc-900 dark:shadow-l-zinc
        "
        @click="onPopUpClick"
      >
        <svg-icon class="w-1.5 h-1.5" name="cebianlan"></svg-icon>
      </li>
      <li
        :ref="getItemRef"
        class="
          flex-shrink-0
          px-1.5
          py-0.5
          z-10
          duration-200
          last:mr-4
          dark:text-zinc-500 dark:hover:text-zinc-300
        "
        :class="{ 'text-zinc-100': currentCategoryIndex === index }"
        v-for="(item, index) in $store.getters.categorys"
        :key="item.id"
        @click="onItemClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>
    {{ ulScrollX }}
    <!-- 底部弹窗 -->
    <popup v-model="isVisable">
      <menu-list
        :categorys="$store.getters.categorys"
        @onItemClick="onItemClick"
      />
    </popup>
  </div>
</template>

<script setup>
import { ref, onBeforeUpdate, watch } from 'vue';
import { useScroll } from '@vueuse/core'
import MenuList from '@/views/main/components/menu/index.vue';

//默认选中下标
const currentCategoryIndex = ref(0)
const isVisable = ref(false)
let itemRefs = []
const getItemRef = (el) => {
  itemRefs.push(el)
}
// 数据改变之后  dom变化之前
onBeforeUpdate(() => {
  itemRefs = []
})

const sliderStyle = ref({
  transform: "translateX(0px)",
  width: '52px'
})

//获取ul
const ulTarget = ref(null)
//获取滚动偏移量
const { x: ulScrollX } = useScroll(ulTarget)

const onItemClick = (index) => {
  console.log('index', index);
  currentCategoryIndex.value = index
  isVisable.value = false
}

const onPopUpClick = () => {
  isVisable.value = true
}


watch(currentCategoryIndex, (val) => {
  const rect = itemRefs[val].getBoundingClientRect()
  console.log('rect', rect);
  sliderStyle.value = {
    //滚动位置 = ul横向滚动的位置 + 当前元素的left- ul的pangding
    transform: `translateX(${ulScrollX.value + rect.left - 10}px)`,
    width: rect.width + "px"
  }

})

</script>

<style lang="scss" scoped>
</style>