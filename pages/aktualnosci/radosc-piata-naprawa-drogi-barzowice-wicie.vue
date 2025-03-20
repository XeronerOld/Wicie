<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="page-title pt-6 text-center">
            <h1>NAPRAWA DROGI BARZOWICE</h1>
            <div class="breadcrumb">
              <ul class="breadcrumb-list">
                <li>
                  <NuxtLink to="/aktualnosci">Aktualności</NuxtLink>
                </li>
                <li>
                  <NuxtLink
                      to="/aktualnosci/radosc-piata-naprawa-drogi-barzowice-wicie">
                    NAPRAWA DROGI BARZOWICE
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--events-details-area start-->
    <section class="events-list-area pt-40 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4 mb-5">
            <div class="content-image mt-0">
              <img src="/images/aktualnosci/radosc-piata-naprawa-drogi-barzowice-wicie/main.jpg" class="img-fluid">
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <div class="pb-50 pr-30">
              <h1>Radość piąta: NAPRAWA DROGI BARZOWICE - WICIE</h1>
              <div class="">
                Na wniosek Rady Sołeckiej Wicia, Wydział Drogowy Starostwa Powiatowego w Sławnie, w dwóch etapach
                zlikwidował niebezpieczne wyboje na odcinku leśnym drogi: Barzowice - Wicie. Na początku kwietnia tego
                roku usunięto drzewa powodujące „wysadziny” a w połowie grudnia, usunięto karpy, wycięto obszary
                wygarbień i wypełniono te obszary masą bitumiczną. Nareszcie możemy jeździć bezpiecznie.
              </div>
            </div>
          </div>
          <div class="col-12">
            <MasonryGrid
                group="Radość piąta: NAPRAWA DROGI  BARZOWICE - WICIE"
                :items="images"
                title="Radość piąta: NAPRAWA DROGI  BARZOWICE - WICIE"
                base-path="/images/aktualnosci/radosc-piata-naprawa-drogi-barzowice-wicie/"
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
  "600c18de1be4f661039176.jpg",
  "600c18e5b2a43985047728.jpg",
  "600c18e9d3384874671577.jpg",
  "600c18e213da3110190428.jpg",
  "600c18e564267208927862.jpg",
  "600c18e897591538791803.jpg",
  "600c18ec06823187702056.jpg",
  "600c18ee7c34e525231598.jpg"
];

// Konfiguracja SEO z useHead
useHead({
  title: 'Naprawa drogi Barzowice - Wicie - Radość piąta | 28 marca 2024 r.',
  meta: [
    {
      name: 'description',
      content: 'Naprawa drogi Barzowice - Wicie zakończona! Wydział Drogowy Starostwa w Sławnie usunął wyboje i zapewnił bezpieczeństwo. Sprawdź szczegóły na morzewicie.pl.'
    },
    {
      name: 'keywords',
      content: 'naprawa drogi, Barzowice, Wicie, Starostwo Powiatowe Sławno, bezpieczeństwo drogowe, inwestycja 2024, Rada Sołecka Wicia'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph (dla mediów społecznościowych)
    {
      property: 'og:title',
      content: 'Naprawa drogi Barzowice - Wicie - Radość piąta | 28 marca 2024 r.'
    },
    {
      property: 'og:description',
      content: 'Droga Barzowice - Wicie naprawiona! Usunięto wyboje i karpy, a odcinek leśny jest teraz bezpieczny. Zobacz szczegóły na morzewicie.pl.'
    },
    {
      property: 'og:image',
      content: '/images/aktualnosci/radosc-piata-naprawa-drogi-barzowice-wicie/main.jpg'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/aktualnosci/radosc-piata-naprawa-drogi-barzowice-wicie'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Naprawa drogi Barzowice - Wicie - Radość piąta'
    },
    {
      name: 'twitter:description',
      content: 'Bezpieczna droga Barzowice - Wicie po naprawie! Sprawdź szczegóły inwestycji na morzewicie.pl.'
    },
    {
      name: 'twitter:image',
      content: '/images/aktualnosci/radosc-piata-naprawa-drogi-barzowice-wicie/main.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/aktualnosci/radosc-piata-naprawa-drogi-barzowice-wicie'
    }
  ]
});
</script>

<style lang="scss" scoped>
.single-slider {
  min-height: initial;
}

.highlight {
  background-color: #f1f8ff;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
}

.events-list-area {
  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    margin: 8px 0;
    padding-left: 20px;
    position: relative;
  }

  li:before {
    content: "✓";
    color: #27ae60;
    position: absolute;
    left: 0;
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
}
</style>