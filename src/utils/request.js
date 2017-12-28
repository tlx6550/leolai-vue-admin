import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURI:process.env.BASE_API,
  timeout:5000
})

service.interceptors.request.use(config=>{
  if(store.getters.token){
/*    alert(store.getters.token)*/
  }
  return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})
export default service
