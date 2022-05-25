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

/**
 * rem方法
 * 根据用户屏幕宽度计算
 */

export const RemInit = () => {
  const MAX_FONT_SIZE = 40
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    // 计算fontsize
    let fontsize = window.innerWidth / 10
    fontsize = fontsize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontsize
    // 赋值给html
    html.style.fontSize = fontsize + 'px'
  })
}
