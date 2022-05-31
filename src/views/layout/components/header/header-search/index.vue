<template>
  <div>
    <search v-model="inputValue">
      <template #dropdown>
        <!-- 搜索提示 -->
        <div>
          <hint
            :searchText="inputValue"
            v-show="inputValue"
            @hintClick="onSearchClick"
          />
        </div>
      </template>
    </search>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import hint from './hint.vue';
const inputValue = ref("")

const onSearchClick = (val) => {
  inputValue.value = val
  console.log('搜索', val);
}

</script>

<style lang="scss" scoped>
</style>