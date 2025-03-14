<template>
  <ClientOnly>
    <div class="masonry-grid" ref="grid">
      <div
          v-for="(photo, index) in items"
          :key="index"
          class="masonry-item"
      >
        <a
            :href="basePath + photo"
            :data-lightbox="group"
            :data-title="`${title} - Photo ${index + 1}`"
        >
          <img
              :src="basePath + photo"
              class="img-fluid"
              :alt="`${title} - Photo ${index + 1}`"
              loading="lazy"
              @load="layout"
              @error="handleImageError"
          >
        </a>
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'

defineProps<{
  items: string[]
  group: string
  basePath: string
  title: string
}>()

const grid = ref<HTMLElement | null>(null)
let masonryInstance: any = null
let lightbox: any = null

// Wykonaj kod tylko po stronie klienta
onMounted(async () => {
  if (process.client) {
    // Dynamiczne importowanie bibliotek
    const Masonry = (await import('masonry-layout')).default
    const lightbox2 = (await import('lightbox2')).default

    // Konfiguracja Lightbox2
    lightbox2.option({
      resizeDuration: 200,
      wrapAround: true,
      fadeDuration: 300,
      imageFadeDuration: 300,
      albumLabel: 'Zdjęcie %1 z %2',
      alwaysShowNavOnTouchDevices: true,
      disableScrolling: true,
      fitImagesInViewport: true
    })

    // Inicjalizacja Masonry
    await nextTick()
    if (grid.value) {
      masonryInstance = new Masonry(grid.value, {
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-item',
        percentPosition: true,
        gutter: 20,
        transitionDuration: '0.3s',
        horizontalOrder: true
      })
    }
  }
})

const layout = () => {
  if (masonryInstance && process.client) {
    masonryInstance.layout()
  }
}

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '/images/fallback-image.jpg' // Zmień na swoją ścieżkę
}
</script>

<style scoped>
.masonry-grid {
  margin: 0 -10px;
  padding: 0 10px;
}

.masonry-item {
  width: 18%;
  max-width: 95vw !important;
  transition: transform 0.2s ease;
}

.masonry-item img {
  width: 100%;
  max-width: 100% !important;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: block;
  margin-bottom: 10px;
}

.masonry-item:hover {
  transform: scale(1.03);
}

.masonry-item:hover img {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 992px) {
  .masonry-item {
    width: 33.33%;
  }
}

@media (max-width: 768px) {
  .masonry-item {
    width: 50%;
  }
}

@media (max-width: 576px) {
  .masonry-item {
    width: 96%;
  }
}
</style>