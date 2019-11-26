<template>
  <div class="profile">
    <!-- 顶部导航bar  start -->
    <van-nav-bar class="top-nav-bar"
    title="个人中心"
    left-text=""
    left-arrow
    fixed="true"
    @click-left="onClickLeft"
    />
    <!-- 顶部导航bar  end -->

    <div class="main-box">
      <!-- 登录start -->
      <div class="login-box">
          <p class="text">Hi,欢迎来到花礼网</p>
          <van-button type="default" block round to="./login" class="btn-login">登录/注册</van-button>
      </div> 
      <!-- 登录end --> 
          
      <!-- 订单页面 start-->
      <div class="panel">
        <!-- title start-->
        <div class="pannel-tilte">
          <div>
            <span>我的订单</span>
          </div>  
          <div>
            <a href=""><span>我的订单></span></a>
          </div>
        </div>
        <!-- title end-->
        <!-- order start -->
        <van-tabbar v-model="active" class="order">
          <van-tabbar-item icon="home-o">代付款</van-tabbar-item>
          <van-tabbar-item icon="search" dot>今日配送</van-tabbar-item>
          <van-tabbar-item icon="friends-o" info="5">待评价</van-tabbar-item>
        </van-tabbar>
        <!-- order end -->
      </div>
        <!-- 订单页面end -->
    </div>
      

  </div>
</template>
  
<script type="text/ecmascript-6">
// import Footer from '../components/Footer/Footer'
export default {
  data() {
    return {
      
    }
  },
  methods: {
    onClickLeft() {

    },
    onClickRight() {

    }
  }
}
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
  .top-nav-bar
    width 100%
    height 44px
    background pink 
    display block
  .main-box
    position absolute
    top 44px
    width 100%
    height 500px
    background-image: url('https://img02.hua.com/m/member/center/backgroundv3.png')
    .login-box
      width 100%
      height 112px
      background red
      display block
      text-align center
      color #fff
      .btn-login
        width 126px
        height 36px
        margin 0 auto
    .panel
      margin 0 auto
      width 359px
      height 117px
      background yellow
      position relative
      .pannel-tilte
        box-sizing border-box
        padding  0 10px
        display flex
        justify-content space-between
        align-items center
        width 359px
        height 44px 
      .order
        width 359px
        height 73px
        // background red
        position absolute

</style>