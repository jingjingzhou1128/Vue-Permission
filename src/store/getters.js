const getters = {
  userInfo: state => state.user.userInfo,
  roles: state => state.user.roles,
  token: state => state.user.token,
  addRouters: state => state.permission.addRouters,
  permission_routers: state => state.permission.routers,
  language: state => state.app.language,
  theme: state => state.app.theme,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  tags: state => state.tagsView.tags
}

export default getters
