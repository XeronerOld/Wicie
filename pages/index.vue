<template>
  <div>
    <Slider />
    <ServiceArea />
    <GalleryArea />
    <AppDownloadArea />
  </div>
</template>

<script setup lang="ts">
import Slider from '~/components/Slider.vue'; // Ścieżka do komponentu Slider
import ServiceArea from '~/components/ServiceArea.vue'; // Ścieżka do komponentu ServiceArea
import GalleryArea from '~/components/GalleryArea.vue'; // Ścieżka do komponentu GalleryArea
import AppDownloadArea from '~/components/AppDownloadArea.vue'; // Ścieżka do komponentu AppDownloadArea
import { useHead } from '@unhead/vue';

// Definiowanie metadanych SEO z domeną morzewicie.pl dla strony głównej
useHead({
  title: 'Morze Wicie - Wypoczynek nad Bałtykiem w Wiciu',
  meta: [
    {
      name: 'description',
      content: 'Zaplanuj wakacje w Wiciu nad Morzem Bałtyckim! Odkryj atrakcje, galerię zdjęć, historię i więcej na morzewicie.pl. Cisza, spokój i piękna przyroda czekają!',
    },
    {
      name: 'keywords',
      content: 'Wicie, wakacje Wicie, Morze Bałtyckie, nadmorska wieś, atrakcje Wicie, morzewicie.pl',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Morze Wicie - Wypoczynek nad Bałtykiem w Wiciu',
    },
    {
      property: 'og:description',
      content: 'Wicie - idealne miejsce na spokojne wakacje nad morzem. Sprawdź atrakcje, zdjęcia i informacje na morzewicie.pl!',
    },
    {
      property: 'og:image',
      content: 'https://morzewicie.pl/img/slider/slider1.jpg', // Przykładowy obraz, dostosuj do rzeczywistego
    },
    {
      property: 'og:url',
      content: 'https://morzewicie.pl/',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://morzewicie.pl/',
    },
  ],
});
</script>