<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="page-title pt-6 text-center">
            <h1 class="">Budowa ulicy Słonecznej w Wiciu</h1>
            <div class="breadcrumb">
              <ul class="breadcrumb-list">
                <li>
                  <NuxtLink to="/aktualnosci">Aktualności</NuxtLink>
                </li>
                <li>
                  <NuxtLink
                      to="/aktualnosci/budowa-ulicy-slonecznej-w-wiciu">
                    Budowa ulicy Słonecznej w Wiciu
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
            <div class="content-image mt-0 mb-5">
              <img src="/images/aktualnosci/budowa-ulicy-slonecznej-w-wiciu/main.jpg" class="img-fluid">
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <div class="pb-50 pr-30">
              <h1>Budowa ulicy Słonecznej w Wiciu</h1>
              Dzisiaj – <strong>26 kwietnia</strong> – mija <strong>5 miesięcy</strong> od rozpoczęcia budowy ulicy Słonecznej w naszym ukochanym <strong>Wiciu</strong>.
              <br><br>
              Załączone zdjęcia nie są ułożone chronologicznie, ale obrazują złożoność prac na różnych etapach budowy.
              <br><br>
              Aktualnie rozpoczęto ustawianie krawężników i widoczny jest już zarys nawierzchni jezdni – zdjęcia na <strong>fb Gmina Darłowo INFO</strong>.
            </div>
          </div>
          <div class="col-12">
            <MasonryGrid
                group="Radość pierwsza:  BUDOWA ULICY SŁONECZNEJ"
                :items="images"
                title="Radość pierwsza:  BUDOWA ULICY SŁONECZNEJ"
                base-path="/images/aktualnosci/budowa-ulicy-slonecznej-w-wiciu/"
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
import {useHead} from '@unhead/vue';

// Definiowanie obrazów
const images = [
  "5ea5838a10c35569235298.jpg",
  "5ea58384dcef8141456113.jpg",
  "5ea58384ec8bd141207355.jpg",
  "5ea58385a42e6324176181.jpg",
  "5ea58385e6a1a906521149.jpg",
  "5ea58385e571e767429769.jpg",
  "5ea58386cc1fb873376767.jpg",
  "5ea58386cfa88726443967.jpg",
  "5ea58387c2626483521643.jpg",
  "5ea58387c2648818868751.jpg",
  "5ea58388b2e9b107113380.jpg",
  "5ea58388b4e30248383370.jpg",
  "5ea58388ea4cc720383444.jpg",
  "5ea58388eb393075431575.jpg",
  "5ea58389cfea0407602614.jpg",
  "5ea58389cff39581192393.jpg",
  "5ea583848ff08854831110.jpg",
  "5ea583849fcb9931837478.jpg",
  "5ea583853ea11565793480.jpg",
  "5ea583853ea97467343673.jpg",
  "5ea583857f8b9100236874.jpg",
  "5ea583864a67a224521190.jpg",
  "5ea583864a652434531210.jpg",
  "5ea583868dd1d630505459.jpg",
  "5ea583868e1df486915355.jpg",
  "5ea583870efc1399329762.jpg",
  "5ea583881a030150915338.jpg",
  "5ea583882b40b221832910.jpg",
  "5ea583892de9e089263037.jpg",
  "5ea583892f041785819315.jpg",
  "5ea5838871f8b362927946.jpg",
  "5ea5838966e12339082033.jpg",
  "5ea5838966e19257517833.jpg",
  "5ea58388434e9920774302.jpg",
  "5ea583875368f124988487.jpg",
  "5ea583878250f942531562.jpg",
  "5ea583899531f861221245.jpg",
  "5ea5838575734782235533.jpg",
  "5ea5838710218876144213.jpg",
  "5ea5838753691871192814.jpg",
  "5ea5838781178106986233.jpg",
  "5ea5838801255141341200.jpg",
  "5ea5838874905727668501.jpg",
  "5ea5838999371202134101.jpg"
];

// Konfiguracja SEO z useHead
useHead({
  title: 'Radość pierwsza: Budowa ulicy Słonecznej w Wiciu | 2020',
  meta: [
    {
      name: 'description',
      content: 'Budowa ulicy Słonecznej w Wiciu – inwestycja za 5 mln zł zakończona w 2020 roku. Chodniki, oświetlenie i instalacje podziemne. Sprawdź szczegóły!'
    },
    {
      name: 'keywords',
      content: 'budowa ulicy Słonecznej, Wicie, inwestycja 2020, pandemia, infrastruktura Wicie, ulica Słoneczna, turystyka'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph (dla mediów społecznościowych)
    {
      property: 'og:title',
      content: 'Radość pierwsza: Budowa ulicy Słonecznej w Wiciu | 2020'
    },
    {
      property: 'og:description',
      content: 'Wicie w 2020 roku z nową ulicą Słoneczną za 5 mln zł – chodniki, oświetlenie i więcej. Inwestycja w czasie pandemii. Zobacz na morzewicie.pl!'
    },
    {
      property: 'og:image',
      content: '/images/aktualnosci/budowa-ulicy-slonecznej-w-wiciu/main.jpg'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/aktualnosci/budowa-ulicy-slonecznej-w-wiciu'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Radość pierwsza: Budowa ulicy Słonecznej w Wiciu'
    },
    {
      name: 'twitter:description',
      content: 'Nowa ulica Słoneczna w Wiciu za 5 mln zł – inwestycja zakończona w 2020 roku w czasie pandemii. Szczegóły na morzewicie.pl.'
    },
    {
      name: 'twitter:image',
      content: '/images/aktualnosci/budowa-ulicy-slonecznej-w-wiciu/main.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/aktualnosci/budowa-ulicy-slonecznej-w-wiciu'
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