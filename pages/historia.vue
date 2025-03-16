<template>
  <div>
    <section class="page-title-area" style="background-image: url(/img/historia/home_farm_sectionbg5.jpg);">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="page-title text-center">
              <h1>Nazwa naszej miejscowości to <br> WICIE a nie Wici</h1>
              <div class="breadcrumb">
                <ul class="breadcrumb-list">
                  <li><a href="/">Strona Główna</a></li>
                  <li>
                    <NuxtLink to="/historia">Historia</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container text-white pb-5">
      <!-- Sekcja nagłówka i cytatu -->
      <div class="row justify-content-center text-center mb-20 mt-50 mt-sm-0">
        <div class="col-12 col-md-10 col-lg-8">
          <p class="lead">
            „Wykaz nazw miejscowości Ministerstwa Administracji i Cyfryzacji podaje formę dopełniacza - Wicia,
            z czego należy wnosić, że jest to rzeczownik nijaki, to Wicie, jak np. mycie – mycia.”
            <span class="d-block mt-2"><strong>Prof. Katarzyna Kłosińska</strong></span>
          </p>
        </div>
        <div class="col-12">
          <h1 class="mt-4 text-dark">Tak więc, przyjechaliśmy do Wicia i jesteśmy w Wiciu</h1>
        </div>
      </div>

      <div class="row align-items-center mt-100">
        <div class="col-xl-6 col-lg-6 col-md-12">
          <div class="about-img-box-04">
            <div class="row">
              <div class="col-12">
                <div class="img-view img-view-01">
                  <img :src="'/img/historia/colage.png'" alt="Wicie - collage zdjęć">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12">
          <div class="about-wrapper-02 about-wrapper-05 pl-50">
            <div class="section-title section-title-03 mb-55">
              <h6><i class="fal fa-map-marker-alt"></i> Wicie</h6>
              <h2 class="mb-2">Wizytówka naszej miejscowości</h2>
              <span class="mb-2">Wicie to nadmorska wieś położona między Darłowem a Jarosławcem.</span>
              <p class="mb-35">Miejscowość zlokalizowana jest między nadmorskimi wydmami od północy a łąkami i jeziorem
                Kopań od strony południowej. Chętnie przyjeżdżają tutaj rodziny z małymi dziećmi oraz turyści, którzy
                cenią sobie wypoczynek w ciszy i spokoju. Miejscowość położona jest na 262 km polskiego wybrzeża i stanowi
                jego dokładny geograficzny środek.</p>

              <h3>Poznaj Wicie bliżej</h3>
              <div class="d-flex flex-column align-items-start">
                <nuxt-link class="theme_btn mb-10 py-2" to="/oto-wicie-walory-turystyczne">Walory turystyczne <i class="fal fa-long-arrow-right"></i></nuxt-link>
                <nuxt-link class="theme_btn mb-10 py-2" to="/oto-wicie-bogactwa-przyrody">Bogactwa przyrody <i class="fal fa-long-arrow-right"></i></nuxt-link>
                <nuxt-link class="theme_btn mb-10 py-2" to="/oto-wicie-wicie-w-histori">Rys historyczny wsi Wicie <i class="fal fa-long-arrow-right"></i></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@unhead/vue';

// Definiowanie metadanych SEO z domeną morzewicie.pl
useHead({
  title: 'Historia Wicia - Poznaj Pochodzenie Nazwy | Morze Wicie',
  meta: [
    {
      name: 'description',
      content: 'Dowiedz się, dlaczego mówimy Wicie, a nie Wici. Poznaj historię i położenie nadmorskiej wsi Wicie między Darłowem a Jarosławcem na morzewicie.pl!',
    },
    {
      name: 'keywords',
      content: 'Wicie historia, nazwa Wicie, Wicie Darłowo, nadmorska wieś, Wicie Jarosławiec, morzewicie.pl',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Historia Wicia - Poznaj Pochodzenie Nazwy | Morze Wicie',
    },
    {
      property: 'og:description',
      content: 'Odkryj historię nazwy Wicie i jego położenie nad Bałtykiem. Wicie to idealne miejsce na spokojny wypoczynek. Więcej na morzewicie.pl!',
    },
    {
      property: 'og:image',
      content: 'https://morzewicie.pl/img/historia/colage.png', // Pełny URL do obrazu collage
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/historia',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/historia',
    },
  ],
});
</script>

<style scoped>
/* Dostosowanie dla mniejszych ekranów */
@media (max-width: 991px) {
  .single-slider {
    min-height: auto; /* Elastyczna wysokość na urządzeniach mobilnych */
    padding: 2rem 0;
  }

  h1 {
    font-size: 1.75rem; /* Mniejszy nagłówek */
  }

  h2 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.1rem;
  }

  .lead {
    font-size: 1rem; /* Mniejszy tekst cytatu */
  }
}
</style>