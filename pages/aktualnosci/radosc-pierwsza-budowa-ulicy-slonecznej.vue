<template>
  <div>
    <div class="slider-area pos-rel" style="height: 300px; overflow: hidden;">
      <div
          class="single-slider slider-height pos-rel d-flex align-items-center align-items-lg-end"
          style="background-image: url(/images/aktualnosci/radosc-pierwsza-budowa-ulicy-slonecznej/main.jpg); background-position: center; height: 300px;"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="page-title text-center mt-0 pb-50">
                <h1 class="text-white">BUDOWA ULICY SŁONECZNEJ</h1>
                <div class="breadcrumb">
                  <ul class="breadcrumb-list">
                    <li>
                      <NuxtLink to="/aktualnosci">Aktualności</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                          to="/aktualnosci/radosc-pierwsza-budowa-ulicy-slonecznej">
                        BUDOWA ULICY SŁONECZNEJ
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
              <h1>Radość pierwsza:  BUDOWA ULICY SŁONECZNEJ
              </h1>
              Koniec roku to dobry czas na podsumowanie "poprzednika", a ten był przedziwny.
              Dla większości ludzi, rok najdziwniejszy ze wszystkich dotychczas przeżytych.
              <br><br>
              <strong>Pandemia</strong> i to co się z nią łączy: wszelkie ograniczenia i po ludzku, zwyczajny strach, odbiły się znacząco na naszym życiu, ale także na gospodarce.
              Tymczasem, paradoksalnie w tak dramatycznym światowym kryzysie, ten dziwny rok okazał się być dla <strong>Wicia</strong>,
              miejscowości stricte turystycznej, inwestycyjnie wyjątkowo pomyślnym, a nawet radosnym.
              <strong>Radość pierwsza: BUDOWA ULICY SŁONECZNEJ</strong> <br><br>

              Dla Wicia była to najlepsza wiadomość roku <strong>2019</strong> z perspektywą na <strong>2020</strong>.
              Kompleksowa budowa ulicy: z chodnikami, oświetleniem oraz koniecznymi instalacjami podziemnymi. Koszt, prawie <strong>5 mln złotych</strong>.
              Prace trwały od <strong>listopada 2019</strong> do <strong>6 sierpnia 2020</strong>, kiedy to w jezdni symbolicznie ułożone zostały ostatnie dwie kostki bruku.
            </div>
          </div>
          <div class="col-12">
            <MasonryGrid
                group="Radość pierwsza:  BUDOWA ULICY SŁONECZNEJ"
                :items="images"
                title="Radość pierwsza:  BUDOWA ULICY SŁONECZNEJ"
                base-path="/images/aktualnosci/radosc-pierwsza-budowa-ulicy-slonecznej/"
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
  "600c1ab4aee23811720777.jpg",
  "600c1ab74717a518502757.jpg",
  "600c1abcd427d875326377.jpg",
  "600c1abec427a803154077.jpg",
  "600c1ac261bdd678566784.jpg",
  "600c1ac581ff3151284537.jpg",
  "600c1ac80706e606108041.jpg"
];

// Konfiguracja SEO z useHead
useHead({
  title: 'Radość pierwsza: Budowa ulicy Słonecznej w Wiciu | 2020',
  meta: [
    {
      name: 'description',
      content: 'Budowa ulicy Słonecznej w Wiciu – inwestycja za 5 mln zł zakończona w 2020 roku. Chodniki, oświetlenie i instalacje podziemne. Sprawdź szczegóły!'
    },
    {
      name: 'keywords',
      content: 'budowa ulicy Słonecznej, Wicie, inwestycja 2020, pandemia, infrastruktura Wicie, ulica Słoneczna, turystyka'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph (dla mediów społecznościowych)
    {
      property: 'og:title',
      content: 'Radość pierwsza: Budowa ulicy Słonecznej w Wiciu | 2020'
    },
    {
      property: 'og:description',
      content: 'Wicie w 2020 roku z nową ulicą Słoneczną za 5 mln zł – chodniki, oświetlenie i więcej. Inwestycja w czasie pandemii. Zobacz na morzewicie.pl!'
    },
    {
      property: 'og:image',
      content: '/images/aktualnosci/radosc-pierwsza-budowa-ulicy-slonecznej/main.jpg'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/aktualnosci/radosc-pierwsza-budowa-ulicy-slonecznej'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Radość pierwsza: Budowa ulicy Słonecznej w Wiciu'
    },
    {
      name: 'twitter:description',
      content: 'Nowa ulica Słoneczna w Wiciu za 5 mln zł – inwestycja zakończona w 2020 roku w czasie pandemii. Szczegóły na morzewicie.pl.'
    },
    {
      name: 'twitter:image',
      content: '/images/aktualnosci/radosc-pierwsza-budowa-ulicy-slonecznej/main.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/aktualnosci/radosc-pierwsza-budowa-ulicy-slonecznej'
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