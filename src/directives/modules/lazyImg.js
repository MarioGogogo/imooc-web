import { useIntersectionObserver } from '@vueuse/core'

export default {
  //图片赖加载 用户无法看到图片 不加载图片
  mounted(el) {
    const imgSrc = el.src
    el.src = '' //todo:可以设置占位符
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        console.log('指令', el)
        //加载图片
        el.src = imgSrc
        // 停止监听
        stop()
      }
    })
  },
}
