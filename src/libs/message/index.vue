<template>
  <transition class="down">
    <div
      v-show="isVisable"
      class="
        min-w-[420px]
        fixed
        top-[20px]
        left-[50%]
        translate-x-[-50%]
        z-50
        px-3
        py-1.5
        flex
        items-center
        border
        rounded-sm
        cursor-pointer
      "
      :class="styles[type].containerClass"
    >
      <svg-icon
        :name="styles[type].icon"
        :fillClass="styles[type].fillClass"
        class="w-1.5 h-1.5 mr-1.5"
      ></svg-icon>
      <span class="text-sm" :class="styles[type].textClass">{{ content }}</span>
    </div>
  </transition>
  <div></div>
</template>
<script>

const typeEnum = {
  success: "",
  warn: "",
  error: "",
}
const styles = {
  warn: {
    icon: "warn",
    fillClass: "fill-warn-300",
    textClass: "text-warn-300",
    containerClass: "bg-warn-100 border-warn-200 hover:shadow-lg hover:shadow-warn-100"
  },
  error: {
    icon: "error",
    fillClass: "fill-error-300",
    textClass: "text-error-300",
    containerClass: "bg-error-100 border-error-200 hover:shadow-lg hover:shadow-error-100"
  },
  success: {
    icon: "success",
    fillClass: "fill-success-300",
    textClass: "text-success-300",
    containerClass: "bg-success-100 border-success-200 hover:shadow-lg hover:shadow-success-100"
  }
}
</script>

<script setup>
// 因为通过方法render组件 引用了button 所以要导入
import SvgIcon from '../svg-icon/index.vue';
import { onMounted, ref } from 'vue';
const props = defineProps({
  //  message消息类型
  type: {
    type: String,
    required: true,
    validator (val) {
      const keys = Object.keys(typeEnum)
      const res = keys.includes(val)
      if (!res) {
        throw new Error(`你的type必须是${keys.join(",")}中的一个`)
      }
      return res
    }
  },
  // 描述文本
  content: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 1000
  },
  //关闭 销毁
  destory: {
    type: Function
  }
})

const isVisable = ref(false)


onMounted(() => {
  isVisable.value = true
  setTimeout(() => {
    isVisable.value = false
  }, props.duration)
})



</script>

<style lang="scss" scoped>
// v3.2新增api  动态css绑定状态
.down-enter-active,
.down-leave-active {
  transition: all 0.5s;
}

// 进来前
.down-enter-from,
.down-leave-to {
  opacity: 0;
  transform: translate3d(-50%, -100px, 0);
}
</style>