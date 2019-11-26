<template>
  <div>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'
export default {
  name: 'app',
  components:{Footer}
}
</script lang="stylus" rel="stylesheet/stylus">

<style>

</style>
