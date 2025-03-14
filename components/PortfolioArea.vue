<template>
  <section id="top-menu" class="portfolio-area pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-12">
          <div class="portfolio mb-50">
            <div class="portfolio__img pos-rel">
              <div class="portfolio__img--thumb">
                <img src="/img/portfolio/portfolio1.jpg" alt="" />
              </div>
              <div class="portfolio__img--mayor">
                <img class="img-fluid" src="/img/portfolio/portfolio2.png" alt="" />
              </div>
              <div class="portfolio__img--sign">
                <img class="img-fluid" src="/img/portfolio/signature1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12">
          <div class="portfolio-wrapper pl-40">
            <ul class="nav nav-tabs mb-60" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                    class="nav-link"
                    :class="{ active: activeTab === 'home' }"
                    @click="activeTab = 'home'"
                    href="#home"
                >
                  <span class="box-btn"></span> Section One
                </a>
              </li>
              <li class="nav-item">
                <a
                    class="nav-link"
                    :class="{ active: activeTab === 'profile' }"
                    @click="activeTab = 'profile'"
                    href="#profile"
                >
                  <span class="box-btn"></span> Section Two
                </a>
              </li>
              <li class="nav-item">
                <a
                    class="nav-link"
                    :class="{ active: activeTab === 'contact' }"
                    @click="activeTab = 'contact'"
                    href="#contact"
                >
                  <span class="box-btn"></span> Section Three
                </a>
              </li>
            </ul>
            <div class="tab-content pr-20" id="myTabContent">
              <div v-show="activeTab === 'home'" class="tab-pane fade" :class="{ 'show active': activeTab === 'home' }">
                <div class="portfolio">
                  <div class="section-title mb-10">
                    <h6 class="left_line pl-55">City Mayor</h6>
                    <h2>Christina J. Walsh</h2>
                  </div>
                  <div class="portfolio__content">
                    <h6 class="mb-30">Lorem ipsum dolor sit amet...</h6>
                    <p class="mb-35">Mayor Christina J. Walsh...</p>
                    <NuxtLink to="/contact" class="theme_btn">
                      Contact Us <i class="far fa-long-arrow-right"></i>
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div v-show="activeTab === 'profile'" class="tab-pane fade" :class="{ 'show active': activeTab === 'profile' }">
                <div class="portfolio">
                  <div class="section-title mb-10">
                    <h6 class="left_line pl-55">Deputy Mayor</h6>
                    <h2>Mirinda D. Hurdy</h2>
                  </div>
                  <div class="portfolio__content">
                    <h6 class="mb-30">Lorem ipsum dolor sit amet...</h6>
                    <p class="mb-35">Mayor Christina J. Walsh...</p>
                    <NuxtLink to="/contact" class="theme_btn">
                      Contact Us <i class="far fa-long-arrow-right"></i>
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div v-show="activeTab === 'contact'" class="tab-pane fade" :class="{ 'show active': activeTab === 'contact' }">
                <div class="portfolio">
                  <div class="section-title mb-10">
                    <h6 class="left_line pl-55">City Counsilor</h6>
                    <h2>Belmonte Chriss</h2>
                  </div>
                  <div class="portfolio__content">
                    <h6 class="mb-30">Lorem ipsum dolor sit amet...</h6>
                    <p class="mb-35">Mayor Christina J. Walsh...</p>
                    <NuxtLink to="/contact" class="theme_btn">
                      Contact Us <i class="far fa-long-arrow-right"></i>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeTab = ref('home');
</script>