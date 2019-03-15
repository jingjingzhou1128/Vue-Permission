import request from '@/utils/request'

export function loginUser (params) {
  return request({
    method: 'post',
    url: '/user/login',
    data: params
    // params
  })
}
