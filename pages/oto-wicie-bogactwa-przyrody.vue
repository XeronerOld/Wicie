<template>
  <div>
    <div class="slider-area pos-rel" style="height: 300px; overflow: hidden;">
      <div
          class="single-slider slider-height pos-rel d-flex align-items-center align-items-lg-end"
          style="background-image: url(/images/przyrody/794778_18b6299ae72f402dbd93014076f68e9d~mv2.webp); height: 300px;"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="page-title text-center mt-0 pb-50">
                <h1>Przyroda w Wiciu</h1>
                <div class="breadcrumb">
                  <ul class="breadcrumb-list">
                    <li>
                      <NuxtLink to="/historia">Historia</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/oto-wicie-bogactwa-przyrody">Przyroda w Wiciu</NuxtLink>
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
              <h2 class="">Przyroda w Wiciu</h2>
              <div class="text-content__letter">
                <h3>P</h3>
              </div>
              <p>
                <strong>Wicie</strong> to wyjątkowa, mała miejscowość wypoczynkowa, położona w samym środku polskiego wybrzeża Bałtyku. Wieś znajduje się na wschodnim brzegu jeziora Kopań, będącego wraz z otaczającymi terenami przymorskimi <strong>Specjalnym Obszarem Ochrony Siedlisk w ramach sieci Natura 2000</strong>. Unikatowe i dzikie jezioro przymorskie oddziela od morza piaszczysta, miejscami bardzo wąska mierzeja, którą biegnie w stronę Darłówka <strong>piękny szlak rowerowy</strong>. Cykliści mogą cieszyć się jednoczesnym widokiem jeziora Kopań i Morza Bałtyckiego. <strong>W połowie drogi do Darłówka</strong> jezioro łączy się z morzem kanałem, a mieszające się słodkie i słone wody tworzą niezwykle złożony i unikalny ekosystem.
              </p>
              <br>
              <p>
                Brzeg morski tworzą dobrze zachowane wydmy białe i szare, lasy nadmorskie, łęgi wierzbowe, topolowe, olszowe i jesionowe oraz pomorski kwaśny las brzozowo-dębowy. Występują tu rzadkie w skali europejskiej rośliny – kruszczyk rdzawoczerwony i mikołajek nadmorski. W lesie nadmorskim od maja do lipca <strong>spacerującym turystom towarzyszy słodki zapach obficie kwitnącego wiciokrzewu</strong> pomorskiego.
              </p>
              <br>
              <div class="content-image">
                <img src="/images/przyrody/794778_433dd8ed25694f31a47ab5f68d98ab10~mv2.webp" alt="Przyroda Wicia - jezioro Kopań i ptaki" class="img-fluid">
                <p class="image-caption">Jezioro Kopań i otaczająca je przyroda – raj dla ptaków i miłośników natury.</p>
              </div>
              <br>
              <p>
                Okoliczne łąki i lasy są siedliskiem licznych zwierząt, w tym ptaków ujętych w Dyrektywie Ptasiej Natury 2000. Nad łąkami wokół Wicia podziwiać można krążące ptaki drapieżne wypatrujące swych ofiar w gąszczu traw i roślinności zielnej. Najczęściej wypatrzeć można myszołowa, pustułkę lub krogulca, ale i błotniaki stawowe, łąkowe oraz kanie rude. Więcej szczęścia wymaga spotkanie z jastrzębiem, bielikiem, orlikiem krzykliwym czy rybołowem. Całą dobę wokół <strong>rozlega się koncert dziesiątków gatunków ptaków</strong>. Wieczorami i o świcie można tu usłyszeć klangor żurawi, nocą słowika i derkacza, a skowronki cieszą swym świergotem przez cały dzień.
              </p>
              <br>
              <p>
                Wicie leży na trasie południowo-bałtyckiego szlaku wędrówek ptaków. Wiosną i jesienią teren ten staje się miejscem intensywnej migracji ptaków ze Skandynawii, Zachodniej Syberii, Uralu oraz europejskiej środkowej części Federacji Rosyjskiej, na zimowiska obejmujące rejony od Europy Centralnej po Bliski Wschód i Afrykę.
              </p>
              <br>
              <p>
                <strong>Nad brzegiem jeziora Kopań</strong> prace prowadzili ornitolodzy z Akcji Bałtyckiej Uniwersytetu Gdańskiego, zajmujący się badaniem wędrówek ptaków już przeszło 50 lat. Kilkaset metrów od Wicia można zobaczyć punkt badawczy prowadzony przez ornitologów z Akcji Wicie. W czasie przelotów pojawiają się tu masowo nie tylko drobne ptaki wróblowate, żurawie, gęsi, ale również ptaki drapieżne i sowy. Zimą jezioro Kopań staje się schronieniem dla wielu gatunków gęsi, kaczek i łabędzi. Dużą atrakcją są zimujące bieliki, krążące majestatycznie nad okolicą lub przesiadujące na lodzie, gdy Bałtyk zamarza. Okoliczna fauna reprezentowana jest również przez wiele gatunków płazów (żaby brunatne i zielone, traszki zwyczajne, ropuchy szare), gadów (jaszczurka zwinka, zaskroniec) i ssaków (sarna, zając, lis, dzik, jeleń europejski). Więcej szczęścia potrzeba, żeby zobaczyć jedną z fok szarych pojawiających się na naszym odcinku wybrzeża.
              </p>
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
  title: 'Przyroda w Wiciu - Natura 2000 i Migracje Ptaków | Morzewicie',
  meta: [
    {
      name: 'description',
      content: 'Odkryj przyrodę Wicia – jezioro Kopań, Natura 2000, rzadkie rośliny i ptaki migrujące. Idealne miejsce dla miłośników natury na morzewicie.pl!',
    },
    {
      name: 'keywords',
      content: 'Wicie przyroda, jezioro Kopań, Natura 2000, ptaki Wicie, szlak rowerowy, migracje ptaków, morzewicie.pl',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Przyroda w Wiciu - Natura 2000 i Migracje Ptaków | Morzewicie',
    },
    {
      property: 'og:description',
      content: 'Poznaj bogactwo przyrody Wicia – od jeziora Kopań po ptasie migracje. Sprawdź na morzewicie.pl!',
    },
    {
      property: 'og:image',
      content: 'https://morzewicie.pl/storage/app/media/08.jpg',
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/przyroda-w-wiciu',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/przyroda-w-wiciu',
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