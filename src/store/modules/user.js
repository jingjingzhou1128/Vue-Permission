import {getToken, setToken, removeToken} from '@/utils/auth'
// , setToken, removeToken
import {loginUser, getUserInfo, logout} from '@/api/user'

const user = {
  state: {
    token: getToken(),
    userInfo: {
      userName: ''
    },
    roles: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = {
        userName: userInfo.userName
      }
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // 用户登录
    LoginUser ({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        loginUser(userInfo).then(response => {
          let data = response.data
          if (data && data.user) {
            commit('SET_TOKEN', data.user.token)
            commit('SET_USERINFO', {userName: data.user.userName})
            commit('SET_ROLES', data.user.roles)
            setToken(data.user.token)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetUserInfo ({commit, state}) {
      return new Promise((resolve, reject) => {
        getUserInfo({token: state.token}).then(response => {
          let data = response.data
          if (data) {
            commit('SET_USERINFO', {userName: data.user.userName})
            commit('SET_ROLES', data.user.roles)
          }
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 用户登出
    LogOut ({commit, state}) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(response => {
          commit('SET_USERINFO', {})
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
