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
                <h1>Jedzonko</h1>
                <div class="breadcrumb">
                  <ul class="breadcrumb-list">
                    <li><a href="/">Strona Główna</a></li>
                    <li>
                      <NuxtLink to="/jedzonko">Jedzonko</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header Section -->
    <div class="container mt-50 mb-30">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Jedzonko?</h2>
          <p class="pb-10"><b>Oto ono:</b> <strong>bary, barki i restauracje</strong> oraz <strong>stołówki w ośrodkach</strong> (patrz <NuxtLink class="text-green" to="/spanko">Spanko</NuxtLink>)</p>
          <p class="pb-10"><b><strong>Małe i duże co nieco.</strong></b></p>
          <p class="pb-10">Wszystko pyszne, wszystko świeże - do wyboru do koloru:</p>
          <p class="pb-10">- <strong>obiadki</strong>: gotowane, smażone, duszone i pieczone – <strong>kuchnie wielokulturowe</strong>.</p>
          <p class="pb-10">- <strong>barbeque</strong> z dodatkami - plus stosowne <strong>napoje</strong></p>
          <p class="pb-10">- <strong>deserki</strong>: pyszności dietetyczne – kolorowe, radosne, sezonowe i urozmaicone</p>
        </div>
      </div>
    </div>

    <div class="container mt-50 mb-30">
      <div class="row">
        <div class="col-12 text-center">
          <img src="/images/my-fish.png" width="250" alt="Wicie Gastronomiczne - Znaczeni Rybą"/>
          <h2 class="mt-10">Wicie Gastronomiczne</h2>
          <p class="pb-10">Lokale z tym znakiem znajdują się na szlaku kulinarnym <strong>„Znaczeni Rybą”</strong></p>
          <p class="pb-10">Szczególnie polecamy: <strong>dorsze</strong> oraz ich koledzy i koleżanki z <strong>bałtyckich toni</strong></p>
        </div>
      </div>
    </div>

    <div class="container mt-50">
      <div class="row">
        <!-- Lista wszystkich obiektów w 3 kolumnach -->
        <div class="col-4" v-for="(obj, index) in objects" :key="index">
          <div class="gallery mb-30" style="height: 320px;">
            <div class="gallery__img" :style="`background-image: url(${obj.image_url})`"></div>
            <div class="gallery__text d-flex flex-column">
              <div class="gallery-title mb-1 text-center">{{ obj.name }}</div>
              <div class="gallery__content--meta d-flex flex-column align-items-center gap-0">
                <a
                    :href="obj.website"
                    class="mb-0 font-weight-bold text-green"
                    target="_blank"
                    v-if="obj.website"
                >
                  {{ obj.website.replace('http://', '').replace('https://', '').replace('/', '') }}
                </a>
                <a :href="'mailto:' + obj.email" class="mb-0" v-if="obj.email">{{ obj.email }}</a>
                <a :href="'tel:' + obj.phone" class="mb-0" v-if="obj.phone">{{ obj.phone }}</a>
                <a v-if="obj.facebook" :href="obj.facebook" class="mb-0" target="_blank">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@unhead/vue';

// Lista obiektów gastronomicznych
const objects = [
  {
    "name": "Bar Koral - ul. Morska 15",
    "website": "",
    "email": "",
    "phone": "+48 667 963 597",
    "facebook": "",
    "image_url": "/images/jedzonko/obiekt_12_m.jpg"
  },
  {
    "name": "Kawiarnia AMARETTO - ul. Morska 12A",
    "website": "",
    "email": "",
    "phone": "",
    "facebook": "",
    "image_url": "/images/jedzonko/hkbejdkgjahlmhif.jpg"
  },
  {
    "name": "Kolor Cafe - ul. Ku morzu 12",
    "website": "",
    "email": "",
    "phone": "+48 604 636 750",
    "facebook": "https://www.facebook.com/pages/Wicie-Cafe-Kolor/330035670461886",
    "image_url": "/images/jedzonko/obiekt_11_m.jpg"
  },
  {
    "name": "Smażalnia Bar MAGDALENKA - ul. Morska 12A",
    "website": "",
    "email": "",
    "phone": "+48 691 727 691",
    "facebook": "",
    "image_url": "/images/jedzonko/jdbggggdakgehokb.jpg"
  },
  {
    "name": "bistro „MARINA” ul. Bosmańska 2",
    "website": "",
    "email": "",
    "phone": "+48 604 130 024",
    "facebook": "https://www.facebook.com/Bistro-Marina-246977529419648/",
    "image_url": "/images/jedzonko/marina.jpg"
  },
  {
    "name": "u Rzeja, ul. Słoneczna 11a",
    "website": "",
    "email": "",
    "phone": "+48 606 897 125",
    "facebook": "https://www.facebook.com/uRzeja",
    "image_url": "/images/jedzonko/jeogbjkkjjhkpdaj.jpg"
  },
];

// Definiowanie metadanych SEO z domeną morzewicie.pl
useHead({
  title: 'Jedzonko w Wiciu - Restauracje i Bary | Morze Wicie',
  meta: [
    {
      name: 'description',
      content: 'Poznaj ofertę gastronomiczną Wicia - bary, restauracje i smażalnie na szlaku „Znaczeni Rybą”. Świeże ryby, obiady i desery czekają na morzewicie.pl!',
    },
    {
      name: 'keywords',
      content: 'Wicie jedzonko, restauracje Wicie, bary Wicie, smażalnia Wicie, Znaczeni Rybą, dorsz Wicie, morzewicie.pl',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Jedzonko w Wiciu - Restauracje i Bary | Morze Wicie',
    },
    {
      property: 'og:description',
      content: 'Smakuj Wicie! Restauracje, bary i smażalnie z pysznymi rybami i daniami na szlaku „Znaczeni Rybą”. Sprawdź na morzewicie.pl!',
    },
    {
      property: 'og:image',
      content: 'https://morzewicie.pl/images/my-fish.png', // Obraz związany z gastronomią
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/jedzonko',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/jedzonko',
    },
  ],
});
</script>

<style scoped>
.slider-area {
  background-color: #f5f5f5;
}

.single-slider {
  background-size: cover;
  background-position: center;
  min-height: initial;
}

.gallery {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
}

.gallery__img {
  height: 150px;
  background-size: cover;
  background-position: center;
}

.gallery__text {
  padding: 10px;
  background-color: #fff;
}

.gallery-title {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}

.gallery__content--meta a {
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
}

.gallery__content--meta a.text-green {
  color: #28a745; /* Zielony kolor dla linku do strony */
}

.gallery__content--meta a:hover {
  color: #28a745; /* Pomarańczowy kolor po najechaniu */
  font-weight: bold;
}

/* Responsywność */
@media (max-width: 992px) {
  .col-4 {
    flex: 0 0 50%;
    max-width: 50%; /* 2 kolumny na tabletach */
  }
}

@media (max-width: 576px) {
  .col-4 {
    flex: 0 0 100%;
    max-width: 100%; /* 1 kolumna na telefonach */
  }
}

.text-green {
  color: #00aa55;
}
</style>