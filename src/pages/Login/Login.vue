<template>
   <div id="loginContent">

     <!-- 头部 -->
     <div class="loginHeader">
         <van-icon class="icon" name="cross" />
     </div>
     

     <!-- logo部分 -->
    <div class="logoContent">
        <div class="hualogo">
           
        </div>
        <!-- 输入框 -->
        <div class="loginInput">
           <van-cell-group>
           <van-field
           v-model="username"
           required
           clearable
           label="用户名"
           right-icon="question-o"
           placeholder="请输入用户名"
           @click-right-icon="$toast('question')"
         />
          <van-field
          v-model="password"
           type="password"
          label="密码"
          placeholder="请输入密码"
          required
         />
     </van-cell-group>
     </div>
     </div>
    
    
  
   </div>
</template>


<script>
export default {
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #loginContent
    width 100%
    height 100%
    .loginHeader
      width 100%
      height 44px
      .icon
        width 44px
        height 44px
        line-height 44px
        text-align center
        font-size 30px
    .logoContent
      width 320px
      height 310px
      .hualogo
        width  190px
        height 25px
        
</style>