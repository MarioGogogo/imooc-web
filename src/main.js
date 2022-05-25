import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import { RemInit } from '@/utils/flexible'
//rem初始化
RemInit()
createApp(App).use(router).mount('#app')
