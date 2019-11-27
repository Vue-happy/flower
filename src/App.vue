<template>
  <div>
    <router-view></router-view>
    <Footer v-if="$route.meta.isShowFooterGuide"></Footer>
</div>
</template>

<script>
import Footer from './components/Footer/Footer'
export default {
  name: 'app',
  components:{Footer}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.routerContainer
  position relative
 .router
    // position fixed
    bottom 0
    left 0
    font-size 20px
</style>
