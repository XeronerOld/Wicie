<template>
  <div>
    <div class="slider-area pos-rel" style="height: 300px; overflow: hidden;">
      <div
          class="single-slider slider-height pos-rel d-flex align-items-center align-items-lg-end"
          style="background-image: url(/images/aktualnosci/radosc-szosta-gazyfikacja-wicia/main.jpg); background-position: center; height: 300px;"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="page-title text-center mt-0 pb-50">
                <h1>GAZYFIKACJA WICIA</h1>
                <div class="breadcrumb">
                  <ul class="breadcrumb-list">
                    <li>
                      <NuxtLink to="/aktualnosci">Aktualności</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/aktualnosci/radosc-szosta-gazyfikacja-wicia">
                        GAZYFIKACJA WICIA
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
              <h1>Radość szósta: GAZYFIKACJA WICIA</h1>
              <p>
                <strong>Dnia 23 grudnia</strong> niejako w prezencie świąteczno - noworocznym, dotarła do nas wspaniała wiadomość.
                Otóż <strong>dyrektor Polskiej Spółki Gazownictwa w Koszalinie</strong>, podjął decyzję o zasileniu gazem ziemnym naszego cudnego Wicia.
              </p><br>
              <p>
                W uznaniu naszej determinacji w działaniach na rzecz gazyfikacji wdrożony został plan realizacji <strong>pierwszego etapu tej inwestycji</strong>.
                Etap I obejmie <strong>część zachodnią, do ul. Spokojnej włącznie</strong>.
                Prawdopodobny termin realizacji I etapu to <strong>rok 2022</strong> i w tym też roku rozpocznie się nabór wniosków na <strong>etap drugi</strong>, to jest pozostałą część Wicia.
                Która z wymienionych inwestycji najbardziej cieszy i czy od nadmiaru dobra głowy nas nie rozbolą?
                Zapamiętajmy, AD <strong>2020</strong>, najlepszy inwestycyjnie rok w historii Wicia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--events-details-area end-->
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

// Konfiguracja SEO z useHead
useHead({
  title: 'Radość szósta: Gazyfikacja Wicia - Aktualności 2020',
  meta: [
    {
      name: 'description',
      content: '23 grudnia 2020 r. zapadła decyzja o gazyfikacji Wicia! Etap I do ul. Spokojnej w 2022 r. Sprawdź szczegóły inwestycji na morzewicie.pl.'
    },
    {
      name: 'keywords',
      content: 'gazyfikacja Wicia, inwestycja 2020, Polska Spółka Gazownictwa, Wicie 2022, aktualności Wicie, Morze Wicie'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph (dla mediów społecznościowych)
    {
      property: 'og:title',
      content: 'Radość szósta: Gazyfikacja Wicia'
    },
    {
      property: 'og:description',
      content: 'Wspaniała wiadomość z 23 grudnia 2020: Wicie z gazem ziemnym! Etap I w 2022 r. obejmuje część zachodnią do ul. Spokojnej. Szczegóły na morzewicie.pl.'
    },
    {
      property: 'og:image',
      content: '/images/aktualnosci/radosc-szosta-gazyfikacja-wicia/main.jpg'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/aktualnosci/radosc-szosta-gazyfikacja-wicia'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Radość szósta: Gazyfikacja Wicia'
    },
    {
      name: 'twitter:description',
      content: 'Gazyfikacja Wicia rusza! Decyzja z 23.12.2020 r. – etap I w 2022 r. do ul. Spokojnej. Więcej na morzewicie.pl.'
    },
    {
      name: 'twitter:image',
      content: '/images/aktualnosci/radosc-szosta-gazyfikacja-wicia/main.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/aktualnosci/radosc-szosta-gazyfikacja-wicia'
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