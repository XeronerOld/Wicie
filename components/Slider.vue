<template>
  <div class="slider-area pos-rel">
    <div
        class="single-slider slider-height pos-rel d-flex align-items-center align-items-lg-end"
        style="background-image: url(/img/slider/slider1.jpg);"
    >
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-10 d-flex align-items-center">
            <div class="slider__content slider-one-content text-left">
              <h1 class="main-title mb-25 animated wow fadeInUp" data-wow-delay=".3s">
                A mo<del style="color:red;text-decoration: line-through !important;">ż</del>rze Wicie ?
              </h1>
              <h6 class="sub-title2 mb-40 animated wow fadeInUp" data-wow-delay=".4s">
                Zapraszamy na wypozytczek nad morze <br>do malowniczej wsi Wicie
              </h6>
              <ul class="btn-list mb-45 animated wow fadeInUp" data-wow-delay=".5s">
                <li>
                  <NuxtLink to="/historia" class="theme_btn active-btn">
                    Czytaj więcej - Oto Wicie <i class="far fa-long-arrow-right"></i>
                  </NuxtLink>
                </li>
              </ul>
              <div class="time-weather animated wow fadeInUp" data-wow-delay=".6s" id="weather-widget">
                <span><i class="fal fa-clock"></i> <span id="clock">Ładowanie...</span></span>
                <span><i class="fal fa-sun"></i> <span id="temperature" class="mr-0">Ładowanie...</span>°C</span>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 d-none d-lg-block">
            <div class="slider-hero-img">
              <img class="img-fluid hero-right" src="/img/slider/hero-img1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';


// Inicjalizacja WOW.js
onMounted(async () => {
  if (process.client) {
    const WOW = (await import('wow.js')).default;
    new WOW().init();
  }

  // Funkcja aktualizująca czas
  function updateTime() {
    const now = new Date();
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Europe/Warsaw' // Strefa czasowa Polski
    };
    const timeString = now.toLocaleTimeString('pl-PL', options);
    document.getElementById('clock').textContent = timeString;
  }

  // Aktualizuj czas co sekundę
  setInterval(updateTime, 1000);
  updateTime(); // Wywołanie początkowe

  // Funkcja mapująca weathercode na opis pogody
  function getWeatherDescription(weatherCode) {
    // Mapowanie kodów Open-Meteo na opisy (na podstawie dokumentacji Open-Meteo WMO codes)
    const weatherMap = {
      0: 'Słonecznie',
      1: 'Przeważnie słonecznie',
      2: 'Częściowo pochmurno',
      3: 'Pochmurno',
      45: 'Mgła',
      48: 'Mgła z osadem',
      51: 'Lekka mżawka',
      53: 'Mżawka',
      55: 'Intensywna mżawka',
      61: 'Lekki deszcz',
      63: 'Deszcz',
      65: 'Ulewa',
      71: 'Lekki śnieg',
      73: 'Śnieg',
      75: 'Obfity śnieg',
      95: 'Burza',
      96: 'Burza z gradem',
      99: 'Burza z intensywnym gradem'
    };
    return weatherMap[weatherCode] || 'Nieznana pogoda';
  }

  // Funkcja pobierania danych pogodowych z Open-Meteo API
  async function fetchWeather() {
    const latitude = 54.505279; // Współrzędne Wicie
    const longitude = 16.473216;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m&temperature_unit=celsius&windspeed_unit=kmh&precipitation_unit=mm&timeformat=unixtime`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        const errorText = await response.text();
        console.log('Błąd API:', response.status, errorText);
        document.getElementById('temperature').textContent = `Błąd (${response.status})`;
        return;
      }
      const data = await response.json();

      // Pobieranie danych pogodowych
      const temp = data.current_weather.temperature; // Temperatura
      const windSpeed = data.current_weather.windspeed; // Prędkość wiatru
      const weatherCode = data.current_weather.weathercode; // Kod pogody
      const humidity = data.hourly.relativehumidity_2m[0]; // Wilgotność (pierwsza wartość z godzinowych danych)

      // Aktualizacja elementów DOM
      document.getElementById('temperature').textContent = temp.toFixed(1);
    } catch (error) {
      console.error('Błąd połączenia:', error);
      document.getElementById('temperature').textContent = 'Błąd';
    }
  }

  // Wywołaj funkcję pobierania pogody przy załadowaniu
  fetchWeather();
  // Odświeżaj temperaturę co 15 minut
  setInterval(fetchWeather, 900000);
});
</script>

