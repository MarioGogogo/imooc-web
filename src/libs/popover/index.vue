<template>
  <div class="relative" @mouseenter="onMouseenter" @mouseleave="onMouseleave">
    <div>
      <!-- 具名插槽 外框-->
      <slot name="reference"></slot>
    </div>
  </div>
  <!-- 气泡展示 -->
  <transition name="slide">
    <div v-show="isViable" class="absolute p-1 z-20 bg-white border rounded-md">
      <!-- 匿名插槽 弹出层内容-->
      <slot></slot>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

/**popover位置对象
 *  1 指定可选位置
 * 2 prop指定位置
 * 3 获取元素dom 创建读取元素尺寸的方法
 * 4 生成气泡样式对象 用来控制每个位置
 * 5 根据prop 计算样式对象
 */

const isViable = ref(false)


const onMouseenter = () => {
  console.log('鼠标移入');
  isViable.value = true
}
const onMouseleave = () => {
  console.log('鼠标溢出');
  // isViable.value = false
}
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
// 准备进入
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px); //自下而上的动画
}
</style>