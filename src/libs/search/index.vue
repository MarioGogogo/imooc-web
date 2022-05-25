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
    "
  >
    <!-- 内部框 -->
    <div>
      <!-- 搜索图标 -->
      <svg-icon
        class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2"
        name="sousuo"
        color="#fff"
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
        "
        placeholder="搜索你喜欢的"
      />
      <!-- 删除按钮 -->
      <svg-icon
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
    </div>
    <!-- 下啦区 -->
    <transition name="slide">
      <div
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
        "
      >
        <h1>我是插槽</h1>
        <slot name="dropdown"></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>

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