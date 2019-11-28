<template>
  <div id="commentContainer">
    <div class="comment">
      <van-overlay :show="show" @click="show = true">
        <div class="wrapper" @click.stop>
          <div class="block">
            <div class="block_detail">
              <div class="blockHeader">
                <span>您对本次服务满意吗?</span>
                <i class="iconfont iconguanbi" @click="show = false"></i>
              </div>
              <div class="blockImg">
                <div class="blockImg_01">
                  <i class="iconfont icongood" :class="{active1:isPink}" @click="isPinkActive" ></i>
                  <span>好评</span>
                </div>
                <div class="blockImg_02">
                  <i class="iconfont iconzhongping" :class="{active2:isGreen}" @click="isGreenActive"></i>
                  <span>中评</span>
                </div>
                <div class="blockImg_03">
                  <i class="iconfont iconchaping" :class="{active3:isRed}" @click="isRedActive" ></i>
                  <span>差评</span>
                </div>
              </div>
              <div class="blockFooter">
                <input type="text" placeholder="请填写评价内容(选填)" v-model="value">
                <button @click="clearInput">提交</button>
              </div>
            </div>
          </div>
        </div>
      </van-overlay>
      <button  @click="show = true"></button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import {Overlay} from 'vant'

  Vue.use(Overlay)
  export default {
    data(){
      return{
        show:false,
        isPink:false,
        isGreen:false,
        isRed:false,
        value:''
      }
    },
    methods:{
      isPinkActive(){
        this.isPink = !this.isPink,
        this.isGreen = false,
        this.isRed = false
      },
      isGreenActive(){
        this.isPink = false,
        this.isGreen = !this.isGreen,
        this.isRed = false
      },
      isRedActive(){
        this.isPink = false,
        this.isGreen = false,
        this.isRed = !this.isRed
      },
      clearInput(){
        this.value = ''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #commentContainer
    width 100%
    position relative
    z-index 10
    .comment
      width 100%
      position fixed
      bottom 0
      left 0
      .wrapper 
      display flex
      align-items center
      justify-content center

      .block 
        width 100%
        height calc(100vh - 120px)
        position absolute
        top 60px
        left 0
        background-color #a4a4a4
        .block_detail
          width 100%
          height 254px
          background-color #ffffff
          .blockHeader
            width 100%
            height 28px
            padding 10px 30px 0px
            box-sizing border-box
            position relative
            span
              display block
              font-size 14px
              text-align center
            i
              position absolute
              right 0
              top 8px
              font-size 16px
              padding 0px 10px 0px 0px
          .blockImg
            width 100%
            height 82px
            margin 10px 0 0
            display flex
            justify-content space-around
            div
              width 62px
              height 82px
              margin 0px 5px
              padding 10px 0 0
              box-sizing border-box
              display flex
              flex-direction column
              .iconfont
                font-size 40px
                padding 0 40px 0 0
                padding-left 10px
              .active1
                color pink
              .active2
                color green
              .active3
                color red
              span
                width 60px
                height 22px
                padding 5px 0 0 
                color #666
                font-size 14px
                display block
                text-align center
          .blockFooter
            width 375px
            height 130px
            padding 10px 20px 15px
            input
              width 335px
              height 50px
              padding 0 10px
              border 1px solid #eeeeee
              box-sizing border-box
              
            button
              width 335px
              height 35px
              margin 10px 0 0
              background  #ff6600 
              border none
      button
        width 100%
        height 50px
        background-color rgba(0,0,0,0)
        border none
</style>
