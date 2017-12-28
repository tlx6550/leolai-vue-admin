<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" rel="stylesheet/scss">
 /* @import '~normalize.css/normalize.css'; // 这样引入会报找不到模块错误*/
/*  @import 'normalize.css';
  @import './styles/index.scss'; // 全局自定义样式*/
</style>
