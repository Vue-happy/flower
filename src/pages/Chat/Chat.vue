<template>
  <div>
    <div class="header">
      <div class="header-left">
        <i class="iconfont iconsousuo"></i>
      </div>
      <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt="">
      <div class="header-right">
        <i class="iconfont iconerji" @click="show = true"></i>
      </div>
    </div>
    <van-overlay :show="show">
      <div class="wrapper">
        <div class="block">
          <div class="header">
            <div class="header-title">
              <span>小洋</span>
              <div class="header-right">
                <i class="iconfont iconxiangxia"></i>
                <span @click="show = false">关闭</span>
              </div>
            </div>
          </div>
          <div class="chatContainer">
            <img v-show="isImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574848816328&di=1f1762bc5a80133aed1e2ef0a3ae095e&imgtype=0&src=http%3A%2F%2Fcdn2.ettoday.net%2Fimages%2F1526%2Fd1526867.jpg" alt="" style="width:375px;height:200px;position:absolute;left:0;bottom:-10px">
            <div class="container" style="position:relative">
              <ul>
                <li class="chatItem">
                  <img src="https://s3-qcloud.meiqia.com/pics.meiqia.bucket/avatars/20180620/a77b2b26e4d2e2b96587fe9e02d164e9.jpg" alt="">
                  <div class="title">
                    客服中心电话:400-889-8188<br>
                    微信:huacom02
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="footer-left">
            <i class="iconfont iconxiaolian" @click="isImg = !isImg"></i>
            <i class="iconfont iconRectangleCopy"></i>
            <i class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></i>
          </div>
          <input type="text" placeholder="请输入"/>
          <span>发送</span>
        </div>
      </div>
    </van-overlay>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import {Overlay} from 'vant'
  Vue.use(Overlay)
  export default {
    data() {
      return {
        show: false,
        isImg:false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 48px
    background #435448
    display flex
    justify-content space-between
    .header-left
      width 48px
      height 48px
      line-height 48px
      .iconfont
        font-size 24px
        color #ffffff
        margin-left 10px
    img
      width 150px
      height 20px
      margin-top 14px
      margin-right 10px
    .header-right  
      width 48px
      height 48px
      line-height 48px
      .iconfont
        font-size 24px
        color #ffffff
        margin-left 12px
  .wrapper
    display flex
    align-items center
    justify-content center
    height 100%
    position relative
    .block 
      width 100%
      height calc(100vh - 100px)
      background-color #fff
      .header
        width 100%
        height 60px
        background-color #ff6600
        .header-title
          width 100%
          height 100%
          padding 10px
          box-sizing border-box
          display flex
          span
            width 268px
            height 40px
            line-height 40px
            font-size 14px
          .header-right
            width 88px
            height 40px
            line-height 40px
            text-align center
            box-sizing border-box 
            i
              font-size 20px
      .chatContainer
        width 100%
        height 510px
        .container
          width 100%
          height 497px
          padding 14px
          box-sizing border-box
          .chatItem
            width 347px
            height 72px
            margin 0px 0px 20px
            padding 0px 10px 0px 0px
            display flex
            img
              width 36px
              height 36px
              margin 16px 10px 0 0
            .title
              width 180px
              height 54px
              margin-top 10px
              padding 14px 8px
              box-sizing border-box
              border 1px solid #eeeeee
              border-radius 5px

    .footer
      width 375px
      height 50px
      position absolute
      left 0
      bottom 0
      display flex
      justify-content space-between
      background-color #ffffff
      .footer-left
        width 78px
        height 40px
        line-height 34px
        text-align center
        padding 10px
        box-sizing border-box
        i
          font-size 20px
          padding-right 4px
      input
        width 230px
        height 36px
        margin-top 8px 
        font-size 14px
        border 1px solid #eee
        border-radius 6px
      span
        font-size 14px
        padding 18px 10px 0 0
</style>
