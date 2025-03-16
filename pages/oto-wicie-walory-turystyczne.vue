<template>
  <div>
    <div class="slider-area pos-rel" style="height: 300px; overflow: hidden;">
      <div
          class="single-slider slider-height pos-rel d-flex align-items-center align-items-lg-end"
          style="background-image: url(/images/walory-turystyczne/12.jpg); height: 300px;"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="page-title text-center mt-0 pb-50">
                <h1>Walory turystyczne</h1>
                <div class="breadcrumb">
                  <ul class="breadcrumb-list">
                    <li>
                      <NuxtLink to="/historia">Historia</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/oto-wicie-walory-turystyczne">Walory turystyczne</NuxtLink>
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
            <div class="text-content pb-50 pr-30">
              <h2 class="">Walory turystyczne</h2>
              <div class="text-content__letter">
                <h3>W</h3>
              </div>
              <p>
                <strong>Wicie</strong> nie ma charakteru głośnego kurortu. To nadmorska wieś o specyficznym mikroklimacie, powstałym na skutek korzystnego położenia miejscowości.
              </p>
              <br>
              <ul>
                <li>
                  <strong>‣ Środkowe wybrzeże Bałtyku</strong> - bez zatok, wietrzne - sprzyja powstawaniu bryzy morskiej, aerozolu o dużym stężeniu cząsteczek soli jodu, bromu, selenu, cynku i magnezu.
                </li>
                <li>
                  ‣ Wokół <strong>lasy z przewagą sosnowych</strong> - lecznicze działanie olejków eterycznych i fitoncydów (związki o działaniu bakteriobójczym i przeciwzapalnym).
                </li>
                <li>
                  ‣ Za wioską znajduje się duże, <strong>naturalne jezioro Kopań</strong>, które utrzymuje podwyższoną wilgotność powietrza.
                </li>
                <li>
                  ‣ Miejscowość "zamykają" <strong>wzgórza morenowe</strong> z najwyższym wzniesieniem: <strong>Góra Barzowicka</strong> o wysokości 72,2 m.
                </li>
              </ul>
              <br>
              <p>
                Takie położenie i naturalne ukształtowanie terenu powoduje stworzenie wokół miejscowości enklawy o wyjątkowym mikroklimacie. Do tego promienie słoneczne, działające bakteriobójczo i przeciwzapalnie, pobudzają szyszynkę do produkcji melatoniny koordynującej nasz zegar biologiczny, w tym dobry, spokojny sen. Wszystkie te czynniki wspólnie powodują wydzielanie endorfin, zwanych hormonami szczęścia.
              </p>
              <br>
              <div class="content-image">
                <img src="/images/walory-turystyczne/12.jpg" alt="Krajobraz Wicia - morze i lasy" class="img-fluid">
                <p class="image-caption">Malowniczy krajobraz Wicia</p>
              </div>
              <br>
              <p>
                Te wyjątkowe walory klimatyczne sprzyjają leczeniu chorób układu oddechowego, odpornościowego, nerwowego, krążenia, nadciśnienia, alergii, stanów zapalnych skóry czy niedoczynności tarczycy.
              </p>
              <br>
              <p>
                Z dala od zgiełku miast czy krzykliwych kurortów, to <strong>TU odzyskasz spokój</strong>, wyciszenie, zdrowie i ogromne pokłady energii. Dla ceniących sobie aktywny wypoczynek: doskonałe warunki do uprawiania joggingu, nordic walking, jazdy na rowerze. Na jeziorze można uprawiać sporty wodne, a w morzu połączyć pływanie z krioterapią.
              </p>
              <br>
              <h3><strong>Wicie to obszar objęty unijnym programem ochrony środowiska NATURA 2000.</strong></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--events-details-area end-->
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@unhead/vue';

// Definiowanie metadanych SEO z domeną morzewicie.pl
useHead({
  title: 'Walory Turystyczne Wicia - Zdrowy Mikroklimat | Morzewicie',
  meta: [
    {
      name: 'description',
      content: 'Poznaj walory turystyczne Wicia - wyjątkowy mikroklimat, lasy sosnowe, jezioro Kopań i wzgórza morenowe. Idealne miejsce na zdrowie i relaks na morzewicie.pl!',
    },
    {
      name: 'keywords',
      content: 'Wicie walory turystyczne, mikroklimat Wicie, jezioro Kopań, lasy sosnowe, NATURA 2000, morzewicie.pl',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Walory Turystyczne Wicia - Zdrowy Mikroklimat | Morzewicie',
    },
    {
      property: 'og:description',
      content: 'Odkryj unikalny mikroklimat Wicia - idealne miejsce na odpoczynek i zdrowie. Sprawdź szczegóły na morzewicie.pl!',
    },
    {
      property: 'og:image',
      content: 'https://morzewicie.pl/images/walory-turystyczne/12.jpg',
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/oto-wicie-walory-turystyczne',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/oto-wicie-walory-turystyczne',
    },
  ],
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