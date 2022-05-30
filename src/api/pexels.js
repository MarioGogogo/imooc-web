import request from '@/utils/request'

export const getPexlesList = (data) => {
  return request({
    url: '/pexels',
    params: data,
  })
}