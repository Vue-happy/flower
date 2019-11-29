<template>
  <div id="login">
    <div class="header">
      <i class="iconfont iconarrow-lift"></i>
    </div>
    <div class="loginbox">
      <img
        src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png"
        alt=""
      />
      <div class="logininput">
        <div class="item"> <input  placeholder="请输入邮箱/手机号"></div>
        <div class="item"> <input type="password"  placeholder="请输入密码">
        </div>
        <div class="item"> <button @click="submitForm()">手机登陆/注册</button></div>
        <div class="item">
          <span>手机短信登陆></span>
          <span>注册></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
methods: {
  submitForm(){
      this.$router.replace('/home')
  }
},
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#login
  width 375px
  .header
    width 100%
    height 44px
    background #fff
    line-height 44px
    box-sizing border-box
    padding 0 10px
    i
      font-size 19px
  .loginbox
    width 100%
    height 310px
    margin-top 30px
    // background pink
    img
      display block
      width 190px
      height 25px
      margin 0 auto
    .logininput
      margin-top 10px
      .item
        position relative 
        margin 0 auto 
        height 45px
        width 343px
        padding 4px
        line-height 45px
        input
          width 100%
          // border-radius 5px
          border-bottom 1px solid #eff3f1


        button
          width 100%
          height 46px
          line-height 46px
          margin-top 40px 
          font-size 16px
          background #ff734c
          border-radius 100px
          border  1px solid #ff734c
          box-shadow 0 4px 8px 0 #ffb6a2
        &:last-child
          position absolute
          // margin 0 auto 
          left 12px
          bottom 300px
          display flex
          justify-content space-between
          span 
            display 
            
            

</style>
