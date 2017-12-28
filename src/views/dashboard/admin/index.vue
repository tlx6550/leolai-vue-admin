<template>
 <div class="dashboard-editor-container">
   <span>其它组件示意{{raddom}}</span>
   <panel-group  @handleSetLineChartData="handleSetLineChartData"></panel-group>
   <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
     <line-chart :chart-data="lineChartData"></line-chart>
   </el-row>
 </div>
</template>

<script type="text/ecmascript-6">
  import PanelGroup from './components/PanelGroup'
  import LineChart from './components/LineChart'
  const lineChartData = {
    newVisitis: {
      expectedData: [100, 120, 161, 134, 105, 160, 165],
      actualData: [120, 82, 91, 154, 162, 140, 145]
    },
    messages: {
      expectedData: [200, 192, 120, 144, 160, 130, 140],
      actualData: [180, 160, 151, 106, 145, 150, 130]
    },
    purchases: {
      expectedData: [80, 100, 121, 104, 105, 90, 100],
      actualData: [120, 90, 100, 138, 142, 130, 130]
    },
    shoppings: {
      expectedData: [130, 140, 141, 142, 145, 150, 160],
      actualData: [120, 82, 91, 154, 162, 140, 130]
    }
  }
  export default {
  name:'',
  components:{
    LineChart,
    PanelGroup
   },
  data(){
     return{
       lineChartData: lineChartData.newVisitis
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
   },
   methods: {
     handleSetLineChartData(type) {
       console.log(type)
       this.lineChartData = lineChartData[type]
     }
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }
</style>
