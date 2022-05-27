<template>
  <button
    class="
      text-sm text-center
      rounded
      duration-150
      flex
      justify-center
      items-center
    "
    :class="[
      typeEnum[type],
      sizeEnum[sizeKey].button,
      { 'active:scale-105': isActiveAnim },
    ]"
    @click.stop="onBtnClick"
  >
    <!-- loading -->
    <svg-icon
      v-if="loading"
      name="loading"
      class="w-2 h-2 animate-spin mr-1"
    ></svg-icon>
    <!-- icon按钮 -->
    <svg-icon
      v-if="icon"
      :name="icon"
      class="m-auto"
      :class="sizeEnum[sizeKey].icon"
      :color="iconColor"
      :fillClass="iconClass"
    ></svg-icon>
    <!-- 文字按钮 -->
    <slot v-else />
  </button>
</template>

<script>
const typeEnum = {
  "primary": "text-white bg-zinc-800 hover:bg-zinc-900 active:bg-zinc-800 dark:bg-zinc-900 dark:hover-zinc-700 dark:active:bg-zinc-700",
  "main": "text-white bg-main hover:bg-hover-main active:bg-main dark:bg-zinc-900 dark:hover-zinc-700 dark:active:bg-zinc-700",
  "info": "text-zinc-800 bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-200 dark:text-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700"
}
const sizeEnum = {
  "default": {
    button: "w-8 h-4 text-base",
    icon: ""
  },
  "icon-default": {
    button: "w-4 h-4",
    icon: "w-1.5 h-1.5"
  },
  "small": {
    button: "w-7 h-3 text-base",
    icon: ""
  },
  "icon-small": {
    button: "w-3,h-3",
    icon: "w-1.5 h-1.5"
  }
}
</script>

<script setup>
import { computed } from 'vue';
// type风格  size大小 props参数 iconbutoon textbutoon
const props = defineProps({
  icon: String,
  iconColor: String,
  iconClass: String,
  type: {
    type: String,
    default: "main",
    validator (val) {
      const keys = Object.keys(typeEnum)
      const res = keys.includes(val)
      if (!res) {
        throw new Error(`你的type必须是${keys.join(",")}中的一个`)
      }
      return res
    }
  },
  size: {
    type: String,
    default: "default",
    validator (val) {
      const keys = Object.keys(sizeEnum).filter(key => !key.includes("icon"))
      const res = keys.includes(val)
      if (!res) {
        throw new Error(`你的size必须是${keys.join(",")}中的一个`)
      }
      return res
    }
  },
  isActiveAnim: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  },
})


//根据size判断
const sizeKey = computed(() => {
  return props.icon ? "icon-default" : "default"
})
// const emits = defineEmits(["click"])
// 按钮点击事件
// const onBtnClick = () => {
//   if (props.loading) return
//   emits("click")
// }

</script>

<style lang="scss" scoped>
</style>