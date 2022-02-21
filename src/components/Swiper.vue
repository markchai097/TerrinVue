<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperImg" :key="index">
        <img :src="item.img" :alt="item.name" />
      </swiper-slide>
      <!-- 左右箭头 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <!-- 页数指示点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props: ['swiperImg'],
    data() {
      return {
        swiperOption: {
        loop: true, //循环
        effect: 'fade', //特效  fade渐变  cube立方体
        speed: 3000,
        //自动滚动
        autoplay: {
          delay: 5000, //动画间隔时长,单位毫秒
          // 人为交互之后, 是否要停止自动滚动, 默认true 停止
          disableOnInteraction: false,
        },
        // 关联 左右箭头 按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // 关联 指示点 元素
        pagination: {
          el: '.swiper-pagination',
        },
      },
      }
    },
  }
</script>

<style lang="scss" scoped>
.swiper{
  background: #000;
}
img {
  display: block;
    width: auto;
    height: 80vh;
    margin: 0 auto;
  }
  .swiper-button-next, .swiper-button-prev{
    color: #fff;
  }
</style>