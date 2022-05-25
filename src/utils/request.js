import axios from 'axios'

// 获取当前环境api
const url = import.meta.env.VITE_BASE_API
console.log(
  '%c 🍞 url: ',
  'font-size:20px;background-color: #42b983;color:#fff;',
  url
)

const service = axios.create({
  baseURL: '/imooc',
  timeout: 5000,
})

export default service
