<template>
  <!-- 头部 -->
  <div class="loginContainer">
    <div id="logo">
        <span class="logoPicture">
          <img src="../../common/pictuer/hua.png" alt="">
        </span>
    </div>


    <!-- <HeaderGuide title="用户登录"> -->
      <span @click="$router.replace('/Home')" slot="left" class="header_search">
        <i class="iconfont icon-zuozhishi"></i>
      </span>
    <!-- </HeaderGuide> -->
    <!-- 开始登陆 -->
   <div class="loginInner">
      <div class="login_header">

        <div class="login_header_title">
          <a href="javascript:;" :class="{on:!isPassWorldLogin}" @click="isPassWorldLogin = !isPassWorldLogin">短信登录</a>
          <a href="javascript:;" :class="{on:isPassWorldLogin}" @click="isPassWorldLogin = !isPassWorldLogin">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on:!isPassWorldLogin}">
            <section class="login_message">
              <input v-model="phone" name="phone" v-validate="'required|phone'" type="tel" maxlength="11" placeholder="手机号">
              <span style="color:red;" v-show="errors.has('phone')">{{errors.first('phone')}}</span>
              <button
              @click.prevent="sendCode"
               :disabled="!isRightPhoneNumber || !!countDown"
               class="get_verification" 
               :class="isRightPhoneNumber?'right_phone_number':''"
               >{{countDown?`${countDown}s后可以再次获取`:'获取验证码'}}</button>
            </section>
            <section class="login_verification">
              <input v-model="code" v-validate="'required|code'" name="code" type="tel" maxlength="8" placeholder="验证码">
               <span style="color: red;" v-show="errors.has('code')">{{errors.first('code')}}</span>

            </section>
            <section class="login_hint">
              <!-- 温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意 -->
              <a href="javascript:;"></a>
            </section>
          </div>
          <div :class="{on:isPassWorldLogin}">
            <section>
              <section class="login_message">
                <input v-model="name" name="username" v-validate="'required'" type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
               <span style="color: red;" v-show="errors.has('username')">{{errors.first('username')}}</span>

              </section>
              <section class="login_verification">
                <input 
                 v-validate="'required'"
                :type="isShowPassword?'tel':'password'" 
                maxlength="8" 
                placeholder="密码"
                name="pwd"
                v-model="pwd"
                >
                <span style="color: red;" v-show="errors.has('pwd')">{{errors.first('pwd')}}</span>
                
                <div @click="isShowPassword=!isShowPassword" class="switch_button " :class="isShowPassword?'on':'off'">
                  <div class="switch_circle" :class="{right:isShowPassword}"></div>
                  <span class="switch_text">...</span>
                </div>
              </section>
              <section class="login_message">
                <!-- //<input  name="captcha" v-validate="'required'" type="text" maxlength="11" placeholder="验证码"> -->
                 <span style="color: red;" v-show="errors.has('captcha')">{{errors.first('captcha')}}</span>
<!-- 
                <img
                  ref="captcha"
                 class="get_verification"
                 @click="updateCaptcha"
                  src="http://localhost:4000/captcha" 
                  > -->
              </section>
            </section>
          </div>
          <button @click.prevent="login" class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <span href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </span>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import {loginWithPassword,   loginWithPhone } from '../../api'
import { Button } from "mint-ui";
import { log } from 'util';
export default {
 data(){
    return {
      isPassWorldLogin: false, //标识是否显示用户名
      isShowPassword:false,// 是否显示密码
      name: '',
      pwd: '',
      captcha: '',
      phone: '',
      code: '',
      countDown: 0, // 倒计时

    }
  },
  methods:{
    updateCaptcha(){
      console.log(this.$refs)
      this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
    },
     async login(){
      // console.log('111')
      let {isPassWorldLogin, name,  pwd, captcha, phone, code} = this
      let names = isPassWorldLogin?['username','pwd','captcha']:['phone','code']
      const success = await this.$validator.validateAll(names) // 对所有表单项进行验证
      console.log(success)
      if (success) {
        console.log('前端验证成功')
        // this.$router.peplace('/mine')
        this.$router.replace('/home')


      }else{
        console.log('失败')
      }


    },

    async sendCode(){
      console.log('发送验证码')
      this.countDown = 10
      this.intervalId = window.setInterval(()=>{
        this.countDown--
        // this.countDown
        this.countDown ===0 && clearInterval(this.intervalId)
      },1000)
    }

  },
  computed:{
    isRightPhoneNumber(){
        // 验证手机号是否满足要求
        return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)
      }
  }

     
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loginContainer
    width 100%
    height 100%
    background #fff
    #logo
      margin-top 50px
      margin-left 70px
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #de4943
              font-weight 700
              border-bottom 2px solid 
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #de4943
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone_number
                  color #333
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #de4943
                >.switch_circle
                //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(27px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #de4943
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #de4943
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999

</style>

