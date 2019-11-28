<template>
  <div class="profile">
    <!-- 顶部导航bar  start -->
    <van-nav-bar
      class="top-nav-bar"
      title="个人中心"
      left-text=""
      left-arrow
      fixed
      @click-left="onClickLeft"
    />
    <!-- 顶部导航bar  end -->

    <div class="main-box">
      <!-- 登录start -->
      <div class="login-box">
        <p class="text">Hi,欢迎来到花礼网</p>
        <van-button type="default" block round to="./login" class="btn-login"
          >登录/注册</van-button
        >
      </div>
      <!-- 登录end -->

      <!-- 订单页面 start-->
      <div class="panel-top">
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
        <div class="order">
          <div class="order-item">
            <a href="">
              <img
                src="https://img02.hua.com/m/member/center/myinfo_pendingpay.png"
                alt=""
              />
              <p>代付款</p>
            </a>
          </div>
          <div class="order-item">
            <a href="">
              <img
                src="https://img02.hua.com/m/member/center/myinfo_distribution.png"
                alt=""
              />
              <p>今日配送</p>
            </a>
          </div>
          <div class="order-item">
            <a href="">
              <img
                src="https://img02.hua.com/m/member/center/myinfo_evaluation.png"
                alt=""
              />
              <p>待评价</p>
            </a>
          </div>
        </div>

        <!-- order end -->
      </div>
      <!-- 订单页面end -->

      <!-- 信息start -->
      <ul class="pannel-bottom">
        <li class="pannel-bottom-item">
          <a href="">
            <p class="icon iconfont iconyouhuiquan"></p>
            <p class="txt">优惠券</p>
          </a>
        </li>
        <li class="pannel-bottom-item">
          <a href="">
            <p class="icon iconfont iconcardvip"></p>
            <p class="txt">权益卡</p>
          </a>
        </li>
        <li class="pannel-bottom-item">
          <a href="">
            <p class="icon iconfont iconyue"></p>
            <p class="txt">余额</p>
          </a>
        </li>
        <li class="pannel-bottom-item">
          <a href="">
            <p class="icon iconfont iconzuanshi"></p>
            <p class="txt">会员积分</p>
          </a>
        </li>
        <li class="pannel-bottom-item">
          <a href="">
            <p class="icon iconfont icondizhi"></p>
            <p class="txt">收货地址</p>
          </a>
        </li>
        <li class="pannel-bottom-item">
          <a href="">
            <p class="icon iconfont iconnaozhong-copy"></p>
            <p class="txt">生日纪念提醒</p>
          </a>
        </li>
        <li class="pannel-bottom-item">
          <a href="">
            <p class="icon iconfont iconshoucang"></p>
            <p class="txt">我的收藏</p>
          </a>
        </li>
        <li class="pannel-bottom-item">
          <a href="">
            <p class="icon iconfont iconjilu"></p>
            <p class="txt">浏览记录</p>
          </a>
        </li>
        <li class="border"></li>
      </ul>
      <!-- 信息end -->

      <!-- 微信管家start -->
      <div class="pannel-wx-gj">
        <div class="wx-gj-tilte">
          <div class="wx-gj-left">
            <img src="https://img02.hua.com/m/images/wxguanjia-kf.png" alt="">
            <p>专属秘书|喜爱</p>
          </div>
          <div class="wx-gj-right">
            <van-button color="#FF734C" block class="button">加我微信</van-button>
            <!-- <van-overlay :show="show" @click="show = false">
              <div class="wrapper" @click.stop>

                <div class="block" />
              </div>
            </van-overlay> -->
          </div>
        </div>
        <div class="dlog">
          Hi，我是您的专属秘书喜棠，添加我微信
          <span>huacom01</span>
          ，我将帮您催单，有需求时，1对1帮您走绿色通道。
        </div>
      </div>
      <!-- 微信管家end -->
      <ul class="pannel-bottom2">
        <li class="pannel-bottom-item">
          <a href="">
            <p class="icon iconfont iconservice"></p>
            <p class="txt">联系客服</p>
          </a>
        </li>
        <li class="pannel-bottom-item">
          <a href="">
            <p class="icon iconfont iconbangzhuzhongxin"></p>
            <p class="txt">帮助中心</p>
          </a>
        </li>
        <li class="pannel-bottom-item">
          <a href="">
            <p class="icon iconfont iconxinxi"></p>
            <p class="txt">关于花礼</p>
          </a>
        </li>
        <li class="pannel-bottom-item">
          <a href="">
            <p class="icon iconfont iconshezhi"></p>
            <p class="txt">设置</p>
          </a>
        </li>
      </ul>

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
.profile
  .top-nav-bar
    width 100%
    height 44px
    background #fff
    display block
  .main-box
    position absolute
    top 44px
    width 100%
    // height 500px
    
    .login-box
      background-image: url('https://img02.hua.com/m/member/center/backgroundv3.png')
      width 100%
      height 112px
      // 
      // background red
      display block
      text-align center
      color #fff
      p
        line-height 70px
        font-size 14px
      .btn-login
        width 126px
        height 36px
        line-height 36px
        margin 0 auto
        margin-top -20px
    .panel-top
      margin 0 auto
      width 360px
      height 117px
      position relative
      .pannel-tilte
        box-sizing border-box
        padding  0 10px
        display flex
        justify-content space-between
        align-items center
        width 360px
        height 44px
        background #fff
        border-bottom 1px solid #eee

      .order
        width 360px
        height 73px
        background #fff
        position absolute
        display flex
        justify-content space-around
        .order-item
          text-align center
          box-sizing border-box
          // border-radius 5px
          padding 10px 0
          img
            width 32px
            height 32px
          p
            margin-top 0px
    .pannel-bottom
      width 360px
      height 180px
      background #ffffff
      margin 10px auto 0
      position relative

      .pannel-bottom-item
        // background pink
        text-align center
        width 90px
        height 90px
        float left
        a
          display flex
          flex-direction column
          justify-content space-around
          margin-top 30px
          line-height 20px  
          .icon
            font-size 20px
          .txt
            font-size 15px
      .border
        position absolute
        top 50%
        width 360px
        height 1px
        background #ddd
    .pannel-wx-gj
      width 360px
      height 111px
      margin 5px auto 0
      background #fff
      .wx-gj-tilte
        width 345px
        height 32px
        // margin 0 auto
        display flex
        justify-content space-between
        .wx-gj-left
          display flex
          justify-content space-between
          p
            line-height 0px
            margin-left 10px
          img
            width 32px
            height 32px
            border-radius 50%
            // margin-left -30px
        .wx-gj-right
          .button
            margin-right 0px
            padding 0 10px
            width 110px
            height 30px
            line-height 30px
          .wrapper
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width 100px
            height 100px
            background blue


          .block
            width: 120px;
            height: 120px;
            background-color: #fff;
      .dlog
        height 36px
        width 327px
        padding 14px
        border 2px solid #eee
        // background yellow
        margin 2px
        font-size 12px
    .pannel-bottom2
      margin 0 auto
      width 360px
      height 90px
      background #fff
      display flex
      .pannel-bottom-item
        width 90px
        height 90px
        text-align center



</style>
