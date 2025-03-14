import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        const $ = import('jquery').then((module) => {
            window.jQuery = window.$ = module.default;
            return module.default;
        });
        nuxtApp.provide('jquery', $);
    }
});