<template>
  <section class="latest-news-area pb-70 mt-50">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="section-title text-left mb-45">
            <h6 class="left_line pl-55">Daily Updates</h6>
            <h2 class="mb-75">Latest Articles Updated Daily</h2>
            <NuxtLink to="/news-details" class="theme_btn">
              Our Insights <i class="far fa-long-arrow-right"></i>
            </NuxtLink>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="news mb-30">
            <div class="news__thumb">
              <img src="/img/news/news1.png" alt="" />
            </div>
            <div class="news__content">
              <span class="tag mb-15">City Portal</span>
              <h5 class="news-title mb-20">
                <NuxtLink to="/news-details">Discover the natural beauty & resources of City’s</NuxtLink>
              </h5>
              <div class="news__content--meta">
                <NuxtLink to="#" class="mre_btn2 mr-60">Read More</NuxtLink>
                <span><i class="fal fa-calendar-alt"></i> 24th November 2020</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="news mb-30">
            <div class="news__thumb">
              <img src="/img/news/news2.png" alt="" />
            </div>
            <div class="news__content">
              <span class="tag mb-15">Explore</span>
              <h5 class="news-title mb-20">
                <NuxtLink to="/news-details">The adventures awaiting for you in the City’s Parks</NuxtLink>
              </h5>
              <div class="news__content--meta">
                <NuxtLink to="#" class="mre_btn2 mr-60">Read More</NuxtLink>
                <span><i class="fal fa-calendar-alt"></i> 24th November 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>