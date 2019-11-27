<template>
  <!-- 顶部 -->
 <div class="Wrapper">
   <header class="Header">
     <div class="Header-left">   
     </div>
     <div class="Header-center">
       <p>提交订单</p>
     </div>
     <div class="Header-right">    
       </div> 
   </header>
    <!-- 中部 -->
    <div class="mon">
    <div class="moner"><p>收件人:</p></div>
     <div class="mener"> <p>请填写收货地址</p></div>
    </div>

    <div class="first">
      <div class="first-name"><p>订阅人信息</p></div>  
      <div class="first-box"><p>请填写</p> </div>  
    </div>
     <div class="first">
      <div class="first-name"><p>送达日期</p></div>  
      <div class="first-box"><p>请选择</p> </div>  
    </div>
     <div class="first-end">
      <div class="first-name"><p>贺卡留言</p></div>  
      <div class="first-box"><p>请填写</p> </div>  
    </div>
    <div class="two">
       <div class="two-name">
         <p>备注/优惠券/权益卡/发票</p>
       </div>
    </div>
    <div class="item">
      <ul class="item-list">
        <li class="item-list-a">
          <div class="item-list-b">
            <img src="../common/images/ig.jpg" alt="">
          </div>
          <div class="item-list-info">
            <p class="item-list-info-name">[鲜花]一心一意</p>
            <p class="item-list-info-num">数量  x 1</p>
          </div>
          <div class="item-list-term-price">
            ￥
            <span class="number-bai">139</span>
          </div>
        </li>
      </ul>

      <div class="item-add">
        <div class="item-add-a">
          <p class="item-add-b">商品总金额</p>
          <p class="item-add-d">￥
            <span class="item-f">139</span>
          </p>
        </div>
      </div>
    </div>


     <!-- 尾部 -->
  <Footer class="end">
   <div class="end-a">
     <span>合计 :</span>
     <span class="end-b">
       <div class="end-c">￥ 139</div>
       <!-- <div class="end-d">139</div> -->
     </span>
   </div>
   <div class="end-z">去结算</div>
  </Footer>
 </div>

</template>

<style lang='stylus'>
  .Wrapper
    width 100%
    margin 0 auto
    padding 0
    .Header
      width 100%
      height 44px
      background-color  #fff
      display flex
      line-height 15px
      border-bottom 2px solid  rgba(0,0,0,0.1)
      .Header-left
        width 88px
        height 44px
        background-color #fff
        float left 
        text-align left 
      .Header-center
        width 199px
        height 144px
        box-sizing border-box
        vertical-align middle
        p
          text-align center
          font-size 16px  
      .Header-right
        width 88px
        height 44px
        float right
    .mon 
      width 100%
      height 55px
      border-bottom 7px solid   rgba(0,0,0,0.1)         
      .moner
        width 60px
        height 66px
        text-align center
        font-size 16px
        float left 
        margin 0 7px
      .mener
        width 267px
        height 67px
        float right
        font-weight bold
        font-size 16px
    .first
      width 100%
      height 49px  
      .first-name
        width 79px
        height 19px
        float left
        font-size 14px
        line-height 22px
        margin 2px 10px 
      .first-box
        width 100px
        height 19px
        font-size 14px
        // background-color red
        float right
    .first-end
      width 100%
      height 49px 
      border-bottom 7px solid   rgba(0,0,0,0.1)   
      .first-name
        width 79px
        height 19px
        float left
        font-size 14px
        line-height 22px
        margin 2px 10px 
      .first-box
        width 100px
        height 19px
        font-size 14px
        float right
    .two
      width 100%
      height 28px 
      border-bottom 7px solid   rgba(0,0,0,0.1)
      .two-name
        width 60%
        white-space nowrap
        margin 10px 
        // text-align center
        font-size 14px
    .item
      margin 0
      box-sizing border-box
      .item-list
        background:#fff
        padding 12px 16px
        .item-list-a
          width 100%
          height 70px
          font-size 13px
          overflow hidden
          display flex
          .item-list-b
            width 64px
            height 70px
            overflow hidden
            margin-right 16px
            img 
              width 100%
              vertical-align: middle
        .item-list-info
          flex 1
          min-width 0
          .item-list-info-name
            overflow hidden
          .item-list-info-num
            margin-top 10px
        .item-list-term-price
          text-align center
          text-align right
          font-weight bold
          margin 14px 10px   
      .item-add
        background #fff 
        padding 11px 16px 12px
        position relative
        .item-add-a
          display flex
          flex-wrap wrap
          align-items center
          justify-content center
          overflow hidden
          line-height 24px 
          .item-add-b
            flex 1
            min-width 0
            float left
            p 
              width 25px
              text-align right
              font-weight bold
           .item-add-d
             text-align right
             font-weight bold
             float right 
             margin 0 15px   
    .end
      position fixed
      bottom 0
      width 100%
      height 49px
      line-height 49px
      overflow hidden
      max-width 640px
      z-index 10
      // background ##F7F9FA
      display flex
      flex-wrap wrap
      .end-a
        flex 1
        min-width 0
        padding 0 16px
        font-size 12px
        box-shadow 0 1px 0 0 #F7F9FA inset
        position relative
        .end-b
          font-size 22px
          color #FE6600
          font-weight 500
          position absolute
          bottom 0
          left 50px
          .end-c
            font-size 18px
      .end-z
        width 124px
        text-align center
        background  #FF734C
        color #fff 
        font-size 16px                  
</style>

