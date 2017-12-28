<template>
  <section class="app-main" style="min-height: 100%">
    <transition name="fade" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
  name:'AppMain',
  components:{
   },
  data(){
     return{}
   },
   created(){

   },
   mounted(){
   },
   computed: {
     cachedViews(){
       return this.$store.state.app.cachedViews
     }
   },
   methods: {
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
</style>
