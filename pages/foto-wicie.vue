<template>
  <div>
    <div class="slider-area pos-rel" style="height: 300px; overflow: hidden;">
      <div
          class="single-slider slider-height pos-rel d-flex align-items-center align-items-lg-end"
          style="background-image: url(/img/slider/slider1.jpg); height: 300px;"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="page-title text-center mt-0 pb-50">
                <h1>Foto Wicie</h1>
                <div class="breadcrumb">
                  <ul class="breadcrumb-list">
                    <li><a href="/">Strona Główna</a></li>
                    <li>
                      <NuxtLink to="/foto-wicie">Foto Wicie</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery Section -->
    <div class="container py-5">
      <div class="row">
        <div v-for="(item, index) in gallery" :key="index" class="col-12 mb-5">
          <h2 class="mb-4">{{ item.name }}</h2>
          <MasonryGrid
              :items="item.photos"
              :group="item.url"
              :base-path="`/images/foto-wicie/${item.url}/`"
              :title="item.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MasonryGrid from "~/components/MasonryGrid.vue";
import { useHead } from '@unhead/vue';

// Definiowanie galerii
const gallery = [
  {
    name: "Wicie jesienią",
    url: "wicie-jesienią",
    photos: [
      "5e4ee168a8f09149132096.jpg",
      "5e4ee168a88f6054802649.jpg",
      "5e4ee168d70cc697290451.jpg",
      "5e4ee168de712820846594.jpg",
      "5e4ee169b2a20573327737.jpg",
      "5e4ee169b262d018315871.jpg",
      "5e4ee169d74ce573254637.jpg",
      "5e4ee1693acfb368200864.jpg",
      "5e4ee1693b1ed348235218.jpg",
      "5e4ee1698b6ce413174582.jpg",
      "5e4ee1698b614958462419.jpg",
      "5e4ee16912b95808706775.jpg",
      "5e4ee16912df4256783990.jpg",
      "5e4ee16912df4256783990 (1).jpg",
      "5e4ee169623c3338195063.jpg",
      "5e4ee16962834232425367.jpg"
    ]
  },
  {
    name: "Odbywający się co roku festyn wiejski w Wiciu",
    url: "odbywający-się-co-roku-festyn-wiejski-w-wiciu",
    photos: [
      "5e4ee230a3d9d897200243.jpg",
      "5e4ee230a3929675892972.jpg",
      "5e4ee230cff47965424733.jpg",
      "5e4ee230d0205269359888.jpg",
      "5e4ee231a3ab2364605406.jpg",
      "5e4ee231a6347361618307.jpg",
      "5e4ee231cb343863159029.jpg",
      "5e4ee231cd188890310884.jpg",
      "5e4ee231f0c0d407267281.jpg",
      "5e4ee2312cfa7888839504.jpg",
      "5e4ee2317bd99446564356.jpg",
      "5e4ee2317ecfa988588921.jpg",
      "5e4ee23075b08652342952.jpg",
      "5e4ee23075c41512882310.jpg",
      "5e4ee23154f2a574427137.jpg",
      "5e4ee231584e2403636572.jpg",
      "5e4ee23104212943710344.jpg",
      "5e4ee23106339652630465.jpg",
      "5e4ee23130476468164223.jpg"
    ]
  },
  {
    name: "Kolejne zdjęcia z wysokości, tym razem z pokładu lotni",
    url: "kolejne-zdjęcia-z-wysokości-tym-razem-z-pokład",
    photos: [
      "5e4ee23b4cd4c533759445.jpg",
      "5e4ee23b4ea97432157831.jpg",
      "5e4ee23b7d4e9520385835.jpg",
      "5e4ee23b7d7c4316097163.jpg",
      "5e4ee23ba6daa373812554.jpg",
      "5e4ee23bab487621886629.jpg",
      "5e4ee23bce82e247725812.jpg",
      "5e4ee23bd1dc3413347791.jpg",
      "5e4ee23c2acfd703676959.jpg",
      "5e4ee23c2b7b1685200343.jpg",
      "5e4ee23c04d31798418015.jpg",
      "5e4ee23c9d7ed505810031.jpg",
      "5e4ee23c9daf2809898554.jpg",
      "5e4ee23c52d91261118106.jpg",
      "5e4ee23c76f24368567309.jpg",
      "5e4ee23c78ec0792712454.jpg",
      "5e4ee23c504de917878325.jpg",
      "5e4ee23c02171553582619.jpg"
    ]
  },
  {
    name: "Nasze plaże",
    url: "nasze-plaże",
    photos: [
      "5e4ee245be8ee630571552.jpg",
      "5e4ee245c063a563743753.jpg",
      "5e4ee245e568c734710441.jpg",
      "5e4ee245e6218858827137.jpg",
      "5e4ee2453a929592681035.jpg",
      "5e4ee2453d065651758281.jpg",
      "5e4ee2461c06a499097011.jpg",
      "5e4ee2463ed56976956620.jpg",
      "5e4ee2468b070275365332.jpg",
      "5e4ee2468e75b015861277.jpg",
      "5e4ee24596adf467626713.jpg",
      "5e4ee24596d70769334256.jpg",
      "5e4ee24618e23696805290.jpg",
      "5e4ee24664ee7909208557.jpg",
      "5e4ee245128ef180763936.jpg",
      "5e4ee245690ac247416809.jpg",
      "5e4ee2456975d059012410.jpg",
      "5e4ee2464157a141577726.jpg",
      "5e4ee2466815d042643436.jpg",
      "5e4ee24512590351840526.jpg"
    ]
  },
  {
    name: "Bliskość przyrody to jeden z naszych największych atutów",
    url: "bliskość-przyrody-to-jeden-z-naszych-największych-atutów",
    photos: [
      '5e4ee252bbcf5414836536.jpg',
      '5e4ee252bbd9e678874336.jpg',
      '5e4ee252e4c9a246392184.jpg',
      '5e4ee252e715f537232315.jpg',
      '5e4ee2522de14641766920.jpg',
      '5e4ee2522e69b467025852.jpg',
      '5e4ee2525f3c5669862852.jpg',
      '5e4ee2525f206154182673.jpg',
      '5e4ee2528d987725104631.jpg',
      '5e4ee2528dcc6418974203.jpg',
      '5e4ee2531a172064741210.jpg',
      '5e4ee25202e48093277807.jpg',
      '5e4ee25344dcb268002869.jpg',
      '5e4ee25344f9e523749826.jpg',
      '5e4ee253192a9870540428.jpg',
      '5e4ee25204047586100904.jpg'
    ]
  },
  {
    name: "Wicie zimą",
    url: "wicie-zimą",
    photos: [
      "5e4ee25c65f33571476672.jpg",
      "5e4ee25c68cb1691105457.jpg",
      "5e4ee25c94a84301261015.jpg",
      "5e4ee25c945bf215230868.jpg",
      "5e4ee25cbdf25313538800.jpg",
      "5e4ee25cbea6a982544257.jpg",
      "5e4ee25ce8fd3344032527.jpg",
      "5e4ee25ce94d2098589634.jpg",
      "5e4ee25d1d172511507639.jpg",
      "5e4ee25d1dbe3807186778.jpg",
      "5e4ee25d4496f393831570.jpg",
      "5e4ee25d44983022089835.jpg"
    ]
  }
];

// Definiowanie metadanych SEO z domeną morzewicie.pl
useHead({
  title: 'Foto Wicie - Galeria Zdjęć z Wicia | Morze Wicie',
  meta: [
    {
      name: 'description',
      content: 'Przeglądaj galerię zdjęć z Wicia - plaże, przyroda, festyny wiejskie i widoki z lotni. Odkryj piękno Wicia o każdej porze roku na morzewicie.pl!',
    },
    {
      name: 'keywords',
      content: 'Wicie zdjęcia, galeria Wicie, foto Wicie, plaże Wicie, festyn Wicie, Wicie jesienią, Wicie zimą, morzewicie.pl',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Foto Wicie - Galeria Zdjęć z Wicia | Morze Wicie',
    },
    {
      property: 'og:description',
      content: 'Obejrzyj piękne zdjęcia Wicia - plaże, festyny, przyroda i widoki z lotni. Sprawdź galerię na morzewicie.pl!',
    },
    {
      property: 'og:image',
      content: 'https://morzewicie.pl/img/slider/slider1.jpg', // Pełny URL do obrazu głównego
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/foto-wicie',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/foto-wicie',
    },
  ],
});
</script>

<style scoped>
h2 {
  color: #333;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

@media (max-width: 576px) {
  h2 {
    font-size: 1.5rem;
  }
}

.single-slider {
  min-height: initial;
}
</style>