<template>
  <div id="footerGuideContainer" >
    <div
      class="guideItem"
      :class="{ active: $route.path === '/home' }"
      @click="goPath('/home')"
    >
      <span>
        <i class="iconfont icon-home"></i>
      </span>
      <span>
        首页
      </span>
    </div>
    <div
      class="guideItem"
      :class="{ active: $route.path === '/sort' }"
      @click="goPath('/sort')"
    >
      <span>
        <i class="iconfont iconfenlei"></i>
      </span>
      <span>
        分类
      </span>
    </div>
    <div
      class="guideItem"
      :class="{ active: $route.path === '/cart' }"
      @click="goPath('/cart')"
    >
      <span>
        <i class="iconfont iconshop"></i>
      </span>
      <span>
        购物车
      </span>
    </div>

    <div
      class="guideItem"
      :class="{ active: $route.path === '/profile' }"
      @click="goPath('/profile')"
    >
      <span>
        <i class="iconfont iconwode"></i>
      </span>
      <span>
        我的
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goPath(path) {
      this.$route.path !== path && this.$router.replace(path);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#footerGuideContainer
  position fixed
  left 0
  bottom 0
  width 100%
  height 50px
  border-top 1px solid #eee
  box-sizing border-box
  display flex
  background #fff
  .guideItem
    width 25%
    height 100%
    text-align center
    display flex
    flex-direction column
    span
      i
        font-size 22px
      &:first-child
        margin 6px 0
    &.active
      color orange
</style>
