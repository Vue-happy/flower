<template>
  <div class="profile">
    <van-nav-bar class="top-nav-bar"
    title="个人中心"
    left-text=""
    left-arrow
    fixed="true"
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
    <div class="main-box">
          <!-- 登录 -->
      <div class="login-box">
        <p>Hi,欢迎来到花礼网</p>
      <van-button type="default" block round to="./login">登录/注册</van-button>
    </div>      

    </div>

    
  </div>
</template>
  
<script type="text/ecmascript-6">
// import Footer from '../components/Footer/Footer'
  export default {
  
  }
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
  .top-nav-bar
    width 100%
    height 44px
    background pink 
    display block
  .main-box
    width 100%
    height 500px
    background-image: url('https://img02.hua.com/m/member/center/backgroundv3.png')
    .login-box
      width 100%
      height 112px
</style>