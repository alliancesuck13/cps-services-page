"use strict";

export const initSwiper = () => {
  new Swiper(".swiper", {
    spaceBetween: 16,
    slidesPerView: 1.25,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.25,
      },
      360: {
        slidesPerView: 1.4,
      },
      400: {
        slidesPerView: 1.55,
      },
      440: {
        slidesPerView: 1.7,
      },
      480: {
        slidesPerView: 1.85,
      },
      520: {
        slidesPerView: 2,
      },
      560: {
        slidesPerView: 2.15,
      },
      600: {
        slidesPerView: 2.3,
      },
      640: {
        slidesPerView: 2.45,
      },
      680: {
        slidesPerView: 2.6,
      },
      720: {
        slidesPerView: 2.75,
      },
      760: {
        slidesPerView: 2.9,
      },
    },
  });
};
