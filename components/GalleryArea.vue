<template>
  <section class="gallery-area pt-130 pb-30">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-4">
          <h2>Baza noclegowa</h2>
          <p class="pb-10">W sezonie letnim, Wicie może gościć ok. 6 tys. wypoczywających osób.</p>
          <p class="pb-10">Ośrodki wczasowe, pensjonaty, pokoje gościnne, agroturystyka, domki kempingowe, pola namiotowe i dla kamperów w większości są nowymi obiektami o wysokim standardzie spełniającymi oczekiwania przyjezdnych gości.</p>
          <NuxtLink to="/spanko" class="theme_btn active-btn">
            Polecane obiekty wypoczynkowe <i class="far fa-long-arrow-right"></i>
          </NuxtLink>
        </div>

        <div class="col-12 col-lg-6 col-xl-8">
          <div class="row mt-30 mt-sm-0">
            <div class="col-12 col-lg-6" v-for="(obj, index) in displayedObjects" :key="index">
              <div class="gallery mb-30" style="height: 300px;">
                <div class="gallery__img" :style="`background-image: url(${obj.image_url})`">
                </div>
                <div class="gallery__text d-flex flex-column">
                  <div class="gallery-title mb-1 text-center">{{ obj.name }}</div>
                  <div class="gallery__content--meta d-flex flex-column align-items-center gap-0">
                    <a :href="obj.website" class="mb-0  font-weight-bold text-green " target="_blank">{{ obj.website.replace('http://', '').replace('https://','').replace('/','') }}</a>
                    <a :href="'mailto:' + obj.email" class="mb-0 ">{{ obj.email }}</a>
                    <a :href="'tel:' + obj.phone" class="mb-0 ">{{ obj.phone }}</a>
                    <a v-if="obj.facebook" :href="obj.facebook" class="mb-0 " target="_blank">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Lista obiektów noclegowych
const objects = [
  {
    "name": "3W",
    "website": "http://www.3w-wicie.pl",
    "email": "3w.wicie@gmail.com",
    "phone": "+48 504 449 898",
    "facebook": "https://www.facebook.com/3w.wicie",
    "image_url": "/img/spanko/3W.jpg"
  },
  {
    "name": "ADMIRAŁ - Ewa i Jarosław Wojciechowscy",
    "website": "http://www.domkiadmiral.pl/",
    "email": "kontakt@domkiadmiral.pl",
    "phone": "+48 507 289 534",
    "facebook": "",
    "image_url": "/img/spanko/apartamenty-admiral.jpg"
  },
  {
    "name": "Berberys - Monika i Mirosław Stach",
    "website": "http://www.wicie-berberys.pl/",
    "email": "fuchstach@interia.pl",
    "phone": "+48 694 564 438",
    "facebook": "",
    "image_url": "/img/spanko/berberys.jpg"
  },
  {
    "name": "Bryza - Boguslaw Niedźwiedź",
    "website": "http://www.bryzawicie.pl/",
    "email": "boguslaw.niedzwiedz@op.pl",
    "phone": "+48 887 731 201",
    "facebook": "",
    "image_url": "/img/spanko/BRYZA.jpeg"
  },
  {
    "name": "DELFIN - Alina Wosinek",
    "website": "http://www.wiciedelfin.pl/",
    "email": "hall3000@tlen.pl",
    "phone": "+48 607 930 592",
    "facebook": "",
    "image_url": "/img/spanko/domki-letniskowe-delfin-wicie.jpg"
  },
  {
    "name": "DOMKI ŚWIT",
    "website": "http://domiswit.pl/",
    "email": "piotrex.koparka61@gmail.com",
    "phone": "+48 601 267 012",
    "facebook": "",
    "image_url": "/img/spanko/swit-foto.jpg"
  },
  {
    "name": "Ku Morzu - pensjonat",
    "website": "http://www.kumorzu1wicie.pl/",
    "email": "kochamwicie@gmail.com",
    "phone": "+48 664 399 354",
    "facebook": "",
    "image_url": "/img/spanko/apartamenty-kumorzu.jpg"
  },
  {
    "name": "LIDO - Alicja i Wojciech Hrymniak",
    "website": "http://www.lidowicie.pl/",
    "email": "biuro@lidowicie.pl",
    "phone": "+48 600 214 215",
    "facebook": "",
    "image_url": "/img/spanko/apartamenty-lido.jpg"
  },
  {
    "name": "MARINA - Alicja Sorgenlos",
    "website": "http://www.domkimarina.pl",
    "email": "alicja.sorgenlos@gmail.com",
    "phone": "+48 507 191 925",
    "facebook": "",
    "image_url": "/img/spanko/marina-sorgenlos.jpg"
  },
  {
    "name": "Na Polanie - Agnieszka i Artur Hantszel",
    "website": "http://www.wicienapolanie.pl/",
    "email": "kontakt@wicienapolanie.pl",
    "phone": "+48 722 199 199",
    "facebook": "",
    "image_url": "/img/spanko/na_polanie.jpg"
  },
  {
    "name": "Na Wydmach - Ośrodek Wczasowy",
    "website": "http://www.ownawydmach.pl",
    "email": "ownawydmach@gmail.com",
    "phone": "+48 575 475 377 i 606 273 047",
    "facebook": "",
    "image_url": "/img/spanko/Na-Wydmach---budynek.jpg"
  },
  {
    "name": "NEPTUN - Krystyna Gondek",
    "website": "http://www.neptunwicie.pl/",
    "email": "neptun.wicie@gmail.com",
    "phone": "+48 94 314 34 40 +48 601 613 440",
    "facebook": "",
    "image_url": "/img/spanko/NEPTUN.jpeg"
  },
  {
    "name": "OSTOJA domki letniskowe - Damiana i Maciej Boroń",
    "website": "http://www.ostoja-wicie.pl/",
    "email": "ostoja.wicie@gmail.com",
    "phone": "+48 795 418 952",
    "facebook": "",
    "image_url": "/img/spanko/domki-letniskowe-ostoja-boron.jpg"
  },
  {
    "name": "PARUZEL-komfortowy dom drewniany - Irena Paruzel",
    "website": "http://www.domkidrewnianewicie.pl/",
    "email": "",
    "phone": "+48 501 311 888",
    "facebook": "",
    "image_url": "/img/spanko/paruzel-komfortowy-dom-drewniany.jpg"
  },
  {
    "name": "POD DĘBEM - APARTAMENTY Jola i Leszek Woźniak",
    "website": "http://www.noclegiwicie.pl/",
    "email": "biuro@noclegiwicie.pl",
    "phone": "+48 602 153 797",
    "facebook": "",
    "image_url": "/img/spanko/apartamenty-poddebem.jpg"
  },
  {
    "name": "Pod Starą Chatą - Karolina Hamar",
    "website": "http://www.podstarachata.pl/",
    "email": "kajka983@wp.pl",
    "phone": "+48 504 288 557",
    "facebook": "",
    "image_url": "/img/spanko/karolina-hamar.jpg"
  },
  {
    "name": "Pokoje gościnne - Urszula Rychel",
    "website": "http://www.rychel.infowczasy.pl/",
    "email": "nataliamedwid@o2.pl",
    "phone": "513 202 835",
    "facebook": "",
    "image_url": "/img/spanko/natalia.jpg"
  },
  {
    "name": "Poranek Dom Gościnny - Bożena Lewińska",
    "website": "http://www.poranek.net.pl/",
    "email": "info@poranek.net.pl",
    "phone": "602 730 355",
    "facebook": "",
    "image_url": "/img/spanko/zewnętrze25.jpg"
  },
  {
    "name": "Promyk - domki letniskowe Joanna Lorek",
    "website": "http://www.domkipromyk.pl/",
    "email": "biuro@domkipromyk.pl",
    "phone": "783 257 511",
    "facebook": "",
    "image_url": "/img/spanko/apartamenty-promyk.jpg"
  },
  {
    "name": "RÓŻA WIATRÓW - Anna i Piotr Łata",
    "website": "http://www.wczasy-wicie.pl/",
    "email": "anna.lata72@gmail.com",
    "phone": "+48 602 254 684",
    "facebook": "",
    "image_url": "/img/spanko/roza-wiatrow.jpg"
  },
  {
    "name": "RÓŻANY DOMEK - Andrzej Sitnik",
    "website": "",
    "email": "",
    "phone": "+48 509 757 172",
    "facebook": "",
    "image_url": "/img/spanko/rozany-domek-sitnik.jpg"
  },
  {
    "name": "SEMI - Ośrodek Wypoczynkowy, Sp. z o.o.",
    "website": "http://www.semiwicie.pl/",
    "email": "biuro@semiwicie.pl",
    "phone": "+48 530 800 161",
    "facebook": "",
    "image_url": "/img/spanko/semiwww.jpg"
  },
  {
    "name": "U ALI agroturystyka - Alicja Barańska",
    "website": "http://www.ala.infowczasy.pl/",
    "email": "",
    "phone": "+48 604 598 851",
    "facebook": "",
    "image_url": "/img/spanko/agroturystyka-u-ali-baranska.jpg"
  },
  {
    "name": "Wczasy Nad Morzem - Natalia Medwid",
    "website": "http://www.wczasywicie.pl/",
    "email": "nataliamedwid@o2.pl",
    "phone": "+48 507 936 011",
    "facebook": "",
    "image_url": "/img/spanko/apartamenty-rychel.jpg"
  },
  {
    "name": "WIKAR",
    "website": "https://www.domkiwikar.pl/",
    "email": "domkiwikar@gmail.com",
    "phone": "662 216 123",
    "facebook": "",
    "image_url": "/img/spanko/wikar.jpg"
  },
  {
    "name": "ZACISZE pokoje gościnne, pole namiotowe - Ewa i Zenon Hińc",
    "website": "http://www.zaciszewicie.pl",
    "email": "zacisze@wp.pl",
    "phone": "+48 601 860 474",
    "facebook": "https://www.facebook.com/zaciszewicie",
    "image_url": "/img/spanko/pokoje-zacisze-hinc.jpg"
  },
  {
    "name": "ZASMIR - Mira i Henryk Zasiadczyk",
    "website": "http://www.przymorzu.pl/zasmirwicie",
    "email": "mirazas@op.pl",
    "phone": "+48 602 871 131",
    "facebook": "",
    "image_url": "/img/spanko/zasmir.jpg"
  },
  {
    "name": "Zielony Gaj - domki letniskowe Basia i Darek Tom carrot",
    "website": "http://www.zielonygaj.infowczasy.pl/",
    "email": "",
    "phone": "+48 604 081 642",
    "facebook": "",
    "image_url": "/img/spanko/apartamenty-zielonygaj.jpg"
  }
];

// Reaktywna tablica przechowująca 3 losowe obiekty do wyświetlenia
const displayedObjects = ref([]);

// Funkcja do losowania 3 różnych obiektów
const selectRandomObjects = () => {
  const shuffled = [...objects].sort(() => 0.5 - Math.random()); // Losowe mieszanie tablicy
  displayedObjects.value = shuffled.slice(0, 2); // Wybór pierwszych 3 elementów
};

// Uruchomienie losowania przy załadowaniu komponentu
onMounted(() => {
  selectRandomObjects(); // Początkowe losowanie
  // Ustawienie interwału do zmiany obiektów co 5 sekund
  const interval = setInterval(() => {
    selectRandomObjects();
  }, 15000);

  // Czyszczenie interwału przy opuszczeniu komponentu
  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>
<style scoped>
.gallery {
  box-shadow: 0px 16px 32px 0px rgba(56, 65, 63, 0.04);
  background: #fff;
}
.text-green {
  color: #00aa55;
}
.gallery__img {
  height: 150px;
}
</style>