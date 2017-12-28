<template>
  <scroll-bar>
    <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>
<script>
  import SidebarItem from './SidebarItem'
  import ScrollBar from '@/components/ScrollBar'
  import { mapGetters } from 'vuex'
  export default {
    components:{SidebarItem,ScrollBar},
    data() {
      return {

      };
    },
    computed:{
      ...mapGetters([
        'permission_routers',
      ]),
      isCollapse() {
        // 这里一定要取反，否则子菜单展开有问题
        return !this.$store.state.app.sidebar.opened
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
</style>
