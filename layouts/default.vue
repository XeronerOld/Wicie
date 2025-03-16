<template>
  <div>
    <!-- Preloader -->
    <Preloader />

    <!-- Header -->
    <Header />

    <div class="body-overlay"></div>

    <!-- Main Content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Cookie Consent Popup -->
    <CookieConsent v-if="showPopup" @accept="handleAccept" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Preloader from '~/components/Preloader.vue'; // Adjust path if needed
import Header from '~/components/Header.vue';     // Adjust path if needed
import Footer from '~/components/Footer.vue';     // Adjust path if needed
import CookieConsent from '~/components/CookieConsent.vue'; // Adjust path if needed

// Reactive state for showing the popup
const showPopup = ref(false);

// Check consent on mount (client-side only)
onMounted(() => {
  const consent = localStorage.getItem('cookieConsent');
  if (consent !== 'true') {
    showPopup.value = true;
  }
});

// Handle accept button click
const handleAccept = () => {
  showPopup.value = false;
  localStorage.setItem('cookieConsent', 'true');
};
</script>
<style>
* {
  text-decoration: none !important;
}
</style>