import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import { RemInit } from '@/utils/flexible'
import Libs from '@/libs'
import store from './store'
//rem初始化
RemInit()
createApp(App).use(router).use(store).use(Libs).mount('#app')
