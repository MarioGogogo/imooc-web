<template>
  <div
    class="relative"
    ref="waterfalHeightRef"
    :style="{
      height: waterHeight + 'px',
    }"
  >
    <template v-if="columWidth && data.length">
      <div
        v-for="(item, index) in data"
        :key="nodeKey ? item[nodeKey] : index"
        class="waterfall-item absolute duration-300"
        :style="{
          width: columWidth,
          left: item._style?.left + 'px',
          top: item._style?.top + 'px',
        }"
      >
        <slot :item="item" :width="columWidth" :index="index"></slot>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue"

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  nodeKey: {
    type: String
  },
  column: {
    default: 2,
    type: Number
  },
  columnSpacing: {
    type: Number,
    default: 20
  },
  rowSpacing: {
    type: Number,
    default: 20
  },
  picturePreReading: {
    type: Boolean,
    default: true
  }
})


const waterHeight = ref(0)
// 记录每一列的高度
const columnHeightObj = ref({})

// 构建每一列的高度
const calColumnHeightObj = () => {
  columnHeightObj.value = {}
  for (let i = 0; i < props.colunm; i++) {
    columnHeightObj.value[i] = 0
  }
  console.log('%c 🌯 columnHeightObj: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', columnHeightObj);
}

//构建容器宽度
//容器总高度   === 最高那一列高度
const waterfalHeightRef = ref(null)
//不包含  margin pading  border
const waterfalWidth = ref(0)
// 容器左边距
const waterfalLeft = ref(0)
const calWaterfalWidth = () => {
  const { paddingLeft, paddingRight } = getComputedStyle(waterfalHeightRef.value, null)
  // 容器左边距
  waterfalLeft.value = parseFloat(paddingLeft)
  //容器宽度
  waterfalWidth.value = waterfalHeightRef.value.offsetWidth - parseFloat(paddingLeft) - parseFloat(paddingRight)
  console.log('%c 🍸  容器宽度: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', waterfalWidth.value);
}


//! 构建每一列的宽度   (容器宽度 - 所有列宽合计 / 列数)
const columWidth = ref(0)
//列间距的合计
const columnSpacingTotal = computed(() => {
  return (props.column - 1) * props.columnSpacing
})


// 计算列宽  容器宽度 - 列间距的宽度  / 列数
const calColumnWidth = () => {
  //获取容器宽度
  calWaterfalWidth()
  columWidth.value = (waterfalWidth.value - columnSpacingTotal.value) / props.column

}


onMounted(() => {
  calColumnWidth()
  console.log('%c 🍹 计算列宽: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', columWidth.value);
})






</script>

<style lang="scss" scoped>
</style>