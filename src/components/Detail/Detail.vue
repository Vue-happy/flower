<template>
  <div id="detail">
    <div class="headerbar">
      <div class="listitem tb "  @click="$router.replace('/home')">
        <a><span class="icon iconfont iconbackicon1" ></span></a>
      </div>
      <div class="listitem">
        <span>爱情鲜花</span>
      </div>
      <div class="listitem tb">
        <span class="iconfont iconerji icon" ></span>
        <span class="iconfont iconcaidan icon" ></span>

      </div>
    </div>
    <nav class="filter">
      <ul class="filterbox">
        <li class="filteritem">综合</li>
        <li class="filteritem" @click="sort_num()">销量</li>
        <li class="filteritem" @click="sort_price()">价格</li>
        <li class="filteritem">新品</li>
      </ul>
    </nav>
    <nav class="purposebox">
      <ul class="purpose">
        <li class="purposeitem"><a href="">送女友</a></li>
        <li class="purposeitem"><a href="">送男性</a></li>
        <li class="purposeitem"><a href="">送朋友</a></li>
        <li class="purposeitem"><a href="">送长辈</a></li>
        <li class="purposeitem"><a href="">筛选</a></li>
      </ul>
    </nav>
    <section class="product">
      <ul class="productlist">
        <li class="productlistitem" v-for="(item, index) in detailList" :key="index">
          <a href="">
            <img :src="`https://img01.hua.com/uploadpic/newpic/${item.ItemCode}.jpg_220x240.jpg`" alt="">
            <div class="text">
              <p>{{item.Cpmc}}·{{item.Instro}}</p>
              <div class="textitem">
                <p>￥{{item.Price}}</p>
                <p>销量{{item.ItemCode}}</p>
              </div>
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
    <div class="firstIcon">
      <i class="iconfont iconhuidaodingbu" v-show="isFixed" @click="toTop"></i>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
import { SAVE_SORT_NUM,SAVE_SORT_PRICE } from '../../store/mutations-type'

  export default {
    data() {
      return {
        isFixed: false
      }
    },

    methods: {
      priceTop(){
        console.log(detailList)
      },
      handleScroll() {
        let that = this;
        let scrollTop =document.documentElement.scrollTop 
        let clientHeight = document.documentElement.clientHeight;
        // if (scrollTop > clientHeight) {
        //   that.isFixed = true
        // }else{
        //   that.isFixed = false
        // }
        that.isFixed = scrollTop > clientHeight ? true : false;
        console.log(that.isFixed);

        // console.log(1)
        // console.log(
        //   document.documentElement.scrollTop,
        //   document.body.scrollTop,
        //   window.pageYOffset
        // );
      },
      toTop(){
        const timer= setInterval(()=> {
          let scrollTop =document.documentElement.scrollTop 
          var speed = 40
          window.pageYOffset = document.documentElement.scrollTop = document.body.scrollTop =( scrollTop - speed) - 1/50 *( scrollTop - speed)
          console.log(scrollTop)
          if (scrollTop <= 0 ) {
            clearInterval(timer)
          }
        },10)
      },
      sort_num(){
        console.log(111111)
        this.$store.commit(SAVE_SORT_NUM)
      } ,
      sort_price(){
        console.log(111111)
        this.$store.commit(SAVE_SORT_PRICE)
      }
    },

    mounted() {
      console.log(this.$store)
      this.$store.dispatch('detailList')
      this.$nextTick(function() {
      window.addEventListener("scroll", this.handleScroll);
    });
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
      // background pink 
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
      .tb
        display flex
        a 
          padding 10px
        .icon
          text-align center
          display block
          width 44px
          height 44px
    .filter
      // border-bottom 1px solid #fff
      .filterbox
        border-bottom 1px solid #888
        // background blue
        height 44px
        display flex
        justify-content space-around
        .filteritem
          width 25vw  
          text-align center
          line-height 45px
    .purposebox
      // background yellow 
      height 44px
      .purpose
        display flex
        justify-content space-around
        .purposeitem
          box-sizing boeder-box 
          // padding 4px
          width 20vw
          line-height 44px
          text-align center
          a
            padding 4px 8px
            background #f7f9fa 
            font-size 12px
    .product
      // &::after
      //   content ''
      //   display block
      //   clear both
      // height 1000px
      background #ddd
      .productlist
        // background greenyellow 
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
              .textitem  
                width 100%
                // position absolute
                margin 0 auto
                // bottom -14px
                color #f60
                display flex
                justify-content space-around
                p
                  &:last-child
                    color #000
    .footer
      height 64px
      background #fff
      box-sizing border-box
      padding 16px 0
      text-align center
      font-size 10px
      line-height 16px
      color #ccc
    .firstIcon
      position fixed
      right 10px
      bottom 10%
      i
        font-size 24px

</style>