<template>
  <div>
<div class="floor" id="f1">
      <div class="container">
        <div class="floor_top">
          {{ title }}
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="food_item food_item1">
              <div class="desc">
                <p class="name">{{ data[0].title }}</p>
                <p class="details">
                  {{ data[0].details }}
                </p>
                <p class="price">${{ data[0].price }}</p>
                <div @click="goDetail(0)" id="one" class="view">查看详情</div>
              </div>
              <img :src="`${data[0].pic}`" alt="" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="food_item food_item2">
              <div class="desc">
                <p class="name">{{ data[1].title }}</p>
                <p class="details">{{ data[1].details }}</p>
                <p class="price">￥{{ data[1].price }}</p>
                <div @click="goDetail(1)" id="two" class="view">查看详情</div>
              </div>
              <img :src="`${data[1].pic}`" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="food_item food_item3">
              <div class="desc">
                <p class="name">{{ data[2].title }}</p>
                <p class="price">￥{{ data[2].price }}</p>
                <div @click="goDetail(2)" id="three" class="view">查看详情</div>
              </div>
              <img :src="`${data[2].pic}`" alt="" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="product">
              <img :src="`${data[3].pic}`" alt="" />
              <h2>{{ data[3].title }}</h2>
              <p>￥{{ data[3].price }}</p>
              <a @click="goDetail(3)" id="four">查看详情</a>
            </div>
          </div>
          <div class="col-md-2">
            <div class="product">
              <img :src="`${data[3].pic}`" alt="" />
              <h2>{{ data[3].title }}</h2>
              <p>￥{{ data[3].price }}</p>
              <a @click="goDetail(3)" id="four">查看详情</a>
            </div>
          </div>
          <div class="col-md-2">
            <div class="product">
              <img :src="`${data[3].pic}`" alt="" />
              <h2>{{ data[3].title }}</h2>
              <p>￥{{ data[3].price }}</p>
              <a @click="goDetail(3)" id="four">查看详情</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["title", "data"],
  }
</script>

<style scoped src="../assets/css/item_cat.css"></style>