<template>
  <div>
    <!-- 头部 -->
   <header class="Header">
     <div class="Header-left">   
     </div>
     <div class="Header-center">
       <p>购物车</p>
     </div>
     <div class="Header-right">    
       </div> 
   </header>

   <!-- 中部 -->
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.id"
        :name="item.id"
      >
        <van-card
          :title="item.title"
          :desc="item.desc"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit('/order')"
    />
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checkedGoods: ['1', '2', '3'],
      goods: [{
        id: '1',
        title: '满天星',
        desc: '33枝红玫瑰',
        price: 19800,
        num: 1,
        thumb: 'https://img02.hua.com/tuijian/xianshi_9012446.jpg'
      }, {
        id: '2',
        title: '我只钟情你',
        desc: '33枝红玫瑰',
        price: 23600,
        num: 1,
        thumb: 'https://img02.hua.com/tuijian/xianshi_9012223.jpg'
      }, {
        id: '3',
        title: '爱在心头',
        desc: '33枝红玫瑰',
        price: 52000,
        num: 1,
        thumb: 'https://img02.hua.com/tuijian/xianshi_9012089.jpg'
      }]
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
     
    },
    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
    }
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit(path) {
     this.$router.replace(path)
      //  checkedGoods = ''
    }
  }
};
</script>

<style lang="less">

.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #FF734C;
    }
  }
}
</style>
