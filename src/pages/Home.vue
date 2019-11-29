<template>
  <div>
    <div class="header">
      <div class="header-left">
        <i class="iconfont iconsousuo" @click.prevent="$router.replace('/sort')"></i>
      </div>
      <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt="">
      <div class="header-right">
        <i class="iconfont iconerji" @click="show = true"></i>
      </div>
    </div>
    <Main/>
    <Footer/>
    <Chat v-if="show" @toChat="toChat"></Chat>
  </div>
</template>

<script type="text/ecmascript-6">
  // import Header from '../../components/Header/Header'
  // import Main from '../../components/Main/Main'
  // import Footer from '../../components/Footer/Footer'
  // import Chat from '../Chat/Chat'
  export default {
    data(){
      return{
        show:false
      }
    },
    // components:{
    //   Header,
    //   Main,
    //   Chat
    // },
    async mounted(){
      this.$store.dispatch('getFlowersAction')
    },
    methods:{
      toChat(val){
        this.show = val
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
</style>
