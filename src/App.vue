<template>
  <div class="router">
      <router-link to="/home">首页</router-link>
      <router-link to="/sort">分类</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/profile">我的</router-link>
      <router-link to="/login">登陆</router-link>
      <router-view></router-view>
  </div>


  

</template>

<script>


export default {
  name: 'app',
}
</script>

<style lang="stylus" scoped>
.routerContainer
  position relative
 .router
    // position fixed
    bottom 0
    left 0
    font-size 20px
</style>
