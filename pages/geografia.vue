<template>
  <div>
    <div
        class="header-subpage"
        style="padding-top: 90px;background-position: right; height: 350px; display: flex; align-items: center;">
      <img src="/images/herb.png" style="width: 200px;position: absolute;top:100px;right: 5%;" alt="">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="page-title pt-0 text-center">
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
    <!--    <div class="container">-->
    <!--      <div class="row">-->
    <!--        <div class="col-12">-->
    <!--          <div class="content-image">-->
    <!--            <img src="/img/slider/slider1.jpg" class="img-fluid">-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="container" style="width: 100%; margin-bottom: -10px;">
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