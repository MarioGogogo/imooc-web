<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in hintData"
        :key="index"
        class="
          py-1
          pl-1
          text-base
          font-bold
          text-zinc-500
          rounded
          cursor-pointer
          duration-300
          hover:bg-zinc-200
          dark:hover:bg-zinc-900
        "
        @click="onItemClick(item)"
        v-html="highlightText(item)"
      ></li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { getHintsList } from '@/api/pexels.js';
import { watchDebounced } from '@vueuse/core';
const props = defineProps({
  searchText: {
    type: String,
    required: true
  }
})

// 搜索提示异步获取

const hintData = ref([])


const getHintData = async () => {
  if (!props.searchText) return
  const res = await getHintsList(props.searchText)
  const { data } = res.data
  hintData.value = data.result
  console.log('%c 🍛 搜索请求: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', data);
}

// note:防抖 避免多次请求
watchDebounced(
  () => props.searchText, getHintData, {
  immediate: true, //立刻执行
  debounce: 500  //延迟时间
})

const emits = defineEmits(["hintClick"])
//点击事件
const onItemClick = (item) => {
  emits('hintClick', item)
}

//处理高亮标签
const highlightText = (text) => {
  const highlightStr = `<span class="text-zinc-900 dark:text-zinc-200">${props.searchText}</span>`
  const reg = new RegExp(props.searchText, 'gi')
  return text.replace(reg, highlightStr)

}

</script>

<style lang="scss" scoped>
</style>3