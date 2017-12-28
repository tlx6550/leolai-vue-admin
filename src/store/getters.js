const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters,
  permission_routers: state => state.permission.addRouters,
  cachedViews: state => state.app.cachedViews,
  visitedViews:state => state.app.visitedViews
}
export default getters
