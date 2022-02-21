<template>
  <div class="hero">
    <div class="container">
      <b-breadcrumb>
        <b-breadcrumb-item to="/">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
          Home
        </b-breadcrumb-item>
        <b-breadcrumb-item active :text="$route.name"></b-breadcrumb-item>
      </b-breadcrumb>
    </div>
    <div class="container">
      <div class="row d-flex">
        <div class="col-lg-6 pl-4">
          <div class="sm-contact">
            <p class="contact add"><i class="fas fa-map-marker-alt"
                style="margin-right: 10px;"></i><span>地址：103台x市大x區xx街x3巷2x號</span>
            </p>
            <p class="contact phone"><i class="fas fa-phone-alt"
                style="margin-right: 10px;"></i><span></span>電話：02-2xxxx208</span>
            </p>
            <p class="contact email"><i class="fas fa-envelope-open-text"
                style="margin-right: 10px;"></i><span></span>E-mail：xxxxxxice@gmail.com</span>
            </p>
            <p class="contact time"><i class="fas fa-business-time"
                style="margin-right: 10px;"></i><span></span>營業時間：週一至週五
              09:30-18:30</span></p>
            <iframe
              src="https://maps.google.com.tw/maps?f=q&amp;hl=zh-TW&amp;geocode=&amp;q=(本店為示範店家，僅提供展示)&amp;z=17&amp;output=embed"
              id="map" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </div>
        </div>
        <div class="col-lg-6 pr-4">
          <p style="color: #ccc;">如果你喜歡我們的產賊，想要進一步了解服務流程或費用，歡迎您留下資訊，我們會盡快與您聯絡。</p>
          <form method="post" action="" class="affa-form-contact margin-top20 contactForm">
            <input name="" type="hidden"
              value="">
            <input type="hidden" id="isCustom">
            <div class="row">
              <div class="col-sm-12">
                <label style="padding-top: 52px;">Name 姓名 *</label>
                <input type="text" name="col1462" class="form-control" required="">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label>Phone 連絡電話 *</label>
                <input type="text" name="col1463" class="form-control" required="">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label>Email 電子信箱 *</label>
                <input type="text" name="col1464" class="form-control" required="">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label>Message 備註 *</label>
                <textarea name="col1469" class="form-control" rows="7"></textarea>
              </div>
            </div>
            <input type="button" id="contactSubmit" value="SUBMIT 確認送出" style="margin-top: 20px;">
            <div class="submit-status"></div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>