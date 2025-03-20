<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="page-title pt-6 text-center">
            <h1 class="">ODBUDOWA PLAŻY</h1>
            <div class="breadcrumb">
              <ul class="breadcrumb-list">
                <li>
                  <NuxtLink to="/aktualnosci">Aktualności</NuxtLink>
                </li>
                <li>
                  <NuxtLink
                      to="/aktualnosci/radosc-druga-odbudowa-plazy">
                    ODBUDOWA PLAŻY
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
          <div class="col-12 col-lg-4">
            <div class="content-image mt-0 mb-5">
              <img src="/images/aktualnosci/radosc-druga-odbudowa-plazy/main.jpg" class="img-fluid">
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <div class="pb-50 pr-30">
              <h1>Radość druga: ODBUDOWA PLAŻY</h1>
              <p>
                Oczekiwana od wielu lat i w zasadzie <strong>najważniejsza dla Wicia</strong>, inwestycja przywracająca
                sens bytu miejscowości bezpośrednio nadmorskiej.
                Kilka liczb: <strong>długość ok. 2 km</strong>; <strong>szerokość 40 m</strong>; <strong>grubość warstwy
                do 1,5 m</strong>. <strong>Koszt: ok. 2 mln złotych</strong>.
                <br><br>
                Inwestor: <strong>Urząd Morski w Szczecinie</strong> - dosłownie kilka miesięcy po objęciu nadzoru nad
                naszym, wiciowym morskim brzegiem.
                Refulacja objęła odcinek plaży od <strong>wejścia 2Z do połowy odcinka między 4W a 5W</strong>.
              </p>
            </div>
          </div>
          <div class="col-12">
            <MasonryGrid
                group="Radość druga: ODBUDOWA PLAŻY"
                :items="images"
                title="Radość druga: ODBUDOWA PLAŻY"
                base-path="/images/aktualnosci/radosc-druga-odbudowa-plazy/"
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
import {useHead} from '@unhead/vue';

// Definiowanie obrazów
const images = [
  "600c1b0c15c6c672685641.jpg",
  "600c1b0d23345814223338.jpg",
  "600c1b07aa844793382687.jpg",
  "600c1b09d9cb7921895122.jpg",
  "600c1b09edf68110114190.jpg",
  "600c1b067d7d4715940920.jpg",
  "600c1b101e792574663806.jpg",
  "600c1b1255c03336039370.jpg"
];

// Konfiguracja SEO z useHead
useHead({
  title: 'Radość druga: Odbudowa plaży w Wiciu | 2025',
  meta: [
    {
      name: 'description',
      content: 'Odbudowa plaży w Wiciu – kluczowa inwestycja Urzędu Morskiego w Szczecinie. 2 km długości, 40 m szerokości, koszt 2 mln zł. Sprawdź szczegóły!'
    },
    {
      name: 'keywords',
      content: 'odbudowa plaży, Wicie, Urząd Morski Szczecin, refulacja, plaża Wicie, inwestycja nadmorska, morze Bałtyckie'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph (dla mediów społecznościowych)
    {
      property: 'og:title',
      content: 'Radość druga: Odbudowa plaży w Wiciu | 2025'
    },
    {
      property: 'og:description',
      content: 'Kluczowa inwestycja w Wiciu – odbudowa plaży na odcinku 2 km za 2 mln zł. Realizacja Urzędu Morskiego w Szczecinie. Zobacz szczegóły na morzewicie.pl!'
    },
    {
      property: 'og:image',
      content: '/images/aktualnosci/radosc-druga-odbudowa-plazy/main.jpg'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/aktualnosci/radosc-druga-odbudowa-plazy'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Radość druga: Odbudowa plaży w Wiciu'
    },
    {
      name: 'twitter:description',
      content: 'Odbudowa plaży w Wiciu – 2 km nowej plaży za 2 mln zł. Inwestycja Urzędu Morskiego w Szczecinie. Szczegóły na morzewicie.pl.'
    },
    {
      name: 'twitter:image',
      content: '/images/aktualnosci/radosc-druga-odbudowa-plazy/main.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/aktualnosci/radosc-druga-odbudowa-plazy'
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