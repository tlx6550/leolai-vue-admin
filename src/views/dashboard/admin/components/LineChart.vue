<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script type="text/ecmascript-6">
  import echarts from 'echarts'
  require('echarts/theme/macarons') // echarts 主题
  import { debounce } from '@/utils'
  export default {
  name:'',
  components:{
   },
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      id:{
        type:String,
        default:'macaronsId'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '350px'
      },
      autoResize: {
        type: Boolean,
        default: true
      },
      chartData: {
        type: Object
      }
    },
  data(){
     return{
       chart: null
     }
   },
   created(){
   },
    beforeDestroy(){
      if (!this.chart) {
        return
      }
      if(this.autoResize){
        window.removeEventListener('resize',this.__resizeHanlder)
      }
      const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
      sidebarElm.removeEventListener('transitionend', this.__resizeHanlder)

      this.chart.dispose()
      this.chart = null
    },
   mounted(){
     this.initChart();
     this.resizeHandler()
   },
   computed: {
   },
   methods: {
     setOptions({ expectedData, actualData }){
       this.chart.setOption({
         xAxis: {
           data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
           boundaryGap: false,
           axisTick: {
             show: false
           }
         },
         grid: {
           left: 10,
           right: 10,
           bottom: 20,
           top: 30,
           containLabel: true
         },
         tooltip: {
           trigger: 'axis',
           axisPointer: {
             type: 'cross'
           },
           padding: [5, 10]
         },
         yAxis: {
           axisTick: {
             show: false
           }
         },
         legend: {
           data: ['expected', 'actual']
         },
         series: [{
           name: 'expected', itemStyle: {
             normal: {
               color: '#FF005A',
               lineStyle: {
                 color: '#FF005A',
                 width: 2
               }
             }
           },
           smooth: true,
           type: 'line',
           data: expectedData,
           animationDuration: 2800,
           animationEasing: 'cubicInOut'
         },
           {
             name: 'actual',
             smooth: true,
             type: 'line',
             itemStyle: {
               normal: {
                 color: '#3888fa',
                 lineStyle: {
                   color: '#3888fa',
                   width: 2
                 },
                 areaStyle: {
                   color: '#f3f8ff'
                 }
               }
             },
             data: actualData,
             animationDuration: 2800,
             animationEasing: 'quadraticOut'
           }]
       })
     },
     initChart(){
       this.chart = echarts.init(document.getElementById(this.id),'macarons')
       this.setOptions(this.chartData)
     },
     resizeHandler(){
       if(this.autoResize){
         this.__resizeHanlder = debounce(() => {
           if (this.chart) {
             this.chart.resize()
           }
         }, 100)
       }
       window.addEventListener('resize',this.__resizeHanlder)
       const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
       sidebarElm.addEventListener('transitionend',this.__resizeHanlder)
     }
   },
   watch:{
     chartData:{
       deep:true,
       handler(val){
         this.setOptions(val)
       }
     }
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
</style>
