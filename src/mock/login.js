const userMap = {
  admin:{
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  }
}
export default {
  loginByUsername:config=>{
    const {username} = JSON.parse(config.body);
    return userMap[username];
  },
  getUserInfo:config=>{
    const {token} = JSON.parse(config.body);
   // console.log( userMap[{token}.token] )
    if(userMap[token]){
      return userMap[token]
    }else{
      return false;
    }

  },
  logout:()=>{
    'suceess'
  }
}
