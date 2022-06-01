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
        <!-- 历史记录 -->
        <history @historyClick="onSearchClick" v-show="!inputValue"></history>
        <!-- 推荐主题 -->
        <hot-theme v-show="!inputValue"></hot-theme>
      </template>
    </search>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import hint from './hint.vue';
import history from './history.vue';
import HotTheme from './theme.vue';
import { useStore } from 'vuex';
const inputValue = ref("")
const store = useStore()

const onSearchClick = (val) => {
  inputValue.value = val
  store.commit("searchState/addHistory", val)
  //改变vuex searchText
  store.commit("appState/changeSearchText", val)
}

</script>

<style lang="scss" scoped>
</style>