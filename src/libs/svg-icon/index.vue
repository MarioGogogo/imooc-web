<template>
  <svg aria-hidden="true">
    <use :xlink:href="iconName" :class="fillClass" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  },
  fillClass: {
    type: String
  }
})

//显示iocn图标名
const iconName = computed(() => `#icon-${props.name}`)


</script>

<style scoped>
</style>