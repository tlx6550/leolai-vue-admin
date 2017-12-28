<template>
 <div class="components-container" style="height: 100vh">
   <div class="chart-container">
     <chart height='100%' width='100%'></chart>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import Chart from '@/components/Charts/lineMarker'
  export default {
  name:'lineChart',
  components:{
    Chart
   },
  data(){
     return{}
   },
   created(){
   },
   mounted(){
   },
   computed: {
   },
   methods: {
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .chart-container{
    position: relative;
    width: 100%;
    height: 80%;
  }
</style>
