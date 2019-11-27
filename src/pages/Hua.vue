<template>
  <div id="Huacontent">
    <!-- 头部 -->
    <div class="header">
      <van-icon class="left-icon" name="arrow-left" />
      <span class="logo">
          <img class="img" src="../common/pictuer/hua.png" alt="">
      </span>
      <span class="right-icon">
         <van-icon class="right-img"  name="wap-nav" />
      </span>
    </div>


    <!-- 轮播图 -->
    <van-swipe class="swiper" @change="onChange" :autoplay="3000">
      <van-swipe-item>
        <img src="../common/picture1/picture1.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../common/picture1/picture2.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../common/picture1/picture3.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../common/picture1/picture4.jpg" alt="">
      </van-swipe-item>
      <!-- <div class="custom-indicator" slot="indicator">
        {{ current + 1 }}/4
      </div> -->
    </van-swipe>


    <!-- 轮播图下面的内容 -->
    <div class="proinfo">
      <div class="text">
        <span>永生花满月艺术灯笼/朦胧-永生花台灯</span>
        <span class="textright">创意永生花台灯,可调亮度</span>
      </div>
      <div class="right-icon">
        <span>
          <van-icon name="star-o" />
        </span>
      </div>
      <!-- 价钱的内容 -->
      <div class="moneyText">
        <div class="money">
          <span class="current">￥398</span>
          <span class="furture">￥498</span>
        </div>
      </div>
      <div class="moneyRight">
        <span>已售66件</span>
      </div>
    </div>
     
    <!-- 橙色的下划线 -->
    <hr style="margin:-28px;height:10px;border:0px;background-color:#D5D5D5;color:#D5D5D5;"/>
     
     <!-- 内容区域 -->
    <div class="content">
      <div class="content1">
        <div class="contentspan1">
        </div class="contentspan2"> 
        <div>搭配绣球等永生花材，手工精制而成。再搭配满月型艺术台灯，造型独特，创意十足，是送礼、居家自用的极佳选择。</div> 
      </div>  
    </div>


     <!-- 底部  -->
      <div class="footer">
       <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
       <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
     </van-goods-action>
      </div>



  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    }
  },
   
    methods: {onChange(index) {
      this.current = index;
    },
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #Huacontent
  position relative
    width 100%
    height 100%
    .header
      width 100%
      height 44px
      box-sizing border-box
      display flex
      .left-icon
        width 44px
        height 44px
        font-size 20px
        text-align center
        margin-top 10px
      .logo
        width 200px
        height 44px
        margin-top 10px
        margin-left 44px
        text-align center
        box-size border-box
        .img
          width 150px
          height 20px
      .right-icon
        width 40px
        height 40px
        position absolute
        right 5px
        top 10px
        .right-img
          font-size 25px
    .proinfo
      width  375px
      height 100px
      .text
        width 303px
        height 38px
        margin 10px 
        font-size 14px 
        .textright
          margin-left:35px
          color orange
      .right-icon
        position absolute
        right 20px
        top 447px
        display inline
        font-size 17px
    .moneyText
      width 343px
      height 24px
      margin 10px                
      .money
        width 247px
        height 24px
        .current
          width 26px
          height 24px
          font-size 20px
          font-weight bold
          color #FF734C
        .furture
          font-size 14px
          margin-left 5px
          text-decoration:line-through
          color #B5BBC0
    .moneyRight
      width 70px
      height 16px
      color #232628
      position absolute
      top 500px
      right 1px
    .content
      display flex
      width 375px
      heiht 168px
      position absolute
      left 20px
      top 560px
      .content1
        float left
        width 375px
        height 168px
        .contentspan1
          float left
          width 42px
          height 72px
          position absolute
          left 20px
        .contentspan2
          width 300px
          height 72px
          float right
          position absolute
          left 30px
          top 500px
    .footer
      position absolute
      left 0
      bottom 0      
         

</style>