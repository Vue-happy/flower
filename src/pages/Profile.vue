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
        <van-grid>
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
        </van-grid>
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
</style>