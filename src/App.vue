<template>
  <div style="background: #000;">
    <Navbar/>
    <Swiper v-show="$route.meta.showSwiper"  :swiperImg="bannerList"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Swiper from './components/Swiper.vue';
import Footer from "./components/Footer.vue";
  export default {
    components: { Navbar, Swiper, Footer },
    data() {
    return {
      bannerList: [
        {img:require("@/assets/images/bg01.jpeg"),name:'bg01'},
        {img:require("@/assets/images/bg02.jpeg"),name:'bg02'},
        {img:require("@/assets/images/bg03.jpeg"),name:'bg03'},
      ],
    }
  },

}
</script>

<style lang="scss" scoped>
@import url("./assets/css/style.css");
</style>