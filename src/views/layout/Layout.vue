<template>
 <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
   <sidebar class="sidebar-container" ></sidebar>
   <div class="main-container">
     <navbar></navbar>
     <tags-view></tags-view>
     <app-main></app-main>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">

  import { Sidebar,Navbar,AppMain,TagsView} from 'views/layout/components'
  export default {
  name:'layout',
  data(){
     return{}
   },
   created(){
   },
   mounted(){
   },
   computed: {
     sidebar() {
       return this.$store.state.app.sidebar
     }
   },
   methods: {
   },
   components:{
     TagsView,
     AppMain,
     Navbar,
     Sidebar
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    @include relative;
  }
</style>
