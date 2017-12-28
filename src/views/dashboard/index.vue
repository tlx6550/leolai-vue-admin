<template>
 <div class="dashboard-container">
   <component :is="currentRole"></component>
 </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import admin from './admin'
  export default {
  name:'dashboard',
  components:{
    admin
   },
  data(){
     return{
       currentRole:'admin'
     }
   },
   created(){
   },
   mounted(){
   },
   computed: {
     raddom(){
       return this.$route.path
     }
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
</style>
