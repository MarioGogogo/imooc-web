<template>
  <div class="menu py-2 h-[80vh] flex flex-col">
    <!-- 头部 -->
    <h2 class="text-xl text-zinc-900 font-bold mb-2 px-1">所有分类</h2>
    <ul class="overflow-y-scroll">
      <li
        class="
          text-lg text-zinc-900
          px-1
          py-1.5
          duration-200
          active:bg-zinc-100
        "
        v-for="(item, index) in categorys"
        :key="item.id"
        @click="$emit('onItemClick', index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  categorys: {
    type: Array,
    required: true
  }
})
//  注册emits事件
defineEmits(['onItemClick'])

</script>

<style lang="scss" scoped>
</style>