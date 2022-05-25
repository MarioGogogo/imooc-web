<template>
  <div class="mobile-head bg-white sticky top-0 left-0 z-10">
    <ul class="relative flex overflow-auto p-1 text-xs text-zinc-600">
      <!-- 汉堡按钮 -->
      <li
        class="
          fixed
          top-0
          right-[-1px]
          h-4
          px-1
          flex
          items-center
          bg-white
          z-20
          shadow-l-white
        "
      >
        <svg-icon class="w-1.5 h-1.5" name="cebianlan"></svg-icon>
      </li>
      <li
        class="flex-shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        v-for="item in data"
        :key="item.id"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: true
  }

})
</script>

<style lang="scss" scoped>
</style>