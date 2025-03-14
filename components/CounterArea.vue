<template>
  <section class="counter-area">
    <div class="container">
      <div class="counter-bg" style="background-image: url(/img/bg/counter-bg1.png);">
        <div class="row no-gutters align-items-center">
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="counters d-flex align-items-center mb-30 ml-50">
              <div class="counters__icon mr-15">
                <i class="flaticon-podium"></i>
              </div>
              <div class="counters__content">
                <h1><span class="counter">300</span>+</h1>
                <h6>Years Of Foundation</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="counters d-flex align-items-center mb-30 ml-50">
              <div class="counters__icon mr-15">
                <i class="fal fa-user-friends"></i>
              </div>
              <div class="counters__content">
                <h1><span class="counter">50</span><b>k</b>+</h1>
                <h6>People In City</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="counters d-flex align-items-center mb-30 ml-35">
              <div class="counters__icon mr-15">
                <i class="flaticon-placard"></i>
              </div>
              <div class="counters__content">
                <h1><span class="counter">12</span><b>k</b>+</h1>
                <h6>Square Feet</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="counters d-flex align-items-center mb-30">
              <div class="counters__icon mr-15">
                <i class="flaticon-placard"></i>
              </div>
              <div class="counters__content">
                <h1><span class="counter">5</span><b>k</b>+</h1>
                <h6>Successful Program</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
onMounted(async () => {
  if (process.client) {
    const $ = (await import('jquery')).default;
    $('.counter').each(function () {
      $(this).prop('Counter', 0).animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
      );
    });
  }
});
</script>