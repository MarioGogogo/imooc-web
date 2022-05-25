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

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default service
