<template>
  <div id="detailContainer">

    <div class="detailHeader">
      <div class="header">
        <div class="header-left">
          <i class="iconfont iconarrow-lift"></i>
        </div>
        <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt="">
        <div class="header-right">
          <i class="iconfont iconcaidan"></i>
        </div>
      </div>
    </div>

    <div class="detailCenter">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in 4" :key="index">
            <img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg" alt="">
          </div>
          
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <div class="detailTitle">
      <div class="details">
        <div class="header">
          <span class="header-title">
            一心一意-玫瑰11枝，粉色勿忘我0.3扎&emsp 
          </span>
          <span class="header-text">经典款式 精选爆款</span>
          <i class="iconfont iconshoucang"></i>
        </div>
        
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  export default {
    mounted(){
      new Swiper('.swiper-container',{
        loop:true,
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #detailContainer
    .detailHeader
      width 100%
      .header
        width 100%
        height 48px
        background #ffffff
        display flex
        justify-content space-between
        .header-left
          width 48px
          height 48px
          line-height 48px
          .iconfont
            font-size 24px
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
            margin-left 12px
    .detailCenter
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
            height 409px
</style>
