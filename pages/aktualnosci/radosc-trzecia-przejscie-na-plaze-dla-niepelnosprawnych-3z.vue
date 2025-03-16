<template>
  <div>
    <div class="slider-area pos-rel" style="height: 300px; overflow: hidden;">
      <div
          class="single-slider slider-height pos-rel d-flex align-items-center align-items-lg-end"
          style="background-image: url(/images/aktualnosci/radosc-trzecia-przejscie-na-plaze-dla-niepelnosprawnych-3z/main.jpg); background-position: center; height: 300px;"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="page-title text-center mt-0 pb-50">
                <h2 class="text-white">PRZEJŚCIE NA PLAŻĘ DLA NIEPEŁNOSPRAWNYCH</h2>
                <div class="breadcrumb">
                  <ul class="breadcrumb-list">
                    <li>
                      <NuxtLink to="/aktualnosci">Aktualności</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                          to="/aktualnosci/radosc-trzecia-przejscie-na-plaze-dla-niepelnosprawnych-3z">
                        PRZEJŚCIE NA PLAŻĘ DLA NIEPEŁNOSPRAWNYCH
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
              <h1>Radość trzecia: PRZEJŚCIE NA PLAŻĘ DLA NIEPEŁNOSPRAWNYCH – 3Z</h1>
              <div class="">
                Cieszymy się każdym dobrem które nas spotyka, a TO dobro doceniają najbardziej ci którzy mają problem z poruszaniem się.
                <br>
                Urząd Gminy Darłowo, realizując zapis w realizacji funduszu sołeckiego Sołectwa Wicie na 2020 r. w uzgodnieniu z Urzędem Morskim w Szczecinie,
                <br>
                zbudował przy wejściu 3Z, utwardzone, wygodne i estetyczne dojście do plaży, jako trakt dla niepełnosprawnych a także dla rodzin z małymi dziećmi.
                <br>
                Tym samym Wicie posiada już dwa takie dojścia - wcześniej zbudowano nam podobne po stronie wschodniej, przy wejściu 3W.
              </div>
            </div>
          </div>
          <div class="col-12">
            <MasonryGrid
                group="Radość trzecia: PRZEJŚCIE NA PLAŻĘ DLA NIEPEŁNOSPRAWNYCH – 3Z"
                :items="images"
                title="Radość trzecia: PRZEJŚCIE NA PLAŻĘ DLA NIEPEŁNOSPRAWNYCH – 3Z"
                base-path="/images/aktualnosci/radosc-trzecia-przejscie-na-plaze-dla-niepelnosprawnych-3z/"
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
  "main.jpg",
];

// Konfiguracja SEO z useHead
useHead({
  title: 'Przejście na plażę dla niepełnosprawnych w Wiciu – 3Z | 2020',
  meta: [
    {
      name: 'description',
      content: 'Nowe przejście na plażę 3Z w Wiciu dla niepełnosprawnych i rodzin z dziećmi, zbudowane przez Gminę Darłowo w 2020 r. Sprawdź szczegóły!'
    },
    {
      name: 'keywords',
      content: 'przejście na plażę, Wicie, niepełnosprawni, Gmina Darłowo, fundusz sołecki, plaża 3Z, dostępność'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph (dla mediów społecznościowych)
    {
      property: 'og:title',
      content: 'Przejście na plażę dla niepełnosprawnych w Wiciu – 3Z | 2020'
    },
    {
      property: 'og:description',
      content: 'Wicie z nowym przejściem na plażę 3Z dla niepełnosprawnych i rodzin z dziećmi. Inwestycja Gminy Darłowo z 2020 r. Zobacz na morzewicie.pl!'
    },
    {
      property: 'og:image',
      content: '/images/aktualnosci/radosc-trzecia-przejscie-na-plaze-dla-niepelnosprawnych-3z/main.jpg'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/aktualnosci/radosc-trzecia-przejscie-na-plaze-dla-niepelnosprawnych-3z'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Przejście na plażę dla niepełnosprawnych w Wiciu – 3Z'
    },
    {
      name: 'twitter:description',
      content: 'Nowe dojście na plażę 3Z w Wiciu dla niepełnosprawnych i rodzin. Szczegóły inwestycji z 2020 r. na morzewicie.pl.'
    },
    {
      name: 'twitter:image',
      content: '/images/aktualnosci/radosc-trzecia-przejscie-na-plaze-dla-niepelnosprawnych-3z/main.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/aktualnosci/radosc-trzecia-przejscie-na-plaze-dla-niepelnosprawnych-3z'
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