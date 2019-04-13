import request from '@/utils/request'

export function loginUser (params) {
  return request({
    method: 'post',
    url: '/user/login',
    data: params
    // params
  })
}

export function getUserInfo (params) {
  return request({
    method: 'get',
    url: '/user/info',
    data: params
  })
}

export function logout (token) {
  return request({
    method: 'post',
    url: '/user/logout',
    data: {token}
  })
}
