<template>
 <el-menu class="navbar" mode="horizontal">
   <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>

   <breadcrumb  class="breadcrumb-container"></breadcrumb>
   <div class="right-menu">
     <el-tooltip effect="dark" content="全屏" placement="bottom">
       <screenfull class="screenfull right-menu-item"></screenfull>
     </el-tooltip>
     <svg-icon :icon-class="iconitem" className="userout" @click.native="logout"></svg-icon>
   </div>
 </el-menu>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import Screenfull from '@/components/Screenfull'
  import Hamburger from '@/components/Hamburger'
  import Breadcrumb from '@/components/Breadcrumb'
  import {browserRedirect} from '@/utils/index'
  export default {
  name:'',
  components:{
    Breadcrumb,
    Hamburger,Screenfull
   },
  data(){
     return{
       iconitem:'user'
     }
   },
   created(){
   },
   mounted(){
     if(browserRedirect()){
       this.sidebar.opened = false
     }
   },
   computed: {
     ...mapGetters([
       'sidebar'
     ])
   },
   methods: {
     toggleSideBar(){
        this.$store.dispatch('toggleSideBar')
     },
     logout(){
       this.$store.dispatch('Logout').then(()=>{
         // 为了安全，退出操作在守卫函数执行
         location.reload()
         this.$router.push('/login')
       });
     }
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
.navbar{
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container{
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
      outline: none;
    }
    .userout{
      position: relative;
      top:-5px;
      margin-right: 20px;
      width: 2rem;
      height:2rem;
      color: #0a76a4;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      margin-top: 15px;
      margin-right: 50px;
      height: 20px;
    }
    .breadcrumb-container{
      float: left;
    }
    .international{
      vertical-align: top;
      .international-icon{
        font-size: 20px;
        cursor: pointer;
        vertical-align: -5px;
      }
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
