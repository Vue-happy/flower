<template>
  <div>
    <router-view></router-view>
    <FirstPage/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FirstPage from './pages/FirstPage/FirstPage'
  export default {
    components:{
      FirstPage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
