<template>
  <div>
    <div
        class="header-subpage"
        style="padding-top: 90px;background-position: right; height: 350px; display: flex; align-items: center;">
      <img src="/images/herb.png" style="width: 200px;position: absolute;top:100px;right: 5%;" alt="">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="page-title pt-0 text-center">
              <h1>Warto odwiedzić</h1>
              <div class="breadcrumb">
                <ul class="breadcrumb-list">
                  <li><a href="/">Strona Główna</a></li>
                  <li>
                    <NuxtLink to="/warto-odwiedzic">Warto odwiedzić</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-12">-->
<!--          <div class="content-image">-->
<!--            <img src="/img/slider/slider1.jpg" class="img-fluid">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <!--events-details-area start-->
    <section class="events-list-area pt-40 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="text-content pb-50 pr-30">
              <h2 class="">Warto zajrzeć</h2>
              <div class="text-content__letter">
                <h3>D</h3>
              </div>
              <p><strong>Darłowo</strong>, malownicze nadmorskie miasteczko, oferuje wiele atrakcji. Obowiązkowym punktem jest <strong>Zamek Książąt Pomorskich</strong>, pełen historii i średniowiecznego uroku, oraz <strong>kościół Mariacki</strong> z imponującą gotycką architekturą i pięknym ołtarzem. Warto też zobaczyć <strong>kościół Św. Gertrudy</strong> o charakterystycznej bryle. W Darłówku czeka <strong>Aqua-Park JAN</strong> z basenami z morską wodą, idealny dla rodzin.</p>
              <br>
              <p>W pobliskiej wiosce <strong>Krupy</strong> znajduje się <strong>Leonardia</strong> – park z blisko stu drewnianymi grami z całego świata. To świetne miejsce na rodzinną zabawę na świeżym powietrzu, pełne prostych, ale wciągających atrakcji.</p>
              <br>
              <p>Jadąc w stronę <strong>Słupska</strong>, warto odwiedzić <strong>Dolinę Charlotty</strong>. <strong>Fokarium</strong> i <strong>ZOO</strong> zachwycą zarówno dzieci, jak i dorosłych, oferując pokazy fok i różnorodność zwierząt w pięknej, naturalnej scenerii.</p>
              <br>
              <p>W <strong>Wiciu</strong> warto spędzić trochę wakacyjnego czasu w <strong>Mini-ZOO</strong>, ul. Morska 3, gdzie znajduje się ponad 50 gatunków zwierzaków. To ulubione miejsce naszych milusińskich.</p>
              <br>
              <p>W pobliskim <strong>Jarosławcu</strong> godne polecenia są <strong>Muzeum Bursztynu</strong>, <strong>latarnia morska</strong> oraz duży <strong>Aqua-Park</strong> z wieloma atrakcjami.</p>
            </div>

            <MasonryGrid group="warto" :items="gallery.images" title="Warto zajrzeć" base-path="/images/warto-zajrzec/" />
          </div>
        </div>
      </div>
    </section>
    <!--events-details-area end-->
  </div>
</template>

<script lang="ts" setup>
import MasonryGrid from '~/components/MasonryGrid.vue'; // Zakładam, że komponent istnieje w projekcie
import { useHead } from '@unhead/vue';

// Galeria zdjęć
const gallery = {
  images: [
    'bursztyn.jpg',
    'ciuchcia.jpg',
    'deptak.jpg',
    'dzieci.jpg',
    'skwer.jpg',
    'zoo.jpg'
  ],
};

// Definiowanie metadanych SEO z domeną morzewicie.pl
useHead({
  title: 'Warto Odwiedzić - Atrakcje w Wiciu i Okolicy | Morze Wicie',
  meta: [
    {
      name: 'description',
      content: 'Odkryj atrakcje w Wiciu i okolicy - Darłowo, Jarosławiec, Dolina Charlotty i więcej. Zamki, aqua-parki, ZOO i muzea czekają na morzewicie.pl!',
    },
    {
      name: 'keywords',
      content: 'Wicie atrakcje, warto odwiedzić Wicie, Darłowo, Jarosławiec, Dolina Charlotty, Mini-ZOO Wicie, morzewicie.pl',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Warto Odwiedzić - Atrakcje w Wiciu i Okolicy | Morze Wicie',
    },
    {
      property: 'og:description',
      content: 'Poznaj miejsca warte odwiedzenia w Wiciu i okolicy - od zamków w Darłowie po aqua-parki w Jarosławcu. Sprawdź na morzewicie.pl!',
    },
    {
      property: 'og:image',
      content: 'https://morzewicie.pl/images/warto-zajrzec/bursztyn.jpg', // Przykładowy obraz z galerii
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/warto-odwiedzic',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/warto-odwiedzic',
    },
  ],
});
</script>

<style scoped>
.single-slider {
  min-height: initial;
}
</style>