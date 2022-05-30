<template>
  <div>
    <!-- 对应瀑布流中内容 -->
    <slot></slot>
    <div ref="loadingRef" class="h-6 py-4">
      <!-- 加载更多 -->
      <svg-icon
        v-show="loading"
        name="loading"
        class="w-4 h-4 animate-spin mr-1"
      ></svg-icon>
      <!-- 没有更多数据 -->
      <p v-if="isFinished" class="text-center text-base text-zinc-400">
        没有更多数据
      </p>
    </div>
  </div>
</template>

<script setup>
import { useVModel, useIntersectionObserver } from '@vueuse/core';
import { ref, watch } from 'vue';
const props = defineProps({
  modelValue: {
    type: Boolean, //是否正在加载
    required: true
  },
  isFinished: {
    type: Boolean, //是否正在加载完成
    required: false
  }
})

//派发到外部 事件
const emits = defineEmits(['onLoad', 'update:modeValue'])

//处理loading状态
const loading = useVModel(props)

//滚动元素
const loadingRef = ref(null)


// 记录当前是否在底部
const targetIsIntersecting = ref(false)
useIntersectionObserver(loadingRef, ([{ isIntersecting }]) => {
  //当加载更多视图可见 处理加载逻辑
  console.log('%c 🍫 当加载更多视图可见处理加载逻辑: ', 'font-size:20px;background-color: #465975;color:#fff;');
  targetIsIntersecting.value = isIntersecting
  emitLoad() //第一次触发
})



// 触发loading事件
const emitLoad = () => {
  setTimeout(() => {
    //满足1 加载可见 2. 没有loading中 3.数据未全部加载完成
    if (targetIsIntersecting.value && !loading.value && !props.isFinished) {
      loading.value = true
      emits('onLoad')
    }
  }, 400);
}

// fix:监听loading变化  首屏未铺满的问题
watch(loading, emitLoad)


</script>

<style lang="scss" scoped>
</style>