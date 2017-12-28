import {asyncRouterMap,constantRouterMap} from '@/router'

function hasPermission(router,roles) {
  if(router.meta && router.meta.role) {
    return roles.some((role)=>{
      router.meta.role.indexOf(role) >=0
    })
  }else{
    return true
  }
}
function filterAsyncRouters(asyncRouterMap,roles) {
  const accessedRouters = filterAsyncRouters.filter(router =>{
    if(hasPermission(router,roles)){
      if(router.children && router.children.length){
        router.children = filterAsyncRouters(router.children,roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}
const permission = {
  state:{
    routers:'constantRouterMap',
    addRouters:[]
  },
  mutations:{

    SET_ROUTERS: (state, accessedRouters) => {
      state.addRouters = accessedRouters
      state.routers = constantRouterMap.concat(accessedRouters)
    }
  },
  actions:{
    GenerateRoutes({commit},data){
      // const { roles } = data
      return new Promise(resolve=>{
        const { roles } = data
        let accessedRouters
        if(roles.indexOf('admin') >=0 ){
          accessedRouters = asyncRouterMap
        }else{
          accessedRouters = filterAsyncRouters
        }
        commit('SET_ROUTERS',accessedRouters)
        resolve()
      })
    }
  }
}
export default permission
