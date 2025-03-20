<template>
  <div>

    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="page-title pt-6 text-center">
            <h1>MODERNIZACJA UJĘCIA WODY I STACJI POMP</h1>
            <div class="breadcrumb">
              <ul class="breadcrumb-list">
                <li>
                  <NuxtLink to="/aktualnosci">Aktualności</NuxtLink>
                </li>
                <li>
                  <NuxtLink
                      to="/aktualnosci/radosc-czwarta-modernizacja-ujecia-wody-i-stacji-pomp">
                    MODERNIZACJA UJĘCIA WODY I STACJI POMP
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
            <div class="content-image mt-0">
              <img src="/images/aktualnosci/radosc-czwarta-modernizacja-ujecia-wody-i-stacji-pomp/main.jpg" class="img-fluid">
            </div>
          </div>
          <div class="col-12 col-lg-8 mb-5">
            <div class="pb-50 pr-30">
              <h1>Radość czwarta: MODERNIZACJA UJĘCIA WODY I STACJI POMP</h1>
              <div class="">
                Inwestycja niewidoczna i nie przez wszystkich nawet odczuwalna a jednak niezmiernie ważna i niezbędna.
                Gminny Zakład Użyteczności Publicznej uruchomił dodatkowe, wspomagające, zasilanie Wicia w wodę.
                Zamontowano także dodatkową, trzecią pompę (na zdjęciu przygotowane miejsce do montażu)
                Najważniejsze to jednak zakup i montaż FALOWNIKA. Jest to urządzenie utrzymujące ciśnienie wody w naszej
                sieci na stałym poziomie 4 barów.
                <br><br>
                <b>Koszt inwestycji to ok. 60 000 zł.</b>
              </div>
            </div>
          </div>
          <div class="col-12">
            <MasonryGrid
                group="Radość czwarta: MODERNIZACJA UJĘCIA WODY I STACJI POMP"
                :items="images"
                title="Radość czwarta: MODERNIZACJA UJĘCIA WODY I STACJI POMP"
                base-path="/images/aktualnosci/radosc-czwarta-modernizacja-ujecia-wody-i-stacji-pomp/"
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
  "600c18824b6ba399435542.jpg",
  "600c18824b6dd646494465.jpg",
  "600c188302d85652646437.jpg",
  "600c1883000e8494064484.jpg"
];

// Konfiguracja SEO z useHead
useHead({
  title: 'Modernizacja ujęcia wody i stacji pomp w Wiciu | Radość czwarta',
  meta: [
    {
      name: 'description',
      content: 'Modernizacja ujęcia wody i stacji pomp w Wiciu zakończona! Nowa pompa i falownik za 60 000 zł zapewniają stałe ciśnienie wody. Sprawdź szczegóły!'
    },
    {
      name: 'keywords',
      content: 'modernizacja ujęcia wody, stacja pomp, Wicie, Gminny Zakład Użyteczności Publicznej, falownik, inwestycja 2024, woda Wicie'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph (dla mediów społecznościowych)
    {
      property: 'og:title',
      content: 'Modernizacja ujęcia wody i stacji pomp w Wiciu | Radość czwarta'
    },
    {
      property: 'og:description',
      content: 'Nowa pompa i falownik w Wiciu za 60 000 zł! Modernizacja ujęcia wody zapewnia stabilne ciśnienie. Zobacz szczegóły na morzewicie.pl.'
    },
    {
      property: 'og:image',
      content: '/images/aktualnosci/radosc-czwarta-modernizacja-ujecia-wody-i-stacji-pomp/main.jpg'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/aktualnosci/radosc-czwarta-modernizacja-ujecia-wody-i-stacji-pomp'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Modernizacja ujęcia wody i stacji pomp w Wiciu'
    },
    {
      name: 'twitter:description',
      content: 'Wicie zmodernizowane! Nowa pompa i falownik za 60 000 zł stabilizują ciśnienie wody. Szczegóły na morzewicie.pl.'
    },
    {
      name: 'twitter:image',
      content: '/images/aktualnosci/radosc-czwarta-modernizacja-ujecia-wody-i-stacji-pomp/main.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/aktualnosci/radosc-czwarta-modernizacja-ujecia-wody-i-stacji-pomp'
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