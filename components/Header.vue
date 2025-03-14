<template>
  <header :class="['transparent-head-one', 'sticky-header', { 'scrolled': isScrolled }]">
    <!-- Główna nawigacja -->
    <div class="main-header-area">
      <div class="container">
        <div class="row no-gutters align-items-center">
          <!-- Logo -->
          <div class="col-xl-2 col-lg-3 col-md-6 col-6">
            <div class="logo">
              <a href="/" class="logo-img">
                <img src="/logo.png" alt="Logo" />
              </a>
            </div>
          </div>

          <!-- Menu (widoczne na dużych ekranach) -->
          <div class="col-xl-7 col-lg-8 d-none d-lg-block">
            <div class="main-menu menu-01 text-right">
              <nav>
                <ul>
                  <li><a href="/">Strona Główna</a></li>
                  <li>
                    <NuxtLink to="/o-wiciach">O Wiciach <i class="far fa-chevron-down"></i></NuxtLink>
                    <ul class="submenu">
                      <li><NuxtLink to="/historia">Historia</NuxtLink></li>
                      <li><NuxtLink to="/geografia">Geografia</NuxtLink></li>
                      <li><NuxtLink to="/foto-wicie">Foto Wicie</NuxtLink></li>
                    </ul>
                  </li>
                  <li>
                    <NuxtLink to="/dla-turystow">Dla turystów <i class="far fa-chevron-down"></i></NuxtLink>
                    <ul class="submenu">
                      <li><NuxtLink to="/warto-odwiedzic">Warto odwiedzić</NuxtLink></li>
                      <li><NuxtLink to="/atrakcje">Atrakcje</NuxtLink></li>
                      <li><NuxtLink to="/spanko">Spanko</NuxtLink></li>
                      <li><NuxtLink to="/jedzonko">Jedzonko</NuxtLink></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <!-- Przycisk kontaktowy i hamburger -->
          <div class="col-xl-3 col-md-6 col-6 text-right">
            <div class="hamburger-menu d-md-block d-lg-none">
              <a href="javascript:void(0);" @click="toggleMobileMenu">
                <i class="far fa-bars"></i>
              </a>
            </div>
            <div class="main-header-right-one d-none d-xl-block">
              <div class="donate">
                <NuxtLink to="/aktualnosci" class="theme_btn active-btn ">
                  Aktualności <i class="fal fa-newspaper"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu mobilne -->
    <div v-if="isMobileMenuOpen" class="mobile-menu">
      <nav>
        <ul>
          <li><NuxtLink to="/" @click="toggleMobileMenu">Strona Główna</NuxtLink></li>
          <li>
            <NuxtLink to="/o-wiciach" @click="toggleMobileMenu">O Wiciach</NuxtLink>
            <ul class="submenu">
              <li><NuxtLink to="/historia" @click="toggleMobileMenu">Historia</NuxtLink></li>
              <li><NuxtLink to="/geografia" @click="toggleMobileMenu">Geografia</NuxtLink></li>
              <li><NuxtLink to="/foto-wicie" @click="toggleMobileMenu">Foto Wicie</NuxtLink></li>
            </ul>
          </li>
          <li>
            <NuxtLink to="/dla-turystow" @click="toggleMobileMenu">Dla turystów</NuxtLink>
            <ul class="submenu">
              <li><NuxtLink to="/warto-odwiedzic" @click="toggleMobileMenu">Warto odwiedzić</NuxtLink></li>
              <li><NuxtLink to="/atrakcje" @click="toggleMobileMenu">Atrakcje</NuxtLink></li>
              <li><NuxtLink to="/spanko" @click="toggleMobileMenu">Spanko</NuxtLink></li>
              <li><NuxtLink to="/jedzonko" @click="toggleMobileMenu">Jedzonko</NuxtLink></li>
            </ul>
          </li>
          <li><NuxtLink to="/aktualnosci" @click="toggleMobileMenu">Aktualności</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Stan menu mobilnego i przewijania
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

// Funkcja przełączająca menu mobilne
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Funkcja sprawdzająca przewijanie
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Dodaj i usuń listener scrolla
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
  background: none;
  img {
    height: 60px;
  }
}

/* Styl dla przewiniętej wersji */
.sticky-header.scrolled {
  background-color: #263238;
  transition: background-color 0.1s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  img {
    height: 80px;
  }
}

/* Menu mobilne */
.mobile-menu {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #263238;
}

/* Styl dla głównego obszaru nagłówka */
.main-header-area {
  padding: 0; /* Dodaj padding dla lepszego wyglądu */
}

/* Styl dla logo */
.logo img {
  max-height: 80px; /* Dostosuj rozmiar logo */
}

/* Zapewnij, że submenu działa poprawnie */
.main-menu ul li {
  position: relative;
  display: inline-block;
}

.main-menu ul li .submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #263238;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: none;
}

.main-menu ul li:hover .submenu {
  display: block;
}

/* Styl dla mobilnego menu */
.mobile-menu ul {
  padding: 20px;
}

.mobile-menu ul li {
  margin: 10px 0;
}

.mobile-menu ul .submenu {
  padding-left: 20px;
}

/* Styl dla hamburgera */
.hamburger-menu {
  display: inline-block;
}

/* Responsywność */
@media (max-width: 991px) {
  .main-header-area {
    padding: 10px 0;
  }

  .logo img {
    max-height: 40px;
  }
}
</style>