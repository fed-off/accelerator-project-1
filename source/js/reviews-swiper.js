import Swiper from './vendor/swiper';

new Swiper('.reviews__slider', {
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: '.reviews__slider-button--next',
    prevEl: '.reviews__slider-button--prev',
  },
  breakpoints: {
    1366: {
      simulateTouch: false,
    }
  }
});
