<template>
  <div class="box1">
    <div class="box2">
    </div>

    <div id="boxFixed" v-show="isFixed" @click="toTop">
      自闭boy
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isFixed: false
    };
  },
  methods: {
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
      console.log(
        document.documentElement.scrollTop,
        document.body.scrollTop,
        window.pageYOffset
      );
    },
    toTop(){
      const timer= setInterval(()=> {
        let scrollTop =document.documentElement.scrollTop 
        var speed = 4*5/3+10
        window.pageYOffset = document.documentElement.scrollTop = document.body.scrollTop = scrollTop - speed
        console.log(scrollTop)
        if (scrollTop <= 0 ) {
          clearInterval(timer)
        }
      },30)
    }
  },
  mounted() {
    let that = this;
    let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    that.$nextTick(function() {
      window.addEventListener("scroll", that.handleScroll);
    });
  }
};
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
.box1 {
  width: 300px;
  height: 700px;

  // background pink
  .box2 {
    height: 1500px;
  }

  #boxFixed {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    background: pink;
    position: fixed;
    top: 85%;
    right: 0;
  }
}
</style>