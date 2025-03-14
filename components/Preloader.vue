<template>
  <div id="preloader" v-if="isLoading">
    <div class="preloader">
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script setup>
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000); // Symulacja ładowania
});
</script>