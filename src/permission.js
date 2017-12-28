import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@/utils/auth' // 验权
import { Message } from 'element-ui'

function hasPermission(roles,permisionrolse) {
   if(roles.indexOf('admin') >=0 ) return true
   if(!permisionrolse) return true
   return roles.some((role)=>{
      permisionrolse.indexOf(role) >=0
  })
}

const whiteList = ['/login', '/authredirect']
router.beforeEach((to, from, next) => {
  NProgress.start()
  const token = getToken()
  if(token){
    if(to.path === '/login'){
      next({ path: '/' })
    }else{
      if(store.getters.roles.length === 0){
        store.dispatch('GetUserInfo').then((res)=>{
          const roles = res.data.role
          store.dispatch('GenerateRoutes',{ roles }).then(()=>{
            // 这里只是根据角色添加路由
            router.addRoutes(store.getters.addRouters)
            // 执行next解决resolve
            next({ ...to })
          })
        }).catch(() => {
          console.log('erro')
        })
      }else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles,to.meta.role)) {
          // 一定要执行next解决钩子resolve
          next()//
        } else {
          next({ path: '/401', query: { noGoBack: true }})
          NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
        }
        // 可删 ↑
      }
    }
  }else{
    if(whiteList.indexOf(to.path) !==-1){
      next()
    }else {
      next('/login')
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  NProgress.done() // 结束Progress
})
