<template>
  <div id="firstpageContainer">

    <div class="firstScroll">
      <div class="header">
        <div class="header-left">
          <i class="iconfont iconsousuo"></i>
        </div>
        <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt="">
        <div class="header-right">
          <i class="iconfont iconerji"></i>
        </div>
      </div>

      <div class="center">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://img02.hua.com/slider/19_thanksday_m.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://img02.hua.com/slider/18_youflower_m.jpg?830" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://img02.hua.com/slider/18_birthday_m.jpg?830" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://img02.hua.com/slider/19_banner_sheshou_m.jpg" alt="">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        
      </div>

      <div class="yesInfo">
        <div class="company">
          <i class="iconfont iconduihao2"></i>
          <span>认证龙头企业</span>
        </div>
        <div class="company">
          <i class="iconfont iconduihao2"></i>
          <span>14年品牌</span>
        </div>
        <div class="company">
          <i class="iconfont iconduihao2"></i>
          <span>3小时送花</span>
        </div>
        <div class="company">
          <i class="iconfont iconduihao2"></i>
          <span>最近341517条评论</span>
        </div>
      </div>

      <div class="nav">
        <div class="navItem">
          <img src="https://img02.hua.com/m/home/img/m_home_category_flower.png" alt="">
          <p>鲜花</p>
        </div>
        <div class="navItem">
          <img src="https://img02.hua.com/m/home/img/m_home_category_ppf.png" alt="">
          <p>永生花</p>
        </div>
        <div class="navItem">
          <img src="https://img02.hua.com/m/home/img/m_home_category_cake.png" alt="">
          <p>蛋糕</p>
        </div>
        <div class="navItem">
          <img src="https://img02.hua.com/m/home/img/m_home_category_gift.png" alt="">
          <p>礼品</p>
        </div>
        <div class="navItem">
          <img src="https://img02.hua.com/m/home/img/m_home_category_chocolate.png" alt="">
          <p>巧克力</p>
        </div>
      </div>

      <div class="middleTitle">
        <i class="iconfont iconshuxian"></i>
        <p>一秒选花</p>
      </div>

      <div class="middleImg">
        <div class="middleImgItem">
          <img src="https://img02.hua.com/m/home/img/m_home_use_lover.png" alt="">
          <span>送恋人</span>
        </div>
        <div class="middleImgItem">
          <img src="https://img02.hua.com/m/home/img/m_home_use_elder.png" alt="">
          <span>送长辈</span>
        </div>
        <div class="middleImgItem">
          <img src="https://img02.hua.com/m/home/img/m_home_use_friends.png" alt="">
          <span>送朋友</span>
        </div>
      </div>

      <div class="middleList">
        <div class="listItem">
          <img src="https://img02.hua.com/m/home/img/m_home_use_birthday2.png" alt="">
          <span>生日祝福</span>
        </div>
        <div class="listItem">
          <img src="https://img02.hua.com/m/home/img/m_home_use_profess2.png" alt="">
          <span>表白求婚</span>
        </div>
        <div class="listItem">
          <img src="https://img02.hua.com/m/home/img/m_home_use_business2.png" alt="">
          <span>开业商务</span>
        </div>
        <div class="listItem">
          <img src="https://img02.hua.com/m/home/img/m_home_use_anniversary2.png" alt="">
          <span>周年纪念</span>
        </div>
      </div>

      <div class="scene">
        <div class="sceneItem item01">
          <p class="sell">热销榜</p>
          <p class="love">集万千宠爱</p>
          <div class="sceneBottom">
            <span class="pay">大家都在买</span>
            <span>热销11.0万束</span>
          </div>
        </div>
        <div class="sceneItem item02">
          <p class="sell">特价专区</p>
          <p class="love">超值好货</p>
          <div class="sceneBottom">
            <span class="pay">限时直降</span>
            <span>￥159</span>
          </div>
        </div>
      </div>

      <div class="sceneList">
        <div class="sceneListItem">
          <img src="https://img02.hua.com/m/home/img/m_home_category_new2.png" alt="">
          <span>新品来袭</span>
        </div>
        <div class="sceneListItem">
          <img src="https://img02.hua.com/m/home/img/m_home_category_quality2.png" alt="">
          <span>品味之选</span>
        </div>
        <div class="sceneListItem">
          <img src="https://img02.hua.com/m/home/img/m_home_category_you2.png" alt="">
          <span>设计师甄选</span>
        </div>
      </div>

      <div class="detail">
        <div class="detailHeader">
          <span>送恋人/爱情鲜花</span>
        </div>
        <div class="detailItem" v-for="(item,index) in 2" :key="index">
          <img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg_220x240.jpg" alt="">
          <div class="detailItemRight">
            <p class="flowerName">一往情深</p>
            <p class="flowerDescribe">精品玫瑰礼盒:19枝红玫瑰,勿忘我0.1扎</p>
            <hr>
            <p>经典爆款,年销售冠军!</p>
            <hr>
            <div class="detailItemBottom">
              <div class="shopPrice">
                <p class="price">￥239</p>
                <p>已销售7.5万件</p>
              </div>
              <i class="iconfont icongouwuche"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <img src="https://img02.hua.com/m/home/img/m_home_qiyetuangou.png" alt="">
        <span class="footerTitle">为什么选择我们</span>
        <div class="footerList">
          <div class="footerItem" v-for="(item,index) in 3" :key="index">
            <img src="https://img02.hua.com/m/pro_detail/m_details_brand_01.png" alt="">
            <span>获评鲜花龙头企业</span>
          </div>
        </div>
      </div>

      <div class="bottom"> 
        <div class="bottomTitle">
          <span class="title1" v-for="(item,index) in 4" :key="index">企业团购</span>
        </div>
        <div class="bottomTitle2">
          <span class="title2" v-for="(item,index) in 4" :key="index">花礼优势</span>
        </div>
      </div>

      <p class="footer-copyright">
        Copyright © 2005~2019 花礼网（中国鲜花礼品网）版权所有
        <br>中国鲜花网领先品牌，鲜花速递专家！
        <br>深圳市百易信息技术有限公司  粤ICP备09171662号
      </p>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import BScroll from 'better-scroll'

  export default {
    mounted(){
      new Swiper('.swiper-container',{
        loop:true,
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
      new BScroll('#firstpageContainer',{
        scrollY:true,
        click:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #firstpageContainer
    width 100%
    height calc(100vh - 48px)
    overflow hidden
    .firstScroll
      width 100%
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
    .center
      width 100%
      height 100%
      .swiper-container
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
        .swiper-slide
          display flex
          height 100%
          justify-content center
          flex-wrap wrap
          img
            display flex
            height 180px
    .yesInfo
      width 100%
      height 36px
      display flex
      margin-bottom 10px
      .company
        height 36px
        margin 10px 8px
        text-align center
        i
          font-size 14px
          padding-right 4px
        span
          font-size 10px
    .nav
      width 100%
      height 68px
      padding 8px 0
      display flex
      box-sizing border-box
      .navItem
        width 75px
        text-align center
        img
          width 36px
          height 36px
        p
          width 75px
          height 16px
    .middleTitle
      width 100%
      height 40px
      padding 12px
      display flex
      box-sizing border-box
      i
        font-size 18px
      p
        font-size 14px
        text-align center
        line-height 18px
    .middleImg
      width 100%
      height 130px
      padding 0 6px
      display flex
      .middleImgItem
        position relative
        img
          width 117px
          margin-right 6px
        span
          width 117px
          height 18px
          font-size 14px
          position absolute
          left 0 
          bottom 0
          text-align center
          margin-bottom 2px
    .middleList
      width 100%
      height 95px
      margin 8px 0px 0px
      padding 0px 6px
      display flex
      .listItem
        position relative
        margin-right 6px
        img
          width 87px
          height 100%
        span
          position absolute
          left 24px 
          top 12px
          font-size 14px
          text-align center
    .scene
      width 100%
      height 160px
      margin 8px 0 0
      padding 0 6px
      display flex
      .sceneItem
        width 182px
        height 100%
        padding 12px
        box-sizing border-box
        border 1px solid #eee
        position relative
        .sell
          width 157px
          height 18px
          font-size 14px
        .love
          width 157px
          height 14px
          font-size 12px
        .sceneBottom
          width 158px
          height 16px
          position absolute
          bottom 12px 
          left 12px
          display flex
          .pay
            width 62px
            height 16px
            margin 0 30px 0 0
            padding 1px 6px
            font-size 10px
            line-height 16px
            text-align center
            background-color #FF734C
            color #ffffff
            border-radius 10px
          span
            width 68px
            height 12px
            font-size 10px
            line-height 18px
            text-align center
      .item01
        background-image url(https://img02.hua.com/m/home/img/m_home_ranklist2.png)
      .item02
        background-image url(https://img02.hua.com/m/home/img/m_home_special2.png)
    .sceneList
      width 100%
      height 130px
      margin 8px 0 0
      padding 0 6px
      display flex
      .sceneListItem
        position relative
        margin-right 6px
        img
          width 118px
          height 100%
        span
          width 118px
          height 24px
          position absolute
          line-height 24px
          text-align center
          color #ffffff
          left 0
          bottom 0
          background: rgba(35, 38, 40, 0.8)
    .detail
      width 100%
      border-top 10px solid #eeeeee
      .detailHeader
        width 100%
        height 56px
        padding 20px 0
        box-sizing border-box
        text-align center
        span
          font-size 16px
      .detailItem
        display flex
        padding 0 4px
        img
          width 176px
          height 192px
        .detailItemRight
          width 183px
          height 192px
          padding 0 20px
          .flowerName
            width 143px
            height 36px
            padding 18px 0 0
            box-sizing border-box
            font-size 14px
          .detailItemBottom
            width 143px
            height 36px
            margin-top 20px
            display flex
            .shopPrice
              width 123px
              height 35px
              .price
                font-size 18px
                color #FF734C
            i
              font-size 20px
    .footer
      margin-top 10px
      img
        width 100%
        height 125px
      span
        display block
        width 100%
        height 56px
        text-align center
        font-size 14px
        padding 20px 0
        box-sizing border-box
      .footerList
        width 375px
        height 108px
        display flex
        .footerItem
          width 125px
          height 108px
          padding 0 0 24px
          img
            width 64px
            height 64px
            margin-left 30px
          span
            width 125px
            height 16px
            margin 4px 0 0
            box-sizing border-box
            padding 0
    .bottom
      .bottomTitle
        width 100%
        height 58px
        padding 20px 0 14px
        background-color pink
        box-sizing border-box
        .title1
          font-size 12px
          width 66px
          height 24px
          margin 0 14px
          padding 4px 8px
          box-sizing border-box
          background #E9ECF0
      .bottomTitle2
        width 100%
        height 58px
        padding 0 0 20px
        background-color pink
        box-sizing border-box
        .title2
          font-size 12px
          width 66px
          height 24px
          margin 0 14px
          padding 4px 8px
          box-sizing border-box
          background #E9ECF0
    .footer-copyright
      width 375px
      height 68px
      padding 14px 0
      color #b4babf
      font-size 10px
      text-align center
      box-sizing border-box    
</style>
