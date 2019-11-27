<template>
  <div class="Footer" @click="goPath('/Detail')">
    <div class="Footer-litter">
       <span>综合</span>
       <span>销量</span>
       <span>价格</span>
       <span>新品</span>
    </div>
    <div class="Footer-list">
      <div class="Footer-item">
        <a href></a>
        <div class="Footer-item-img">
          <img src="../common/images/sort/hua.jpg" alt />
        </div>
        <div class="Footer-item-detail">
          <span class="Footer-item-name">99枝玫瑰赠德芙心语巧克力</span>
          <div class="Footer-item-price">￥629</div>
        </div>
      </div>
      <div class="Footer-item">
        <a href></a>
        <div class="Footer-item-img">
          <img src="../common/images/sort/hua.jpg"  alt />
        </div>
        <div class="Footer-item-detail">
          <span class="Footer-item-name">99枝玫瑰赠德芙心语巧克力</span>
          <div class="Footer-item-price">￥288</div>
        </div>
      </div>
      <div class="Footer-item">
        <a href></a>
        <div class="Footer-item-img">
          <img src="../common/images/sort/hua.jpg"  alt />
        </div>
        <div class="Footer-item-detail">
          <span class="Footer-item-name">99枝玫瑰赠德芙心语巧克力</span>
          <div class="Footer-item-price">￥163</div>
        </div>
      </div>
      <div class="Footer-item">
        <a href></a>
        <div class="Footer-item-img">
          <img src="../common/images/sort/hua.jpg"  alt />
        </div>
        <div class="Footer-item-detail">
          <span class="Footer-item-name">99枝玫瑰赠德芙心语巧克力</span>
          <div class="Footer-item-price">￥456</div>
        </div>
      </div>
      <div class="Footer-item">
        <a href></a>
        <div class="Footer-item-img">
          <img src="../common/images/sort/hua.jpg"  alt />
        </div>
        <div class="Footer-item-detail">
          <span class="Footer-item-name">99枝玫瑰赠德芙心语巧克力</span>
          <div class="Footer-item-price">￥790</div>
        </div>
      </div>
      <div class="Footer-item">
        <a href></a>
        <div class="Footer-item-img">
          <img src="../common/images/sort/hua.jpg"  alt />
        </div>
        <div class="Footer-item-detail">
          <span class="Footer-item-name">99枝玫瑰赠德芙心语巧克力</span>
          <div class="Footer-item-price">￥999</div>
        </div>
      
      
      </div>
      <div class="discibeContainer">
        <p>已经到底了...</p>
        <p>送女友鲜花专区</p>
        <p>Copyright © 2005~2019 花礼网(中国鲜花礼品网) 版权所有</p>

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    goPath(path){
      this.$router.replace(path)
    }
  }
};
</script>
  
<style lang='stylus' rel='stylesheet/stylus'>
  .Footer
    width 100%   
     
    .Footer-litter
      margin 30px 20px
      display flex
      justify-content space-between
      font-size 15px
    .Footer-list
      height 756px
      background-color #fff 
      box-sizing border-box 
      .Footer-item
        display inline-block
        width 48%
        height 243px
        overflow hidden
        background-color #fff
        box-shadow 0px 4px 6px 0px #dee2e5
        margin 2px 3px  
        .Footer-item-img
          height 190px
          border 0
          margin 0
          padding 0
          box-sizing border-box
          img 
            width 100%
            vertical-align middle
        .Footer-item-detail
          margin 10px
          box-sizing border-box
          background-color #fff
          .Footer-item-name
            margin-top 4px
            font-size 7px
            color #232628
            white-space nowrap
          .Footer-item-price
            margin-top 8px
            font-size 5px
            color  #FF734C 
    .Footer-bottom
      height 13px
      margin-top 4px
      text-align center
      font-size 4px
      color #71797F
      line-height 13px

     .discibeContainer
       font-size 10px
       display flex
       flex-direction column 
       justify-content center
       align-items center
       margin-top 50px 
       font-size 10px
       color grey 
       p:nth-child(1)
         font-size 13px
         color black 
       p:nth-child(2)
         margin 50px 0 20px 0px
</style>