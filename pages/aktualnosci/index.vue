<template>
  <div class="slider-area pos-rel" style="height: 300px; overflow: hidden;">
    <div
        class="single-slider slider-height pos-rel d-flex align-items-center align-items-lg-end"
        style="background-image: url(/img/slider/slider1.jpg); height: 300px;"
    >
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="page-title text-center mt-0 pb-50">
              <h1>Aktualności</h1>
              <div class="breadcrumb">
                <ul class="breadcrumb-list">
                  <li><a href="/">Strona Główna</a></li>
                  <li>
                    <NuxtLink class="active" to="/aktualnosci">Aktualności</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--news-area star-->
  <div class="container mt-50">
    <div class="row">
      <div class="col-12 col-lg-6" v-for="n in news">
        <div class="blog mb-40">
          <div class="blog__img mb-50">
            <img :src="n.image" alt="">
          </div>
          <div class="blog__content">
            <h3 class="blog-title mb-15">
              <NuxtLink :to="n.link">{{ n.title }}</NuxtLink>
            </h3>
            <p class="mb-35">{{n.desc}}</p>
            <div class="blog__content--list d-flex align-items-center justify-content-end">
              <NuxtLink :to="n.link" class="more_btn4" href="#"><i class="far fa-arrow-right"></i> Czytaj więcej
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--news-area end-->
</template>
<style scoped>
.single-slider {
  min-height: initial;
}
</style>
<script setup lang="ts">
const news = [
  {
    "title": "Lato 2025 z nowymi Rodzinnymi Festynami już niebawem 🙂",
    "desc": "a tymczasem wspomnienie edycji sprzed roku",
    "link": "/aktualnosci/lato-2025-z-nowymi-rodzinnymi-festynami-juz-niebawem-tymczasem-wspomnienie-edycji-sprzed-roku",
    "image": "/images/aktualnosci/lato-2025-z-nowymi-rodzinnymi-festynami-juz-niebawem-tymczasem-wspomnienie-edycji-sprzed-roku/main.jpg"
  },
  {
    "title": "28 marca 2024 r. Wójt Gminy Darłowo podpisał z firmą KRĘŻEL umowę na przebudowę ulic Morskiej i Wczasowej.",
    "desc": "Wspaniała wiadomość dla mieszkańców Wicia! 28 marca 2024 r. Wójt Gminy Darłowo podpisał z firmą KRĘŻEL umowę na przebudowę ulic Morskiej i Wczasowej.",
    "link": "/aktualnosci/28-marca-2024-r-wojt-gminy-darlowo-podpisal-z-firma-krezel-umowe-na-przebudowe-ulic-morskiej-i-wczasowej",
    "image": "/images/aktualnosci/28-marca-2024-r-wojt-gminy-darlowo-podpisal-z-firma-krezel-umowe-na-przebudowe-ulic-morskiej-i-wczasowej/main.jpg"
  },
  {
    "title": "Radość szósta: GAZYFIKACJA WICIA",
    "desc": "Dnia 23 grudnia niejako w prezencie świąteczno - noworocznym, dotarła do nas wspaniała wiadomość. Otóż dyrektor Polskiej Spółki Gazownictwa w Koszalinie, podjął decyzję o zasileniu gazem ziemnym naszego cudnego Wicia.",
    "link": "/aktualnosci/radosc-szosta-gazyfikacja-wicia",
    "image": "/images/aktualnosci/radosc-szosta-gazyfikacja-wicia/main.jpg"
  },
  {
    "title": "Radość piąta: NAPRAWA DROGI BARZOWICE - WICIE",
    "desc": "Na wniosek Rady Sołeckiej Wicia, Wydział Drogowy Starostwa Powiatowego w Sławnie, w dwóch etapach zlikwidował niebezpieczne wyboje na odcinku...",
    "link": "/aktualnosci/radosc-piata-naprawa-drogi-barzowice-wicie",
    "image": "/images/aktualnosci/radosc-piata-naprawa-drogi-barzowice-wicie/main.jpg"
  },
  {
    "title": "Radość czwarta: MODERNIZACJA UJĘCIA WODY I STACJI POMP",
    "desc": "Inwestycja niewidoczna i nie przez wszystkich nawet odczuwalna a jednak niezmiernie ważna i niezbędna. Gminny Zakład Użyteczności Publicznej uruchomił dodatkowe, wspomagające...",
    "link": "/aktualnosci/radosc-czwarta-modernizacja-ujecia-wody-i-stacji-pomp",
    "image": "/images/aktualnosci/radosc-czwarta-modernizacja-ujecia-wody-i-stacji-pomp/main.jpg"
  },
  {
    "title": "Radość trzecia: PRZEJŚCIE NA PLAŻĘ DLA NIEPEŁNOSPRAWNYCH – 3Z",
    "desc": "Urząd Gminy Darłowo, realizując zapis w realizacji funduszu sołeckiego Sołectwa Wicie na 2020 r. w uzgodnieniu z Urzędem Morskim w Szczecinie, zbudował przy wejściu 3Z, utwardzone, wygodne i estetyczne dojście do plaży, jako trakt dla niepełnosprawnych...",
    "link": "/aktualnosci/radosc-trzecia-przejscie-na-plaze-dla-niepelnosprawnych-3z",
    "image": "/images/aktualnosci/radosc-trzecia-przejscie-na-plaze-dla-niepelnosprawnych-3z/main.jpg"
  },
  {
    "title": "Radość druga: ODBUDOWA PLAŻY",
    "desc": "Oczekiwana od wielu lat i w zasadzie najważniejsza dla Wicia, inwestycja przywracająca sens bytu miejscowości bezpośrednio nadmorskiej. Inwestor: Urząd Morski w Szczecinie - dosłownie kilka miesięcy po objęciu nadzoru nad naszym, wiciowym morskim brzegiem. Refulacja objęła odcinek plaży od wejścia 2Z do połowy odcinka między 4W a 5W",
    "link": "/aktualnosci/radosc-druga-odbudowa-plazy",
    "image": "/images/aktualnosci/radosc-druga-odbudowa-plazy/main.jpg"
  },
  {
    "title": "Radość pierwsza: BUDOWA ULICY SŁONECZNEJ",
    "desc": "Koniec roku to dobry czas na podsumowanie 'poprzednika' a ten był przedziwny. Dla większości ludzi, rok najdziwniejszy ze wszystkich dotychczas przeżytych. Pandemia i to co się z nią łączy: wszelkie ograniczenia i po ludzku, zwyczajny strach, odbiły się znacząco na naszym życiu ale także na gospodarce. Tymczasem, paradoksalnie w tak dramatycznym...",
    "link": "/aktualnosci/radosc-pierwsza-budowa-ulicy-slonecznej",
    "image": "/images/aktualnosci/radosc-pierwsza-budowa-ulicy-slonecznej/main.jpg"
  },
  {
    "title": "Budowa ulicy Słonecznej w Wiciu",
    "desc": "Dzisiaj – 26 kwietnia - mija 5 miesięcy od rozpoczęcia budowy ulicy Słonecznej w naszym ukochanym Wiciu. Załączone zdjęcia nie są ułożone chronologicznie ale obrazują złożoność prac na różnych etapach budowy. Aktualnie rozpoczęto ustawianie krawężników i widoczny jest już zarys nawierzchni jezdni - zdjęcia na fb Gmina Darłowo INFO",
    "link": "/aktualnosci/budowa-ulicy-slonecznej-w-wiciu",
    "image": "/images/aktualnosci/budowa-ulicy-slonecznej-w-wiciu/main.jpg"
  }
];
</script>