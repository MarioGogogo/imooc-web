<template>
  <div class="fixed bottom-10 right-2">
    <!-- 引导页 -->
    <div
      class="
        group
        w-4
        h-4
        mb-1
        bg-white
        dark:bg-zinc-900
        border
        dark:border-0
        border-zinc-200
        rounded-full
        flex
        items-center
        justify-center
        duration-200
        cursor-pointer
        hover:shadow-lg
      "
    >
      <svg-icon
        name="xiaoxizhongxin"
        class="w-2 h-2"
        fillClass="fill-zinc-900 dark:fill-zinc-200 gruop-hover:fill-main"
      ></svg-icon>
    </div>
    <!-- 反馈 -->
    <popover class="flex items-center" placement="top-left">
      <template #reference>
        <div
          class="
            group
            w-4
            h-4
            mb-1
            bg-white
            dark:bg-zinc-900
            border
            dark:border-0
            border-zinc-200
            rounded-full
            flex
            items-center
            justify-center
            duration-200
            cursor-pointer
            hover:shadow-lg
          "
        >
          <svg-icon
            name="xiaoxizhongxin"
            class="w-2 h-2"
            fillClass="fill-zinc-900 dark:fill-zinc-200 gruop-hover:fill-main"
          ></svg-icon>
        </div>
      </template>
      <div class="w-[120px] overflow-hidden">
        <div
          class="
            flex
            items-center
            cursor-pointer
            p-0.5
            rounded
            hover:bg-zinc-100/60
            dark:bg-zinc-800
          "
        >
          <svg-icon
            name="xiaoxizhongxin"
            class="w-2 h-2"
            fillClass="fill-zinc-900  dark:fill-zinc-200 gruop-hover:fill-main"
          ></svg-icon>
          <span class="text-zinc-800 ml-1 dark:text-zinc-300 text-sm"
            >立即吐槽</span
          >
        </div>
      </div>
    </popover>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>