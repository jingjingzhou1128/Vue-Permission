const userMap = [
  {
    userName: 'user1',
    password: '123456',
    roles: ['admin'],
    token: 'admin1'
  },
  {
    userName: 'user2',
    password: '123456',
    roles: ['editor'],
    token: 'editor1'
  }
]

export default {
  loginUser: config => {
    let {userName, password} = JSON.parse(config.body)
    // let {userName, password} = JSON.parse(config.data)
    let matchUser = userMap.find(user => {
      if (user.userName === userName && user.password === password) {
        return true
      } else {
        return false
      }
    })
    if (matchUser) {
      return {type: 'success', message: 'Congratulations, the operation is successful!', user: matchUser}
      // return [200, {message: 'Congratulations, the operation is successful!', user: matchUser}]
    } else {
      return {type: 'error', message: 'UserName or Password is error!'}
      // return [500, {message: 'UserName or Password is error!'}]
    }
  },
  getUserInfo: config => {
    let {token} = JSON.parse(config.body)
    let matchUser = userMap.find(user => {
      if (user.token === token) return true
      return false
    })
    if (matchUser) {
      return {type: 'success', message: 'Congratulations, the operation is successful!', user: matchUser}
    } else {
      return {type: 'error', message: 'Get user info is failed!'}
    }
  },
  logout: config => {
    // let {token} = JSON.parse(config.body)
    return {type: 'success', message: 'Congratulations, logout is successful'}
  }
}
