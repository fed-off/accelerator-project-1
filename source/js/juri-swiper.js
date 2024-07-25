import Swiper from './vendor/swiper';

new Swiper('.juri__slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: '.juri__slider-button--next',
    prevEl: '.juri__slider-button--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
      simulateTouch: false,
    }
  }
});
