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
              <h1>Wicie w historii</h1>
              <div class="breadcrumb">
                <ul class="breadcrumb-list">
                  <li>
                    <NuxtLink to="/historia">Historia</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/oto-wicie-wicie-w-histori" class="active">Wicie w historii</NuxtLink>
                  </li>
                </ul>
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
              <h2 class="">Wicie w historii</h2>
              <div class="text-content__letter">
                <h3>H</h3>
              </div>
              <p>
                <strong>Pierwsza wzmianka o miejscowości pochodzi z XV wieku.</strong> Zawsze to była niewielka wieś chłopska i rybacka. Została założona około 1400 roku przez Szwedów. Z języka szwedzkiego wywodzi się również nazwa wsi – <em>vittja</em>, co oznacza "przylądek" lub "plac składowy".
              </p>
              <br>
              <p>
                Tuż przed 1407 roku Kartuzi otrzymali prawo wybudowania klasztoru na "Dorpstede von Klonnevytze". Do jego wzniesienia jednak nigdy nie doszło. Stare Wicie, położone na mierzei kopańskiej, w XV i XVI wieku było ważnym ośrodkiem handlu rybami. Istniał tu port rybacki, a we wsi działała karczma, należąca do 1618 roku do darłowskiego browarnika Joachima Kuhne.
              </p>
              <br>
              <p>
                19 sierpnia 1630 roku na mierzei kopańskiej, obok Wicia, wylądowały wojska szwedzkie. Zadomowiły się tu na 8 lat. Pod koniec XVII wieku nastąpił upadek Wicia, do którego oprócz wyniszczających wojen przyczyniły się zmiany klimatyczne: podniesienie się poziomu morza, liczne sztormy i przesuwające się wydmy piaskowe. Ostatni mieszkańcy <strong>opuścili starą wieś</strong> na początku XIX wieku, przenosząc się na wschodni kraniec mierzei – tam, gdzie <strong>obecnie znajduje się wieś</strong>.
              </p>
              <br>
              <p>
                Wicie należało do pierwszej książęcej domeny darłowskiej (ok. 1341 rok). Wieś miała dość poważne znaczenie w okresie istnienia związku hanzeatyckiego – istniał tutaj port rybacki. W tym czasie działały tu trzy karczmy. Rybacy utrzymywali kontakty handlowe z Gdańskiem, Lubeką, Rostokiem, Wismarem i Królewcem, handlując towarami rybnymi, smalcem, sadłem i grochem. Przywozili odzież, sól i metale. W 1663 roku w Wiciu mieszkał wolny od służby pańszczyźnianej sołtys i 12 rybaków. Każdy z rybaków posiadał również niewielkie gospodarstwo rolne. Ze względu na silne sztormy i zalewanie wybrzeża, rybacy z Wicia wielokrotnie zmuszeni byli do przenoszenia swoich chat. Zajmowali niewielkie działki na gruntach folwarku Palczewice, na którym zobowiązani byli do odróbki pańszczyzny.
              </p>
              <br>
              <p>
                Obecna wieś, w formie dwóch skrzyżowanych ze sobą ulicówek, pochodzi z lat 1810–1825. Wcześniej była położona bardziej na zachód. Stare zagrody musiały ustąpić po pierwsze: pod naporem wody jeziora, po drugie: przed niebezpieczeństwem przelania się morza przez wydmy. Z dawnych czasów na mierzei kopańskiej znajdowane są <strong>archeologiczne</strong> pozostałości przedmiotów codziennego użytku.
              </p>
              <br>
              <p><strong>Historyczne nazwy wsi:</strong></p>
              <ul>
                <li>ok. <strong>1400 r.</strong> – Vittja</li>
                <li><strong>1485 r.</strong> – Clonnevytze</li>
                <li><strong>1504 r.</strong> – Klonneuitze</li>
                <li><strong>1618 r.</strong> – Vitte</li>
                <li><strong>1945 r.</strong> – Witowo, Wistowo</li>
                <li><strong>1951 r.</strong> – Wicie</li>
              </ul>
              <br>
              <p>
                Inne spotykane dawne nazwy: Rügenwalder Vitte, Klonnerwitte, Klennevitte, Kleine Vitte.
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
  title: 'Wicie w Historii - Od Szwedów po Hanzeatycki Port | Morzewicie',
  meta: [
    {
      name: 'description',
      content: 'Poznaj historię Wicia – od XV-wiecznej wsi rybackiej założonej przez Szwedów, przez hanzeatycki port, po współczesność. Sprawdź na morzewicie.pl!',
    },
    {
      name: 'keywords',
      content: 'Wicie historia, wieś rybacka, Szwedzi Wicie, port hanzeatycki, mierzeja kopańska, morzewicie.pl',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Wicie w Historii - Od Szwedów po Hanzeatycki Port | Morzewicie',
    },
    {
      property: 'og:description',
      content: 'Odkryj fascynującą historię Wicia – od średniowiecznej wsi po przenosiny z powodu sztormów. Szczegóły na morzewicie.pl!',
    },
    {
      property: 'og:image',
      content: 'https://morzewicie.pl/images/wicie-historia/placeholder.jpg',
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/wicie-w-historii',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/wicie-w-historii',
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