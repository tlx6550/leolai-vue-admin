import Mock from 'mockjs'
import loginAPI from './login'
import articleAPI from './article'

Mock.mock(/\login\/login/,'post',loginAPI.loginByUsername)
Mock.mock(/\login\/logout/,'post',loginAPI.logout)
Mock.mock(/\user\/info\.*/,'post', loginAPI.getUserInfo)


Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
Mock.mock(/\/article\/create/, 'post', articleAPI.createArticle)
Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
Mock.mock(/\/article\/update/, 'post', articleAPI.updateArticle)
export default Mock

