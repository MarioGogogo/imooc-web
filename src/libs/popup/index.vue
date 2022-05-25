<template>
  <div class="popup">
    <teleport to="body">
      <transition name="fade">
        <!-- 蒙版 -->
        <div
          v-if="isVisable"
          class="w-screen h-screen bg-zinc-900/80 fixed top-0 left-0 z-40"
          @click="isVisable = false"
        ></div>
      </transition>

      <transition name="popup-down-up">
        <!-- 内容 -->
        <div
          v-if="modelValue"
          v-bind="$attrs"
          class="w-screen bg-white z-50 fixed bottom-0"
        >
          <slot />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { watch } from '@vue/runtime-core';
import { useScrollLock, useVModel } from '@vueuse/core';
const props = defineProps({
  modelValue: {
    required: false,
    type: Boolean
  }
})

//响应式 数据
const isVisable = useVModel(props)

//是否滚动响应数据
const appDom = document.querySelector("#app")
const isLocked = useScrollLock(appDom)

// bug:这里会导致无法滚动 popup
watch(isVisable, (val) => {
  console.log('%c 🍈 是否滚动响应数据: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', val);
  isLocked.value = val
}, {
  immediate: true  //马上执行
})

</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
// 准备进入
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
// 过渡
.popup-down-up-enter-active,
.popup-down-up-leave-active {
  transition: all 0.4s;
}
.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transition: all 0.4s;
  transform: translateY(100%);
}
</style>
