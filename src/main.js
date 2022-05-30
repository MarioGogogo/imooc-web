import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import { RemInit } from '@/utils/flexible'
import Libs from '@/libs'
import store from './store'
import themeInit from './utils/theme'
import Direct from '@/directives'
//rem初始化
RemInit()
//网站主题颜色 初始化
themeInit()
createApp(App).use(router).use(store).use(Libs).use(Direct).mount('#app')
