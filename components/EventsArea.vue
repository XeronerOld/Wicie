<template>
  <section class="events-routine-area grey-bg-03 pt-140 pb-60">
    <div class="container custom-conatainer-01">
      <div class="row">
        <div class="col-xl-4 offset-xl-4">
          <div class="section-title theme-border text-center mb-45">
            <h6 class="left_line">Our Events</h6>
            <h2>Upcoming Events</h2>
          </div>
        </div>
      </div>
      <div v-for="(event, index) in events" :key="index" class="events-bg">
        <div class="hover-content" style="background-image: url(/img/bg/routine-bg1.jpg);"></div>
        <div class="row justify-content-sm-center">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div class="events-schedule">
              <span class="heding-title">24th June 2020</span>
            </div>
          </div>
          <div class="col-xl-6 col-lg-5 col-md-5 col-sm-5">
            <div class="events ml-60 pb-35">
              <h3 class="events-title">New Year Vote 2020</h3>
              <span class="time-date"><i class="fal fa-clock"></i> 12:45 CST</span>
              <span class="time-date"><i class="fal fa-user"></i> Avocode D. Downi</span>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4">
            <div class="book-btn text-right">
              <NuxtLink to="/events" class="theme_btn white_btn">
                Book A Seat <i class="far fa-long-arrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const events = ref([1, 2, 3, 4]); // Przykładowa lista wydarzeń
</script>