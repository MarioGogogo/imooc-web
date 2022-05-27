<template>
  <div class="relative" @mouseenter="onMouseenter" @mouseleave="onMouseleave">
    <div ref="referenceRef">
      <!-- 具名插槽 外框-->
      <slot name="reference"></slot>
    </div>
    <!-- 气泡展示 -->
    <transition name="slide">
      <div
        ref="contentRef"
        v-show="isViable"
        class="absolute p-1 z-20 bg-white border rounded-md"
        :style="popoverStyle"
      >
        <!-- 匿名插槽 弹出层内容-->
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
//popover位置信息
const direction = ["top-left", "top-right", "bottom-left", "bottom-right"]
</script>


<script setup>
import { nextTick, ref, watch } from "vue";

/**popover位置对象
 *  1 指定可选位置
 * 2 prop指定位置
 * 3 获取元素dom 创建读取元素尺寸的方法
 * 4 生成气泡样式对象 用来控制每个位置
 * 5 根据prop 计算样式对象
 */

const props = defineProps({
  placement: {
    type: String,
    default: "bottom-right",
    validator (val) {
      const res = direction.includes(val)
      if (!res) {
        throw new Error(`你的placement必须是${direction.join(",")}中的一个`)
      }
      return res
    }
  },
})

const isViable = ref(false)


const onMouseenter = () => {
  console.log('鼠标移入');
  isViable.value = true
}
const onMouseleave = () => {
  console.log('鼠标溢出');
  isViable.value = false
}

//计算元素位置
// 初始ref
const referenceRef = ref(null)
const contentRef = ref(null)


const calElementSize = (target) => {
  if (!target) return {}
  console.log('calElementSize', target.value.offsetWidth);
  return { width: target.value.offsetWidth, height: target.value.offsetHeight }
}

// 生成对应气泡样式
const popoverStyle = ref({
  top: 0,
  left: 0
})

/** 如何计算位置
 *  1. 气泡出现的时候再去计算
 */
watch(isViable, (val) => {
  if (!val) return
  console.log('val', val);
  // 下次dom更新才能拿到dom值
  nextTick(() => {
    console.log('nextTick后拿', calElementSize(contentRef));
    console.log('nextTick后拿', calElementSize(referenceRef));
    switch (props.placement) {
      case "top-left":
        popoverStyle.value.top = 0
        popoverStyle.value.left = -calElementSize(contentRef).width + 'px'
        break;
      case "top-right":
        popoverStyle.value.top = 0
        popoverStyle.value.left = calElementSize(referenceRef).width + 'px'
        break;
      case "bottom-left":
        popoverStyle.value.top = calElementSize(referenceRef).height + 'px'
        popoverStyle.value.left = -calElementSize(contentRef).width + 'px'
        break;
      case "bottom-right":
        popoverStyle.value.top = calElementSize(referenceRef).width + 'px'
        popoverStyle.value.left = calElementSize(referenceRef).height + 'px'
        break;
    }
  })

})


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