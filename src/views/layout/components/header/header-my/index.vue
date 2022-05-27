<template>
  <popover>
    <template #reference>
      <!-- 具名插槽 外框-->
      <div
        class="
          w-4
          h-4
          p-0.5
          cursor-pointer
          rounded-sm
          duration-200
          outline-none
          hover:bg-zinc-100/60
          relative
        "
      >
        <img
          class="w-full h-full rounded-sm"
          src="@/assets/images/avator.jpg"
          alt=""
          srcset=""
        />
        <!-- vip会员图标 -->
        <svg-icon
          name="VIP"
          class="absolute w-2 h-2 right-[0px] bottom-0"
          fillClass="fill-zinc-900"
        ></svg-icon>
      </div>
      <!-- <svg-icon
        name="renzhengyonghu"
        class="
          w-4
          h-4
          p-1
          cursor-pointer
          rounded-sm
          duration-200
          outline-none
          hover:bg-zinc-100/60
        "
        fillClass="fill-zinc-900"
      ></svg-icon> -->
    </template>
    <!-- 匿名插槽 弹出层内容-->
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100"
        v-for="item in themeList"
        :key="item.id"
      >
        <svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900"
        ></svg-icon>
        <span class="text-sm text-zinc-800">{{ item.name }}</span>
      </div>
    </div>
  </popover>
</template>

<script setup>
const themeList = [
  { id: 0, name: "个人资料", icon: "geren2" },
  { id: 1, name: "升级VIP", icon: "vip1" },
  { id: 2, name: "退出登录", icon: "tuichu" }
]
</script>

<style lang="scss" scoped>
</style>