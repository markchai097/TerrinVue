<template>
  <div class="nav" v-bind:class="{ nav2: $route.meta.showHeader == true }">
    <div class="container">
      <b-navbar toggleable="lg" type="dark" variant="">
        <b-navbar-brand to="/">
          <img class="img-brand" src="@/assets/images/logo.png" alt="" />
          <h1 class="navbar_brand_title">特靈數碼</h1>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              v-for="(item, i) in navList"
              :key="i"
              :index="item.name"
              :to="item.name"
            >
              {{ item.navItem }}
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "/",
          navItem: "Home",
        },
        {
          name: "/about",
          navItem: "AboutUs",
        },
        {
          name: "/service",
          navItem: "Service",
        },
        {
          name: "/mall/mallall",
          navItem: "Mall",
        },
        {
          name: "/contact",
          navItem: "ContactUs",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  height: 190px;

  .img-brand {
    height: 100%;
    align-items: center;
    display: block;
  }

  .navbar_brand_title {
    white-space: nowrap;
    overflow: hidden;
    width: 20%;
    text-indent: -9999px;
    position: absolute;
  }
}
</style>
