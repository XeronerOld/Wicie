// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    plugins: ['./plugins/jquery.client.js'],
    app: {
        head: {
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: ''},
            ],
            link: [
                {rel: 'icon', type: 'image/png', href: "favicon.png"}
            ],
            script: [
                {src: '/js/vendor/modernizr-3.5.0.min.js'},
                {src: '/js/vendor/jquery-3.5.1.min.js'},
                {src: '/js/popper.min.js'},
                {src: '/js/bootstrap.min.js'},
                {src: '/js/owl.carousel.min.js'},
                {src: '/js/isotope.pkgd.min.js'},
                {src: '/js/slick.min.js'},
                {src: '/js/jquery.meanmenu.min.js'},
                {src: '/js/metisMenu.min.js'},
                {src: '/js/jquery.nice-select.js'},
                {src: '/js/ajax-form.js'},
                {src: '/js/wow.min.js'},
                {src: '/js/jquery.scrollUp.min.js'},
                {src: '/js/imagesloaded.pkgd.min.js'},
                {src: '/js/jquery.magnific-popup.min.js'},
                {src: '/js/jquery.easypiechart.js'},
                {src: '/js/tilt.jquery.js'},
                {src: '/js/plugins.js'},
                {src: '/js/lightbox.min.js'}
            ]
        }
    },
    css: [
        '~/assets/css/bootstrap.min.css',
        '~/assets/css/owl.carousel.min.css',
        '~/assets/css/animate.css',
        '~/assets/css/magnific-popup.css',
        '~/assets/css/all.min.css',
        '~/assets/css/flaticon.css',
        '~/assets/css/font.css',
        '~/assets/css/themify-icons.css',
        '~/assets/css/metisMenu.css',
        '~/assets/css/nice-select.css',
        '~/assets/css/slick.css',
        '~/assets/css/main.css',
        '~/assets/css/lightbox.min.css'
    ],
    // Opcjonalnie: jeśli używasz PostCSS lub inne narzędzia
    postcss: {
        plugins: {
            autoprefixer: {}
        }
    }
})
