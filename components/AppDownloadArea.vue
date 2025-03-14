<template>
  <section class="app-download-area" style="background-image: url(/img/Ev83jR4MFzo-HD.jpg);">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-lg-6 col-md-8 col-12">
          <div class="app-wrapper ">
            <div class="section-title white-title text-left mb-15">
              <h6 class="left_line pl-55">film promocyjny #1</h6>
              <h2 class="mb-0">Witamy w Gminie Darłowo </h2>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-4 col-12">
          <div class="video-area text-right  mr-55">
            <a
                class="popup-video video-border mr-55"
                href="https://www.youtube.com/watch?v=Ev83jR4MFzo"
            >
              <i class="fas fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="app-download-area" style="background-image: url(/img/6E8iManaWbM-HD.jpg);">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-lg-6 col-md-4 col-12">
          <div class="video-area text-left  mr-55">
            <a
                class="popup-video video-border mr-55"
                href="https://www.youtube.com/watch?v=Ev83jR4MFzo"
            >
              <i class="fas fa-play"></i>
            </a>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-8 col-12">
          <div class="app-wrapper ">
            <div class="section-title white-title text-left mb-15">
              <h6 class="left_line pl-55">film promocyjny #2</h6>
              <h2 class="mb-0">Witamy w Gminie Darłowo </h2>
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
    await import('magnific-popup');
    $('.popup-video').magnificPopup({
      type: 'iframe',
    });
  }
});
</script>