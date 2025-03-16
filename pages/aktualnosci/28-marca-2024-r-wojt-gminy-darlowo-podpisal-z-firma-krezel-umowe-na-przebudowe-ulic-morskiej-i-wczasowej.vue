<template>
  <div>
    <div class="slider-area pos-rel" style="height: 300px; overflow: hidden;">
      <div
          class="single-slider slider-height pos-rel d-flex align-items-center align-items-lg-end"
          style="background-image: url(/images/aktualnosci/28-marca-2024-r-wojt-gminy-darlowo-podpisal-z-firma-krezel-umowe-na-przebudowe-ulic-morskiej-i-wczasowej/main.jpg); background-position: top; height: 300px;"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="page-title text-center mt-0 pb-50">
                <h1>28 marca 2024 r.</h1>
                <div class="breadcrumb">
                  <ul class="breadcrumb-list">
                    <li>
                      <NuxtLink to="/aktualnosci">Aktualności</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                          to="/aktualnosci/28-marca-2024-r-wojt-gminy-darlowo-podpisal-z-firma-krezel-umowe-na-przebudowe-ulic-morskiej-i-wczasowej">
                        28 marca 2024 r.
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--events-details-area start-->
    <section class="events-list-area pt-40 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="pb-50 pr-30">
              <h1>Wspaniała wiadomość dla mieszkańców Wicia!</h1>
              <div class="highlight">
                <p>28 marca 2024 r. Wójt Gminy Darłowo podpisał z firmą KRĘŻEL umowę na przebudowę ulic Morskiej i Wczasowej. Ta inwestycja przyniesie wiele korzyści mieszkańcom oraz przybywającym do nas turystom.</p>
              </div>
              <br>
              <h2>Zakres prac obejmuje:</h2>
              <ul>
                <li>Ulicę Morską o długości 309 metrów oraz ulicę Wczasową o długości 972 metrów.</li>
                <li>Przebudowę jezdni, poboczy, skrzyżowań i zjazdów.</li>
                <li>Budowę chodników i ciągu pieszego.</li>
                <li>Parkingi dla wygody mieszkańców i turystów.</li>
                <li>Kanalizację deszczową.</li>
                <li>Przełożenie sieci wodociągowej i kanalizacyjnej.</li>
                <li>Budowę oświetlenia ulicznego na terenie całej inwestycji, w sumie 28 punktów świetlnych.</li>
                <li>Usunięcie kolizji elektroenergetycznych.</li>
                <li>Przebudowę sieci telekomunikacyjnej.</li>
              </ul>
              <p class="cost">Łączny koszt tej inwestycji to 8 200 000 zł</p>
              <p class="thanks">Dziękujemy!!</p>
            </div>
          </div>
          <div class="col-12">
            <MasonryGrid
                group="28 marca 2024 r. Wójt Gminy Darłowo podpisał z firmą KRĘŻEL umowę na przebudowę ulic Morskiej i Wczasowej"
                :items="images"
                title="28 marca 2024 r. Wójt Gminy Darłowo podpisał z firmą KRĘŻEL umowę na przebudowę ulic Morskiej i Wczasowej"
                base-path="/images/aktualnosci/28-marca-2024-r-wojt-gminy-darlowo-podpisal-z-firma-krezel-umowe-na-przebudowe-ulic-morskiej-i-wczasowej/"
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
  "662630dfdb8c4597986137.jpg",
  "662630dfdf8e8340015881.jpg",
  "662630e015a43583079653.jpg"
];

// Konfiguracja SEO z useHead
useHead({
  title: '28 marca 2024 r. - Przebudowa ulic Morskiej i Wczasowej w Wiciu',
  meta: [
    {
      name: 'description',
      content: '28 marca 2024 r. Wójt Gminy Darłowo podpisał umowę na przebudowę ulic Morskiej i Wczasowej w Wiciu. Sprawdź szczegóły inwestycji za 8,2 mln zł!'
    },
    {
      name: 'keywords',
      content: 'przebudowa ulic, Wicie, ulica Morska, ulica Wczasowa, inwestycja 2024, Gmina Darłowo, Morze Wicie'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph (dla mediów społecznościowych)
    {
      property: 'og:title',
      content: '28 marca 2024 r. - Przebudowa ulic Morskiej i Wczasowej w Wiciu'
    },
    {
      property: 'og:description',
      content: 'Wójt Gminy Darłowo podpisał umowę na przebudowę ulic w Wiciu za 8,2 mln zł. Nowe chodniki, parkingi i oświetlenie już wkrótce na morzewicie.pl!'
    },
    {
      property: 'og:image',
      content: '/images/aktualnosci/28-marca-2024-r-wojt-gminy-darlowo-podpisal-z-firma-krezel-umowe-na-przebudowe-ulic-morskiej-i-wczasowej/main.jpg'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/aktualnosci/28-marca-2024-r-wojt-gminy-darlowo-podpisal-z-firma-krezel-umowe-na-przebudowe-ulic-morskiej-i-wczasowej'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: '28 marca 2024 r. - Przebudowa ulic Morskiej i Wczasowej w Wiciu'
    },
    {
      name: 'twitter:description',
      content: 'Inwestycja za 8,2 mln zł w Wiciu! Przebudowa ulic Morskiej i Wczasowej rusza wkrótce. Szczegóły na morzewicie.pl.'
    },
    {
      name: 'twitter:image',
      content: '/images/aktualnosci/28-marca-2024-r-wojt-gminy-darlowo-podpisal-z-firma-krezel-umowe-na-przebudowe-ulic-morskiej-i-wczasowej/main.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/aktualnosci/28-marca-2024-r-wojt-gminy-darlowo-podpisal-z-firma-krezel-umowe-na-przebudowe-ulic-morskiej-i-wczasowej'
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

  .cost {
    font-weight: bold;
    color: #e74c3c;
    font-size: 1.2em;
  }

  .thanks {
    text-align: center;
    font-style: italic;
    color: #7f8c8d;
    margin-top: 20px;
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