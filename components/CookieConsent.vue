<template>
  <div class="cookie-popup">
    <div class="popup-content">
      <h2>🍪 Zgoda na cookies</h2>
      <p>
        Używamy cookies, aby poprawić Twoje doświadczenie. Akceptując, zgadzasz się na naszą
        <a href="/polityka-prywatnosci" target="_blank">Politykę prywatności</a>.
      </p>
      <div class="button-group">
        <button class="accept-btn" @click="$emit('accept')">Akceptuj</button>
        <button class="decline-btn" @click="handleDecline">Odrzuć</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Definiowanie emisji dla zdarzenia akceptacji
defineEmits<{
  (e: 'accept'): void;
}>();

// Obsługa kliknięcia "Odrzuć"
const handleDecline = () => {
  // Dla prostoty emitujemy 'accept' również przy odrzuceniu; dostosuj według potrzeb
  defineEmits(['accept'])('accept');
};
</script>

<style scoped>
.cookie-popup {
  position: fixed;
  bottom: 20px;
  right: 20px; /* Wyrównanie do prawej strony */
  background: #ffffff;
  padding: 15px; /* Zmniejszone padding */
  border-radius: 8px; /* Zmniejszony promień */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15); /* Mniejszy cień */
  max-width: 300px; /* Zmniejszona szerokość */
  z-index: 1000;
  font-family: 'Arial', sans-serif;
  animation: slideIn 0.5s ease-in-out;
}

.popup-content {
  text-align: center;
}

h2 {
  font-size: 18px; /* Zmniejszony rozmiar nagłówka */
  margin-bottom: 8px;
  color: #333;
}

p {
  font-size: 12px; /* Zmniejszony rozmiar tekstu */
  color: #666;
  margin-bottom: 15px;
}

a {
  text-decoration: none;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 10px; /* Zmniejszony odstęp między przyciskami */
}

.accept-btn,
.decline-btn {
  padding: 8px 16px; /* Zmniejszone padding przycisków */
  border: none;
  border-radius: 6px; /* Zmniejszony promień */
  cursor: pointer;
  font-size: 12px; /* Zmniejszony rozmiar tekstu */
  transition: background-color 0.3s ease;
}

.accept-btn {
  background: #28a745;
  color: white;
}

.accept-btn:hover {
  background: #218838;
}

.decline-btn {
  background: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
}

.decline-btn:hover {
  background: #e2e6ea;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>