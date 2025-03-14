<template>
  <section class="brand-area pb-100">
    <div class="container">
      <div class="brand-bg white-bg">
        <div class="row brand-active">
          <div v-for="(brand, index) in brands" :key="index" class="col-xl-3">
            <div class="brand-slide">
              <div class="brand-img">
                <a href="#"><img :src="brand.src" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const brands = ref([
  { src: '/img/brand/brand1.png' },
  { src: '/img/brand/brand2.png' },
  { src: '/img/brand/brand3.png' },
  { src: '/img/brand/brand4.png' },
  { src: '/img/brand/brand1.png' },
  { src: '/img/brand/brand2.png' },
]);

onMounted(async () => {
  if (process.client) {
    const $ = (await import('jquery')).default;
    await import('owl.carousel');
    $('.brand-active').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1000: { items: 4 },
      },
    });
  }
});
</script>