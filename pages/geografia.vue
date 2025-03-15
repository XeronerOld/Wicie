<template>
  <div>
    <div class="slider-area pos-rel" style="height: 300px; overflow: hidden;">
      <div
          class="single-slider slider-height pos-rel d-flex align-items-center align-items-lg-end"
          style="background-image: url(/img/slider/slider1.jpg); height: 300px;"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="page-title text-center mt-0 pb-50">
                <h1>Geografia</h1>
                <div class="breadcrumb">
                  <ul class="breadcrumb-list">
                    <li><a href="/">Strona Główna</a></li>
                    <li>
                      <NuxtLink to="/geografia">Geografia</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%; margin-bottom: -10px;">
      <iframe
          width="100%"
          style="height: 100vh;"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Wicie,%20Dar%C5%82owo+(Miasto%20Wicie)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
      >
        <a href="https://www.gps.ie/collections/drones/">best drones</a>
      </iframe>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@unhead/vue';

// Definiowanie metadanych SEO z domeną morzewicie.pl
useHead({
  title: 'Geografia Wicia - Lokalizacja i Mapa | Morze Wicie',
  meta: [
    {
      name: 'description',
      content: 'Poznaj geografię Wicia - sprawdź lokalizację na mapie Google. Wicie, Darłowo - idealne miejsce na wakacje nad morzem. Więcej na morzewicie.pl!',
    },
    {
      name: 'keywords',
      content: 'Wicie geografia, mapa Wicie, Wicie Darłowo, lokalizacja Wicie, wakacje Wicie, morzewicie.pl',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Geografia Wicia - Lokalizacja i Mapa | Morze Wicie',
    },
    {
      property: 'og:description',
      content: 'Odkryj położenie Wicia na mapie Google. Idealna lokalizacja na wakacje nad Bałtykiem. Szczegóły na morzewicie.pl!',
    },
    {
      property: 'og:image',
      content: 'https://morzewicie.pl/img/slider/slider1.jpg', // Pełny URL do obrazu głównego
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/geografia',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/geografia',
    },
  ],
});
</script>

<style scoped>
.single-slider {
  min-height: initial;
}
</style>