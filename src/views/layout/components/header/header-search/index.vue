<template>
  <div>
    <search v-model="inputValue">
      <template #dropdown>
        <div>下拉组件</div>
      </template>
    </search>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const inputValue = ref("")



</script>

<style lang="scss" scoped>
</style>