// 全局注册组件

import SvgIcon from './svg-icon/index.vue'
import Popup from './popup/index.vue'
import { defineAsyncComponent } from 'vue'
export { confirm } from './confirm/index.js'

export default {
  install(app) {
    // app.component('svg-icon', SvgIcon)
    // app.component('popup', Popup)
    //获取当前路径下所有index.vue
    const components = import.meta.glob('./*/index.vue')
    // 遍历组件模块
    for (const [fullpath, fn] of Object.entries(components)) {
      const componentName = fullpath.split('/')[1]
      console.log('全自动导入名', componentName)
      // 利用app。component导入
      app.component(componentName, defineAsyncComponent(fn))
    }
  },
}
