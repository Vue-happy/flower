  <template>
  <div>
    <van-search v-model="value" placeholder="请选择鲜花、蛋糕、礼品" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>

    <van-tabs v-model="active" class="w-remen">
      <van-tab title="热门推荐">
        <div class="w-header">
          <img src="../common/images/sort/remen/rementuijian.jpg" alt />
        </div>
        <div class="w-body">
          <ul class="w-imgList" @click="goPath('/detail')">
            <li class="w-item">
              <img src="../common/images/sort/remen/ia_200001585.jpg" alt />
              <p class="w-describe">送恋人鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/zhangbei.png" alt />
              <p class="w-describe">送长辈鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/shengri.png" alt />
              <p class="w-describe">生日鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/lihe.png" alt />
              <p class="w-describe">礼盒鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/yongshenghua.png" alt />
              <p class="w-describe">永生花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/dangao.png" alt />
              <p class="w-describe">蛋糕</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/yuazu.png" alt />
              <p class="w-describe">元祖蛋糕</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/jinbohua.png" alt />
              <p class="w-describe">金箔花</p>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="鲜花" class="w-xianhua">
        <div class="w-header">
          <img src="../common/images/sort/xianhua/weimei.png" alt />
        </div>
        <div class="w-body">
          <ul class="w-imgList">
            <p class="w-changhe">热门</p>
            <li class="w-item">
              <img src="../common/images/sort/remen/dangao.png" alt />
              <p class="w-describe">哀思鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/jinbohua.png" alt />
              <p class="w-describe">花束鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/lihe.png" alt />
              <p class="w-describe">男性鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/xianhua/zhufu.png" alt />
              <p class="w-describe">祝福鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/xianhua/aisi.png" alt />
              <p class="w-describe">探望鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/xianhua/zhufu.png" alt />
              <p class="w-describe">婚庆鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/lianren.png" alt />
              <p class="w-describe">道歉鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/yuazu.png" alt />
              <p class="w-describe">探望鲜花</p>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="永生花">
        <div class="w-header">
          <img src="../common/images/sort/yongshenghua/yongshenghua.png" alt />
        </div>
        <div class="w-body">
          <ul class="w-imgList">
            <li class="w-item">
              <img src="../common/images/sort/remen/dangao.png" alt />
              <p class="w-describe">蛋糕鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/jinbohua.png" alt />
              <p class="w-describe">首饰</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/lianren.png" alt />
              <p class="w-describe">恋人鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/yuazu.png" alt />
              <p class="w-describe">创意鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/zhangbei.png" alt />
              <p class="w-describe">老人鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/xianhua/aisi.png" alt />
              <p class="w-describe">巧罗鲜花</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/xianhua/nanxing.png" alt />
              <p class="w-describe">企业团购</p>
            </li>
            <li class="w-item">
              <img src="../common/images/sort/remen/lihe.png" alt />
              <p class="w-describe">恋人鲜花</p>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="蛋糕" class="w-cokes">
        <div class="w-header">
          <img src="../common/images/sort/dangao/meiwei.png" alt />
        </div>
        <div class="w-body">
          <ul class="w-pinpaiList">
            <li style="border-right:1px solid #eee">
              <img src="../common/images/sort/dangao/pinpai1.png" alt />
            </li>
            <li class="w-middle">
              <img src="../common/images/sort/dangao/pinpai2.png" alt />
            </li>
            <li style="border-left:1px solid #eee">
              <img src="../common/images/sort/dangao/pinpai3.png" alt />
            </li>
            <li style="border-right:1px solid #eee">
              <img src="../common/images/sort/dangao/pinpai4.png" alt />
            </li>
            <li class="w-middle">
              <img src="../common/images/sort/dangao/pinpai5.png" alt />
            </li>
            <li style="border-left:1px solid #eee">
              <img src="../common/images/sort/dangao/pinpai6.png" alt />
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
export default {
  data() {
    return {
      value:'',
      active: 0
    };
  },
  methods: {
    onSearch() {
      alert('无此产品,请去别家');
    },
    goPath(path){
      this.$router.replace(path)
    }
  }
};
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style lang="stylus" rel="stylesheet/stylus" scoped>
    .w-remen {
      .w-header {
        img {
          margin-top: 10px;
          width: 100%;
          height: 120px;
        }
      }

      .w-body {
        width: 100%;
      }

      .w-imgList {
        border: 1px solid #eee;
        box-sizing: border-box;
        margin: 10px;
        display: flex;
        flex-wrap: wrap;
        text-align: center;

        .w-item {
          width: 25%;
          margin-top 10px
          img {
            width: 90%;
            height: 80px;
            border-radius: 50%;
          }
          .w-describe {
            font-size 10px
            margin: 3px ;
          }
        }
      }
    }

    .w-xianhua {
      .w-header, .w-body {
        width: 100%;

        .w-imgList {
          position: relative;

          .w-changhe {
            position: absolute;
            left: -350px;
            top: 16px;
            width: 100%;
            height: 450px;
            margin-bottom: 20px;
            font-size: 30px;
          }

          .w-item {
            margin-top: 10px;
          }
        }
      }
    }

    .w-cokes {
      .w-header, .w-body {
        width: 100%;
        .w-pinpaiList {
          border: 1px solid #eeeeee;
          margin: 20px 20px;
          display: flex;
          flex-wrap: wrap;
          li {
            width: 30%;
            height: 100px;
            margin-left: 10px;
            border-top 1px solid #eeeeee
            margin-top -1px
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
</style>
