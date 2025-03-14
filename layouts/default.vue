<template>
  <div>
    <!-- Preloader -->
    <Preloader />

    <!-- Header -->
    <Header />

    <!-- Slide Bar (Mobile Menu) -->
    <aside class="slide-bar">
      <div class="close-mobile-menu">
        <a href="javascript:void(0);"><i class="fas fa-times"></i></a>
      </div>
      <!-- Offset Sidebar -->
      <div class="offset-sidebar">
        <div class="offset-widget offset-logo mb-30">
          <NuxtLink to="/">
            <img src="/img/logo/header_logo_one.png" alt="logo" />
          </NuxtLink>
        </div>
        <div class="offset-widget mb-40">
          <div class="info-widget">
            <h4 class="offset-title mb-20">About Us</h4>
            <p class="mb-30">
              But I must explain to you how all this mistaken idea...
            </p>
            <NuxtLink to="/contact" class="theme_btn theme_btn2">Contact Us</NuxtLink>
          </div>
        </div>
        <div class="offset-widget mb-30 pr-10">
          <div class="info-widget info-widget2">
            <h4 class="offset-title mb-20">Contact Info</h4>
            <p><i class="fal fa-address-book"></i> 23/A, Miranda City...</p>
            <p><i class="fal fa-phone"></i> +0989 7876 9865 9</p>
            <p><i class="fal fa-envelope-open"></i> info@example.com</p>
          </div>
        </div>
      </div>
      <!-- Side Mobile Menu -->
      <nav class="side-mobile-menu">
        <ul id="mobile-menu-active">
          <li class="has-dropdown">
            <NuxtLink to="/">Home</NuxtLink>
            <ul class="sub-menu">
              <li><NuxtLink to="/">Home Style 1</NuxtLink></li>
              <li><NuxtLink to="/index-2">Home Style 2</NuxtLink></li>
              <!-- itd. -->
            </ul>
          </li>
          <li><NuxtLink to="/about">About Us</NuxtLink></li>
          <!-- Pozostałe pozycje menu -->
        </ul>
      </nav>
    </aside>
    <div class="body-overlay"></div>

    <!-- Main Content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>