  <template>
      <div>
        <div class="w-searchContainer">
          <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @search="onSearch">
              <div slot="action" @click="onSearch">搜索</div>
          </van-search>
        </div>

          <van-tabs v-model="active" class="w-remen">
              <van-tab title="热门推荐">
                <div class="w-header">
                  <img src="../common/images/rementuijian.jpg" alt="">
                </div> 
                <div class="w-body">
                    <ul class="w-imgList">
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                    </ul>
                </div> 
              </van-tab>
                <van-tab title="鲜花" class="w-xianhua">
                  <div class="w-header">
                    <img src="../common/images/weimei.png" alt="">
                  </div>
                  <div class="w-body">
                      <ul class="w-imgList">
                        <p class="w-changhe">热门</p>
                        <li class="w-item">
                          <img src="../common/images/ia_200001585.jpg" alt="">
                          <p class="w-describe">送恋人鲜花</p>
                        </li> 
                        <li class="w-item">
                          <img src="../common/images/ia_200001585.jpg" alt="">
                          <p class="w-describe">送恋人鲜花</p>
                        </li> 
                        <li class="w-item">
                          <img src="../common/images/ia_200001585.jpg" alt="">
                          <p class="w-describe">送恋人鲜花</p>
                        </li> 
                        <li class="w-item">
                          <img src="../common/images/ia_200001585.jpg" alt="">
                          <p class="w-describe">送恋人鲜花</p>
                        </li> 
                        <li class="w-item">
                          <img src="../common/images/ia_200001585.jpg" alt="">
                          <p class="w-describe">送恋人鲜花</p>
                        </li> 
                        <li class="w-item">
                          <img src="../common/images/ia_200001585.jpg" alt="">
                          <p class="w-describe">送恋人鲜花</p>
                        </li> 
                        <li class="w-item">
                          <img src="../common/images/ia_200001585.jpg" alt="">
                          <p class="w-describe">送恋人鲜花</p>
                        </li> 
                        <li class="w-item">
                          <img src="../common/images/ia_200001585.jpg" alt="">
                          <p class="w-describe">送恋人鲜花</p>
                        </li> 
                      </ul>
                  </div>
              </van-tab>
              <van-tab title="永生花">
                <div class="w-header">
                  <img src="../common/images/yongshenghua.png" alt="">
                </div> 
                <div class="w-body">
                    <ul class="w-imgList">
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                      <li class="w-item">
                        <img src="../common/images/ia_200001585.jpg" alt="">
                        <p class="w-describe">送恋人鲜花</p>
                      </li> 
                    </ul>
                </div> 
              </van-tab>
              <van-tab title="蛋糕" class="w-cokes">
                <div class="w-header">
                  <img src="../common/images/meiwei.png" alt="">
                </div> 
                <div class="w-body">
                  <ul class="w-pinpaiList">
                    <li style="border-right:1px solid #eee">
                      <img src="../common/images/pinpai1.png" alt="">
                    </li>
                    <li class="w-middle">
                      <img src="../common/images/pinpai1.png" alt="">
                    </li>
                    <li style="border-left:1px solid #eee">
                      <img src="../common/images/pinpai1.png" alt="">
                    </li>
                    <li style="border-right:1px solid #eee">
                      <img src="../common/images/pinpai1.png" alt="">
                    </li>
                    <li class="w-middle">
                      <img src="../common/images/pinpai1.png" alt="">
                    </li>
                    <li style="border-left:1px solid #eee">
                      <img src="../common/images/pinpai1.png" alt="">
                    </li>
                  </ul>
                </div>
              </van-tab>
          </van-tabs>
      </div>
    </template>

    <script>
    // import Vue from 'vue'
    //  import { Tab, Tabs} from 'vant'
    //  Vue.use(Tab).use(Tabs)
      export default{
        data(){
          return {
            active:1
          }
        }
      }

    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style lang="stylus" rel="stylesheet/stylus" scoped>
      .w-remen
        .w-header
          img
            margin-top 10px 
            width 100%
            height 260px
        .w-body
          width 100%
        .w-imgList
          border 1px solid #eee 
          box-sizing border-box
          margin 20px 20px
          display flex
          flex-wrap wrap
          text-align center
          .w-item
            margin-top 5px
            width 25%
            img
              width 90%
              height 180px
              border-radius 50%
            .w-describe
              margin 20px 40px

      .w-xianhua
        .w-header
        .w-body
          width 100%
          .w-imgList
            position relative
            .w-changhe
              position absolute
              left -350px
              top 16px
              width 100%
              height 450px
              margin-bottom 20px
              font-size 30px
            .w-item
              margin-top 80px
      .w-cokes
        .w-header
        .w-body
          width 100%
          .w-pinpaiList
            border 1px solid #eeeeee
            margin 20px 20px
            display flex
            flex-wrap wrap
            li
              width 30%
              height 150px
              margin-left 20px
              img 
                width 100%
                height 100%
              

              
              


        
      </style>
