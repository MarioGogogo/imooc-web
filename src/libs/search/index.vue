<template>
  <div
    class="
      group
      relative
      p-0.5
      w-full
      rounded-xl
      border-white
      duration-500
      hover:bg-pink-100/40
      dark:border-zinc-200
    "
    ref="searchRef"
  >
    <!-- 内部框 -->
    <div>
      <!-- 搜索图标 -->
      <svg-icon
        class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2"
        name="sousuo"
        color="#F5ABCD"
      ></svg-icon>
      <!-- 输入框 -->
      <input
        type="text"
        class="
          block
          w-full
          h-[44px]
          pl-4
          outline-0
          bg-zinc-100
          caret-zinc-400
          rounded-xl
          text-zinc-900 text-sm
          tracking-wide
          font-semibold
          border
          border-zinc--100
          focus:border-pink-300
          group-hover:bg-white group-hover:border-zinc-200
          dark:bg-zinc-800
          dark:text-zinc-200
          dark:border-zinc-700
          dark:group-hover:bg-zinc-900
          dark:group-hover:border-zinc-700
        "
        v-model="inputValue"
        placeholder="搜索你喜欢的"
        @keyup.enter="onSearchKeyEnter"
        @focus="onFocusClick"
      />
      <!-- 删除按钮 -->
      <svg-icon
        v-show="inputValue"
        class="
          h-1.5
          w-1.5
          absolute
          translate-y-[-50%]
          top-[50%]
          right-9
          cursor-pointer
          duration-500
        "
        name="shanchu"
        color="#fff"
        @click="onClearInputValue"
      ></svg-icon>
      <!-- 分割线 -->
      <div
        class="
          opacity-0
          h-1.5
          w-[1px]
          absolute
          translate-y-[-50%]
          top-[50%]
          right-[62px]
          duration-500
          bg-zinc-200
          group-hover:opacity-100
        "
        name="shanchu"
        color="#fff"
      ></div>
      <!-- todo:搜索按钮 -->
      <base-button
        class="
          opacity-0
          absolute
          translate-y-[-50%]
          top-[50%]
          right-1
          rounded-full
          duration-500
          group-hover:opacity-100
        "
        icon="pinglun"
        iconColor="#fffff"
        @click="handleSearchBtnClick"
      ></base-button>
    </div>
    <!-- 下啦区 -->
    <transition name="slide">
      <div
        v-if="$slots.dropdown"
        v-show="isFocus"
        class="
          max-h-[368px]
          w-full
          text-base
          overflow-auto
          bg-white
          absolute
          z-20
          left-0
          top-[56px]
          p-2
          rounded
          border border-zinc-200
          duration-200
          hover:shadow-2xl
          dark:bg-zinc-800 dark:border-zinc-600
        "
      >
        <slot name="dropdown"></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useVModel, onClickOutside } from '@vueuse/core';
/**
 * 1.输入内容双向绑定
 * 2. 搜索按钮 hover展示
 * 3.一键清空搜索文本
 * 4.触发搜索事件
 * 5 控制下拉展示区
 * 6 事件处理
 */
const props = defineProps({
  modelValue: {
    required: true,
    type: String
  }
})

//emits 发送事件到外面
const emits = defineEmits("update:modelValue")



//响应式 数据
const inputValue = useVModel(props)


const handleSearchBtnClick = () => {
  console.log('点击搜索');
  // emits()
}

const onClearInputValue = () => {
  inputValue.value = ""
}

const onSearchKeyEnter = () => {
  // emits("keyEnterSearch")
}

// 下拉区域是否展示
const isFocus = ref(false)
const onFocusClick = () => {
  isFocus.value = true
}
const searchRef = ref(null)
// 点击搜索区域外隐藏
onClickOutside(searchRef, () => {
  isFocus.value = false
})
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
// 准备进入
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(40px); //自下而上的动画
}
</style>