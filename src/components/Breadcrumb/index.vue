<template>
<el-breadcrumb class="app-breadcrumb" separator="/">
  <transition-group name="breadcrumb">
    <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if='item.meta.title' >
      <span v-if='item.redirect==="noredirect" || index==levelList.length-1' class="no-redirect">{{generateTitle(item.meta.title)}}</span>
      <router-link v-else :to="item.redirect || item.path">{{generateTitle(item.meta.title)}}</router-link>
    </el-breadcrumb-item>
  </transition-group>
</el-breadcrumb>
</template>

<script type="text/ecmascript-6">
  import { generateTitle } from '@/utils/i18n'
  export default {
  name:'breadcrumb',
  components:{
   },
  data(){
     return{
       levelList: null
     }
   },
   created(){
    this.getList()
   },
   mounted(){
   },
   computed: {
   },
   methods: {
     generateTitle,
     getList(){
       let matched = this.$route.matched.filter(item => item.name)
       const first = matched[0]
       if(first && first.name!='dashboard'){
         matched = [{ path: '/dashboard', meta: { title: '首页' }}].concat(matched)
       }
       this.levelList = matched
     }
   },
    watch: {
      $route() {
        this.getList()
      }}
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
