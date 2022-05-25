import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': join(__dirname, '/src'),
    },
  },
  //代理配置
  server: {
    proxy: {
      '/imooc': {
        target: 'http://yapi.52react.cn/mock/24/',
        changeOrigin: true, //是否跨域
      },
    },
  },
})
