import request from '@/utils/request'

export const getPexlesList = (data) => {
  return request({
    url: '/pexels',
    params: data,
  })
}

export const getHintsList = (q) => {
  return request({
    url: '/search',
    params: {
      q,
    },
  })
}
