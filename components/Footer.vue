<template>
<footer class="footer-area pos-rel pt-50">
<div class="container mb-5">
  <h3 class="mb-3">Przydatne telefony</h3>
  <div class="row">
    <!-- Kolumna 1 -->
    <div class="col-12 col-md-3">
      <div class="contact-list">
        <!-- Sołtys Sołectwa Wicie -->
        <div class="contact-item">
          <div class="contact-label">Sołtys Sołectwa Wicie</div>
          <div class="contact-value"><small>Tomasz Urbański</small></div>
          <div class="contact-value">
            <a href="tel:608657567" class="text-orange"><i class="fas fa-phone"></i> 608 657 567</a>
          </div>
          <div class="contact-value">
            <a href="mailto:soltys@morzewicie.pl" class="text-orange"><i class="fas fa-envelope"></i> soltys@morzewicie.pl</a>
          </div>
          <div class="contact-value"><small>PKO BP</small></div>
          <div class="contact-value text-orange" style="font-size: 12px;">74 1020 4681 0000 1902 0054 6317</div>
        </div>
      </div>
    </div>

    <!-- Kolumna 2 -->
    <div class="col-12 col-md-3">
      <div class="contact-list">
        <!-- Urząd Gminy Darłowo -->
        <div class="contact-item">
          <div class="contact-label">Urząd Gminy Darłowo</div>
          <div class="contact-value">
            <a href="tel:943446301" class="text-orange"><i class="fas fa-phone"></i> 94 34 46 301</a>
          </div>
        </div>

        <!-- Parafia Barzowice -->
        <div class="contact-item">
          <div class="contact-label mb-0">Parafia Barzowice</div>
          <div class="contact-value"><small>ks. Mirosław Kosior</small></div>
          <div class="contact-value">
            <a href="tel:943143663" class="text-orange"><i class="fas fa-phone"></i> 94 314 36 63</a>
          </div>
        </div>

        <!-- Straż Pożarna -->
        <div class="contact-item">
          <div class="contact-label">Straż Pożarna</div>
          <div class="contact-value">
            <a href="tel:943142748" class="text-orange"><i class="fas fa-phone"></i> 94 314 27 48 lub 998</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Kolumna 3 -->
    <div class="col-12 col-md-3">
      <div class="contact-list">
        <!-- Policja -->
        <div class="contact-item">
          <div class="contact-label">Policja</div>
          <div class="contact-value">
            <a href="tel:943157311" class="text-orange"><i class="fas fa-phone"></i> 94 315 73 11 lub 789 444 608</a>
          </div>
        </div>

        <!-- Pogotowie energetyczne -->
        <div class="contact-item">
          <div class="contact-label">Pogotowie energetyczne</div>
          <div class="contact-value">
            <a href="tel:991" class="text-orange"><i class="fas fa-phone"></i> 991</a>
          </div>
        </div>

        <!-- Ratownictwo medyczne -->
        <div class="contact-item">
          <div class="contact-label">Ratownictwo medyczne</div>
          <div class="contact-value">
            <a href="tel:999" class="text-orange"><i class="fas fa-phone"></i> 999</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Kolumna 4 -->
    <div class="col-12 col-md-3">
      <div class="contact-list">
        <!-- GZUP -->
        <div class="contact-item">
          <div class="contact-label">GZUP</div>
          <div class="contact-value">
            <a href="tel:605211777" class="text-orange"><i class="fas fa-phone"></i> 605 211 777</a>
          </div>
        </div>

        <!-- Utrzymanie dróg gm. -->
        <div class="contact-item">
          <div class="contact-label mb-0">Utrzymanie dróg gm.</div>
          <div class="contact-value"><small>p. Sobieraj</small></div>
          <div class="contact-value">
            <a href="tel:601872158" class="text-orange"><i class="fas fa-phone"></i> 601 872 158</a>
          </div>
        </div>

        <!-- Awarie sieci wod./kan. -->
        <div class="contact-item">
          <div class="contact-label">Awarie sieci wod./kan.</div>
          <div class="contact-value">
            <a href="tel:605211777" class="text-orange"><i class="fas fa-phone"></i> 605 211 777</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="footer-copy-right black-bg-soft2 pt-25 pb-25">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-left">
          <span>© 2025 Morzewicie.pl - Wszelkie prawa zastrzeżone, stworzone przez Code0.pl</span>
        </div>
      </div>
    </div>
  </div>
</div>
</footer>
</template>

<style scoped>
.footer-area {
  background-color: #f5f5f5; /* Jasnobeżowe tło zgodne z morzewicie.pl */
  color: #333; /* Główny kolor tekstu */
}

.footer-area h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000; /* Czarny nagłówek */
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Odstęp między elementami w kolumnie */
}

.contact-item {
  display: flex;
  flex-direction: column;
}

.contact-label {
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.contact-value {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
}

.contact-value a {
  color: #00aa55; /* Pomarańczowy kolor dla linków */
  text-decoration: none;
}

.contact-value a:hover {
  text-decoration: underline;
}

.contact-value i {
  margin-right: 8px;
  color: #00aa55; /* Dopasowanie koloru ikony do linków */
}

.contact-value small {
  color: #666; /* Lekko szary kolor dla dodatkowych informacji */
}

.black-bg-soft2 {
  background-color: #e0e0e0; /* Lekko ciemniejsze tło dla dolnej części */
  color: #333;
}

.black-bg-soft2 span {
  font-size: 0.9rem;
}

/* Responsywność */
@media (max-width: 767px) {
  .contact-list {
    margin-bottom: 20px; /* Dodatkowy odstęp między kolumnami na małych ekranach */
  }

  .contact-label {
    font-size: 1rem;
  }

  .contact-value {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .footer-area h3 {
    font-size: 1.3rem;
  }
}
</style>

<script setup lang="ts">
</script>