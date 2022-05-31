<template>
  <div>
    <div class="flex items-center text-xs mb-1 text-zinc-400">
      <span>最新搜索</span>
      <svg-icon
        name="shanchu"
        class="
          w-2.5
          h-2.5
          ml-1
          p-0.5
          cursor-pointer
          duration-300
          rounded-sm
          hover:bg-zinc-100
        "
        fillClass="fill-zinc-400"
        @click="deleteAllClick"
      ></svg-icon>
    </div>
    <ul class="flex flex-wrap">
      <li
        class="
          mr-2
          mb-1.5
          flex
          items-center
          cursor-pointer
          bg-zinc-100
          px-1.5
          py-0.5
          text-zinc-900 text-sm
          font-bold
          rounded-sm
          duration-200
          hover:bg-zinc-200
        "
        v-for="(item, index) in $store.getters.historys"
        :key="item"
        @click="onItemClick(item)"
      >
        <span>{{ item }}</span>
        <svg-icon
          name="guanbi"
          class="
            w-2.5
            h-2.5
            p-0.5
            ml-1
            duration-300
            rounded-sm
            hover:bg-zinc-100
          "
          @click.stop="onDeleteClick(index)"
        ></svg-icon>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { confirm } from '@/libs'
const store = useStore()
const deleteAllClick = () => {
  confirm('要删除所有历史记录吗？').then(() => {
    console.log('删了confirm');
    store.commit("searchState/deleteAllHistory")
  }).catch(() => {
    console.log('取消confirm');
  })
}
const onDeleteClick = (index) => {
  store.commit("searchState/deleteHistory", index)

}
const emits = defineEmits(["historyClick"])
const onItemClick = (item) => {
  emits("historyClick", item)
}
</script>

<style lang="scss" scoped>
</style>