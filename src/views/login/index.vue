<template>
 <div class="login-container">
   <el-form class="card-box login-form" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
     <div class="my-logo">
       <img src="../../assets/logo-2.png" alt="">
     </div>
     <h3 class="title">系统登录</h3>
     <el-form-item prop="username">
        <span class="svg-container svg-container_login">
        <!--  <svg-icon icon-class="user" />-->
        </span>
       <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="邮箱" />
     </el-form-item>
     <el-form-item prop="password">
        <span class="svg-container">
        <!--  <svg-icon icon-class="password" />-->
        </span>
       <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
                 placeholder="密码" />
       <span class="show-pwd" @click="showPwd"><!--<svg-icon icon-class="eye" />--></span>
     </el-form-item>
     <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
   </el-form>
 </div>
</template>

<script type="text/ecmascript-6">
  import { isvalidUsername } from '@/utils/validate'
  export default {
  name:'login',
  data(){
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名!'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '1111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }]
      },
      pwdType: 'password',
      loading: false,
      showDialog: false
    }
   },
   created(){
   },
   mounted(){
   },
   computed: {
   },
   methods: {
     showPwd() {
       if (this.pwdType === 'password') {
         this.pwdType = ''
       } else {
         this.pwdType = 'password'
       }
     },
     handleLogin(){
       this.$refs.loginForm.validate(valid =>{
         if(valid){
           this.loading = true
           this.$store.dispatch('LoginByUsername',this.loginForm).then(()=>{
             this.loading = false
             this.$router.push({ path: '/' })
           })
         }
       })
     }
   },
   components:{
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import "src/styles/mixin.scss";
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;
  .login-container {
    @include relative;
    padding:15px;
    height: 100vh;
    background-color: $bg;
    & input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    .my-logo{
      text-align: center;
      position: relative;
      margin-bottom: 10px;
      img{
        border: 3px solid $dark_gray;
        display: inline-block;
        width: 110px;
        height: 110px;
        border-radius: 55px;
        transition: all 0.6s ease-out;
      }
      img:hover{
        transform: scale(1.3);
        margin: 15px 0;
      }
    }

    .title {
      font-size: 18px;
      color: $dark_gray;
      margin: 0px auto 15px auto;
      text-align: center;
      font-weight: normal;
    }
    & input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
    }
  }

</style>
