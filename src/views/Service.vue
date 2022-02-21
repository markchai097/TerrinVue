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
    <section class="pb-5 mb-5">
      <div class="container pb-5">
        <div class="row mb-3">
          <div class="col-md-6 col-lg-3 my-3">
            <figure class="service-card">
              <div class="image">
                <img src="@/assets/images/svimg02.png" alt="" />
              </div>
              <figcaption>
                <h3>服務項目01</h3>
                <p>
                  You know what we need, Hobbes? We need an attitude. Yeah, you
                  can't be cool if you don't have an attitude.
                </p>
              </figcaption>
              <router-link to="service/serviceInside" />
            </figure>
          </div>
          <div class="col-md-6 col-lg-3 my-3">
            <figure class="service-card">
              <div class="image">
                <img src="@/assets/images/svimg02.png" alt="" />
              </div>
              <figcaption>
                <h3>服務項目02</h3>
                <p>
                  You know what we need, Hobbes? We need an attitude. Yeah, you
                  can't be cool if you don't have an attitude.
                </p>
              </figcaption>
              <router-link :to="{ name: 'serviceInside' }" />
            </figure>
          </div>
          <div class="col-md-6 col-lg-3 my-3">
            <figure class="service-card">
              <div class="image">
                <img src="@/assets/images/svimg02.png" alt="" />
              </div>
              <figcaption>
                <h3>服務項目03</h3>
                <p>
                  You know what we need, Hobbes? We need an attitude. Yeah, you
                  can't be cool if you don't have an attitude.
                </p>
              </figcaption>
              <router-link :to="{ name: 'serviceInside' }" />
            </figure>
          </div>
          <div class="col-md-6 col-lg-3 my-3">
            <figure class="service-card">
              <div class="image">
                <img src="@/assets/images/svimg02.png" alt="" />
              </div>
              <figcaption>
                <h3>服務項目04</h3>
                <p>
                  You know what we need, Hobbes? We need an attitude. Yeah, you
                  can't be cool if you don't have an attitude.
                </p>
              </figcaption>
              <router-link :to="{ name: 'serviceInside' }" />
            </figure>
          </div>
        </div>
        <div class="d-flex  justify-content-center">
          <div class="overflow-auto">
            <b-pagination-nav
              :link-gen="linkGen"
              :number-of-pages="4"
              use-router
            ></b-pagination-nav>
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
