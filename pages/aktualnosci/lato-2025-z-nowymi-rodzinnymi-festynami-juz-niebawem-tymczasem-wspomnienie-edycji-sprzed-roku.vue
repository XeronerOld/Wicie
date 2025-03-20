<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="page-title pt-6 text-center">
            <h1>Lato 2025</h1>
            <div class="breadcrumb">
              <ul class="breadcrumb-list">
                <li>
                  <NuxtLink to="/aktualnosci">Aktualności</NuxtLink>
                </li>
                <li>
                  <NuxtLink
                      to="/aktualnosci/lato-2025-z-nowymi-rodzinnymi-festynami-juz-niebawem-tymczasem-wspomnienie-edycji-sprzed-roku">
                    Lato 2025
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="content-image">
            <img src="/images/aktualnosci/lato-2025-z-nowymi-rodzinnymi-festynami-juz-niebawem-tymczasem-wspomnienie-edycji-sprzed-roku/main.jpg" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
    <!--events-details-area start-->
    <section class="events-list-area pt-40 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="text-center pb-50 pr-30">
              <h1>Lato 2025 z nowymi Rodzinnymi Festynami już niebawem 🙂</h1>
              <p>
                Lato 2025 z nowymi Rodzinnymi Festynami już niebawem 🙂<br>
                a tymczasem wspomnienie edycji sprzed roku.
              </p>
            </div>
          </div>
          <div class="col-12">
            <MasonryGrid
                group="Lato 2025 z nowymi Rodzinnymi Festynami już niebawem"
                :items="images"
                title="Lato 2025 z nowymi Rodzinnymi Festynami już niebawem"
                base-path="/images/aktualnosci/lato-2025-z-nowymi-rodzinnymi-festynami-juz-niebawem-tymczasem-wspomnienie-edycji-sprzed-roku/"
            />
          </div>
        </div>
      </div>
    </section>
    <!--events-details-area end-->
  </div>
</template>

<script setup lang="ts">
import MasonryGrid from "~/components/MasonryGrid.vue";
import { useHead } from '@unhead/vue';

// Definiowanie obrazów
const images = [
  "67d40ecc4b14d099053060.jpg",
  "67d40ecc91c18643301537.jpg",
  "67d40ecc52859573222656.jpg",
  "67d40eccdfb27225871074.jpg",
  "67d40ecd0a765306074598.jpg",
  "67d40ecd51a69888332661.jpg",
  "67d40ecd700f2089910528.jpg",
  "67d40ecdb04e7892733912.jpg",
  "67d40ecdca0eb964058969.jpg",
  "67d40ece3c587107004197.jpg",
  "67d40ece16624751949938.jpg",
  "67d40ece70759686957078.jpg",
  "67d40ecea92d3443923970.jpg",
  "67d409ec7cc45607150505.jpg",
  "67d409ec7fe8d405880824.jpg",
  "67d409ecbecd2687428791.jpg",
  "67d409ecc5da9043670865.jpg",
  "67d409ed1cd8a880904544.jpg",
  "67d409ed1e084344122388.jpg",
  "67d409ed5fe4c945791417.jpg",
  "67d409ed84e15530169859.jpg",
  "67d409eda5f89865709281.jpg",
  "67d409edba38e393308387.jpg",
  "67d409ede9809430990983.jpg"
];

// Konfiguracja SEO z useHead
useHead({
  title: 'Lato 2025 z nowymi Rodzinnymi Festynami - Aktualności',
  meta: [
    {
      name: 'description',
      content: 'Poznaj szczegóły Lata 2025 z nowymi Rodzinnymi Festynami już niebawem! Wspomnienie edycji sprzed roku i galeria zdjęć. Sprawdź aktualności!'
    },
    {
      name: 'keywords',
      content: 'Lato 2025, Rodzinne Festyny, aktualności, galeria zdjęć, wydarzenia 2025'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph (dla mediów społecznościowych)
    {
      property: 'og:title',
      content: 'Lato 2025 z nowymi Rodzinnymi Festynami już niebawem'
    },
    {
      property: 'og:description',
      content: 'Sprawdź, co czeka nas podczas Lata 2025! Nowe Rodzinne Festyny i wspomnienia z poprzedniej edycji w galerii zdjęć.'
    },
    {
      property: 'og:image',
      content: '/images/aktualnosci/lato-2025-z-nowymi-rodzinnymi-festynami-juz-niebawem-tymczasem-wspomnienie-edycji-sprzed-roku/main.jpg'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.plaktualnosci/lato-2025-z-nowymi-rodzinnymi-festynami-juz-niebawem-tymczasem-wspomnienie-edycji-sprzed-roku'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Lato 2025 z nowymi Rodzinnymi Festynami już niebawem'
    },
    {
      name: 'twitter:description',
      content: 'Nowe Rodzinne Festyny w 2025 roku! Zobacz galerię z poprzedniej edycji i przygotuj się na lato.'
    },
    {
      name: 'twitter:image',
      content: '/images/aktualnosci/lato-2025-z-nowymi-rodzinnymi-festynami-juz-niebawem-tymczasem-wspomnienie-edycji-sprzed-roku/main.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.plaktualnosci/lato-2025-z-nowymi-rodzinnymi-festynami-juz-niebawem-tymczasem-wspomnienie-edycji-sprzed-roku'
    }
  ]
});
</script>

<style scoped>
.single-slider {
  min-height: initial;
}

.content-image {
  text-align: center;
  margin: 20px 0;
}

.content-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image-caption {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
  font-style: italic;
}
</style>