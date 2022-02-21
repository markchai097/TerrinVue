<template>
  <div>
    <div class="hero">
      <index-floor title="首页推荐" :data="recommendedItems" />
      <index-floor title="熱門商品" :data="recommendedItems" />
    </div> 
  </div>
</template>

<script>
  import IndexFloor from "../components/IndexFloor.vue";
  export default {
    components: { IndexFloor },
    data() {
      return {
        recommendedItems: [
          {title:'Terrin 8000系列',details:'英特爾I7處理器|1T SSD 16GB記憶卡|英特爾HD顯卡3090含共享顯卡内存',price:'56880',pic:require("@/assets/images/Indeximg01.png")},
          {title:'Terrin 6000系列',details:'英特爾I5處理器|512GB SSD 16GB記憶卡|英特爾HD顯卡3090含共享顯卡内存',price:'38880',pic:require("@/assets/images/Indeximg02.png")},
          {title:'Terrin 1314系列',details:'英特爾I3處理器|256GB SSD 8GB記憶卡|英特爾HD顯卡3090含共享顯卡内存',price:'32880',pic:require("@/assets/images/Indeximg03.png")},
          {title:'Terrin 5200系列',details:'英特爾I5處理器|256GB SSD 16GB記憶卡|英特爾HD顯卡3090含共享顯卡内存',price:'32880',pic:require("@/assets/images/Indeximg04.png")},
          ]
      }
    },
    }
</script>

<style lang="scss" scoped>

</style>