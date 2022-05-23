/**
 * 屏幕宽度是否大于指定宽度 1280
 */
import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '@/constants/index'
import { useWindowSize } from '@vueuse/core'
// 响应式
const { width } = useWindowSize()
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})
