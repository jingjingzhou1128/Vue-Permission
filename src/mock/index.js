import Mock from 'mockjs'
// import MockAdapter from 'axios-mock-adapter'

// import service from '@/utils/request'

import userApi from './modules/user'

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function () {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

// let Mock = new MockAdapter(service)

// user
// user login
Mock.mock(/\/user\/login/, 'post', userApi.loginUser)
// Mock.onPost(/\/user\/login/).reply(userApi.loginUser)
// get user info
Mock.mock(/\/user\/info\.*/, 'get', userApi.getUserInfo)

export default Mock
