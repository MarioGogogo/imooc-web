import request from '@/utils/request'

// 获取分类列表
export const fetchGetCategory = () => {
  return request({
    url: '/category',
  })
}
