<template>
  <van-address-edit
    :area-list="areaList"
    show-postal
    show-delete
    show-set-default
    show-search-result
    :search-result="searchResult"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave('/home')"
    @delete="onDelete"
   
  />
</template>




<script>
  import areaList from '../js/area'
      export default {
        data() {
          return {
            areaList,
            searchResult: []
          }
        },

        methods: {
          onSave(path) {
            this.$toast('马上送达，请耐心等待'),
            setTimeout( () => {
              this.$router.replace(path)
            }, 3000);  
          },
          onDelete() {
            this.$toast('成功删除');
          },
          // onChangeDetail(val) {
          //   if (val) {
          //     this.searchResult = [{
          //       name: '黄龙万科中心',
          //       address: '杭州市西湖区'
          //     }];
          //   } else {
          //     this.searchResult = [];
          //   }
          // }
        }
      }
</script>





<style lang='stylus'>
                
</style>

