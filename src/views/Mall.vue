<template>
  <div>
    <div class="container">
      <b-breadcrumb>
        <b-breadcrumb-item to="/">
          <b-icon
            icon="house-fill"
            scale="1.25"
            shift-v="1.25"
            aria-hidden="true"
          ></b-icon>
          Home
        </b-breadcrumb-item>
        <b-breadcrumb-item active :text="$route.name"></b-breadcrumb-item>
      </b-breadcrumb>
    </div>
    <section class="pb-5 mb-5 px-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="d-lg-none mb-1">
              <button
                data-toggle="collapse"
                href="javascript:;"
                role="button"
                aria-expanded="false"
                aria-controls="collapseSide"
                class="btn wrapper-sidebar__menu-toggle"
              >
                線上購物<span class="arrow-down"></span>
              </button>
            </div>
            <div class="mt-3 mt-lg-0">
              <form class="search">
                <input type="text" placeholder="搜尋產品..." />
                <button type="submit"><b-icon icon="search"></b-icon></button>
              </form>
              <div class="list-group list-group-flush" id="accordion">
                <b-nav vertical class="leftSlider">
                  <b-nav-item :to="{name:'MallAll'}" active>全部</b-nav-item>
                  <b-nav-item-dropdown
                    id="my-nav-dropdown"
                    text="電腦"
                    toggle-class="nav-link-custom"
                    right
                  >
                    <b-dropdown-item>Terrin 阿爾法系列</b-dropdown-item>
                    <b-dropdown-item>Terrin 貝特系列</b-dropdown-item>
                    <b-dropdown-item>Terrin 圖靈系列</b-dropdown-item>
                  </b-nav-item-dropdown>
                  <b-nav-item>周邊產品</b-nav-item>
                  <b-nav-item>週年紀念</b-nav-item>
                </b-nav>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
