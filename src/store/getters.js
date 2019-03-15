const getters = {
  userInfo: state => state.user.userInfo,
  token: state => state.user.token,
  addRouters: state => state.permission.addRouters,
  permission_routers: state => state.permission.routers
}

export default getters
