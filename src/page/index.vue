<template>
  <div>
    <header class="header"> 
      <div class="back iconfont">&#xe624;</div>
      <div class="search"><input class="search-input" type="text" placeholder="请输入你要搜索的关键字"></div>
      <div class="city">城市</div>
    </header>
    <swiper :options="swiperOption">
    <swiper-slide>
      <div class="swiper-img-con">
        <img class="swiper-img" src="../assets/imges/home.jpg" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-img-con">
        <img class="swiper-img" src="../assets/imges/home1.jpg" alt="">
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      swiperOption:{
        autoplay:true,
        direction:"horizontal"
      }
    }
  }
}
</script>
<style scoped lang="stylus">
@import "../assets/style/variable.styl";
  .swiper-img-con
    width 100%
    .swiper-img
      width 100%
  .header
    display flex
    height .86rem
    line-height .48rem
    background $header-background
    font-size $font-size-medium-x
    .search
      flex 1
      margin .14rem .18rem
      background $init-background
      border-radius .1rem
      .search-input 
        width 90%
        padding-left .1rem
    .city
      width 1.14rem
      line-height .86rem
      text-align center
    .back
      width .64rem
      line-height .86rem
      text-align center 
      color $init-background
</style>
