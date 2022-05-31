import request from '@/utils/request'

// 获取壁纸
export const getPexlesList = (data) => {
  return request({
    url: '/pexels',
    params: data,
  })
}
// 获取搜索标签
export const getHintsList = (q) => {
  return request({
    url: '/search',
    params: {
      q,
    },
  })
}

// 热门精选
export const getHotTheme = () => {
  return request({
    url: '/theme',
  })
}
