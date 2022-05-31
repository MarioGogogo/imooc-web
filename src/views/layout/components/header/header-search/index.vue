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
        <history @historyClick="onSearchClick"></history>
      </template>
    </search>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import hint from './hint.vue';
import history from './history.vue';
import { useStore } from 'vuex';
const inputValue = ref("")
const store = useStore()

const onSearchClick = (val) => {
  inputValue.value = val
  store.commit("searchState/addHistory", val)
}

</script>

<style lang="scss" scoped>
</style>