import {getToken, setToken} from '@/utils/auth'
// , setToken, removeToken
import {loginUser, getUserInfo} from '@/api/user'

const user = {
  state: {
    token: getToken(),
    userInfo: {
      userName: '',
      roles: []
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = {
        userName: userInfo.userName,
        roles: userInfo.roles
      }
    }
  },
  actions: {
    LoginUser ({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        loginUser(userInfo).then(response => {
          let data = response.data
          if (data && data.user) {
            commit('SET_TOKEN', data.user.token)
            commit('SET_USERINFO', {userName: data.userName, roles: data.userName})
            setToken(data.user.token)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetUserInfo ({commit}) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.userInfo.userName).then(response => {
          let data = response.data
          
        })
      })
    }
  }
}

export default user
