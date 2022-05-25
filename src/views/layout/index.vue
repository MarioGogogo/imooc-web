<template>
  <div class="h-screen">
    <header-vue class="h-header"></header-vue>
    <main-vue class="h-main"></main-vue>
    <floating></floating>
  </div>
</template>

<script setup>
import HeaderVue from './components/header/index.vue';
import MainVue from './components/main.vue';
import Floating from './components/floating.vue';

</script>

<style lang="scss" scoped>
</style>