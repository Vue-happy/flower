<template>
  <div id="detail">
    <div class="headerbar">
      <div class="listitem">
        <a href=""><span><</span></a>
      </div>
      <div class="listitem">
        <span>爱情鲜花</span>
      </div>
      <div class="listitem">
        <span class="iconfont iconcaidan" style="background :red"></span>
      </div>
    </div>
    <nav class="filter">
      <ul class="filterbox">
        <li class="filteritem">综合</li>
        <li class="filteritem">销量</li>
        <li class="filteritem">价格</li>
        <li class="filteritem">新品</li>
      </ul>
    </nav>
    <nav class="purposebox">
      <ul class="purpose">
        <li class="purposeitem">送女友</li>
        <li class="purposeitem">送男性</li>
        <li class="purposeitem">送朋友</li>
        <li class="purposeitem">送长辈</li>
        <li class="purposeitem">筛选</li>
      </ul>
    </nav>
    <section class="product">
      <ul class="productlist">
        <li class="productlistitem" v-for="(item, index) in detailList" :key="index">
          <a href="">
            <img :src="`https://img01.hua.com/uploadpic/newpic/${item.ItemCode}.jpg_220x240.jpg`" alt="">
            <div class="text">
              <p>{{item.Cpmc}}·{{item.Instro}}</p>
              <span>￥{{item.Price}}</span>
            </div>
          </a>
        </li>        
      
      </ul>
    </section>
    <div class="scrollbox"></div>
    <footer class="footer">
      <p>爱情鲜花专区</p>
      <span>Copyright © 2005~2019 花礼网(中国鲜花礼品网) 版权所有</span>
    </footer>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import {mapState} from 'vuex'

  export default {


    methods: {
      priceTop(){
        console.log(detailList)
      }
    },

    mounted() {
      console.log(this.$store)
      this.$store.dispatch('detailList')
      
    },
    computed: {
      
      ...mapState({
        detailList  : state => state.detailList.detailList,
      })
    },
  }
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
  #detail
    width 375px
    .headerbar
      background pink 
      width 100%
      height 44px
      display flex
      justify-content space-between
      .listitem
        width 88px
        line-height 44px
        text-align center 
        &:nth-child(2)
          width 196px
    .filter
      .filterbox
        // background blue
        height 45px
        display flex
        justify-content space-around
        .filteritem
          width 25vw  
          text-align center
          line-height 45px
    .purposebox
      background yellow 
      height 44px
      .purpose
        display flex
        justify-content space-around
        .purposeitem
          width 20vw
          line-height 44px
          text-align center
    .product
      // &::after
      //   content ''
      //   display block
      //   clear both
      // height 1000px
      background #ddd
      .productlist
        background greenyellow 
        display flex
        flex-wrap wrap
        .productlistitem
          // float left
          box-sizing border-box
          width calc(50vw - 12px)
          height 269px
          margin 8px 0 0 8px
          background #fff
          // &::after
          //   content ''
          //   display block
          //   clear both
          a 
            font-size 12px
            img
              width 100%
              height 195px
            .text
              width 159px
              padding 8px
              line-height 19px
              position relative
              p
                height 38px
                display block
                overflow hidden 
                // white-space nowrap
                
              span 
                position absolute
                bottom -14px
                color #f60
    .footer
      height 64px
      background #fff
      box-sizing border-box
      padding 16px 0
      text-align center
      font-size 10px
      line-height 16px
      color #ccc


</style>