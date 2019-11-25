<template>
  <div class="footerNavBox">
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" class="footerNav">
      <van-tabbar-item  icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="freinds-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
// import Vue from "vue";
// import { Tabbar, TabbarItem } from "vant";

// Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footerNavBox 
  width 375px
  height 49px
  background pink
  .footerNav
    display flex
    justify-content space-around
    align-items center
    margin 0 auto 
</style>
