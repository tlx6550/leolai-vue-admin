import { getToken, setToken, removeToken } from '@/utils/auth'
import { loginByUsername,logout,getUserInfo} from '@/api/login'
const user = {
  state:{
    user:'',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },
  mutations:{
    SET_TOKEN:(state,token)=>{
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions:{
    LoginByUsername({commit},userinfo){
      const username = userinfo.username.trim()
      return new Promise((resolve,reject)=>{
        loginByUsername(username,userinfo.password).then(response=>{
           const data = response.data
           commit('SET_TOKEN',data.token)
           setToken(data.token)
           resolve()
         }).catch(error=>{
           reject(error)
         })
      })
    },
    GetUserInfo({ commit, state }){
      return new Promise((resolve,reject)=>{
        getUserInfo(state.token).then(response=>{
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data
          commit('SET_ROLES', data.role)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
  Logout({commit}){
  return new Promise((resolve,reject)=>{
    logout().then(()=>{
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    }).catch(error=>{
      reject(error)
    })
  })
}

}

}
export default user
