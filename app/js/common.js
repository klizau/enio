new Swiper(".slider-headline", {
  loop: true,
  autoplay: true,
  speed: 800,
});

new Swiper(".slider-portfolio", {
  loop: true,
  navigation: {
    nextEl: "#slider-r",
    prevEl: "#slider-l",
  },
  slidesPerView: 2,
  spaceBetween: 40,
  speed: 600,
});

new Swiper(".portfolio-slide", {
  loop: true,
  navigation: {
    nextEl: "#slider-right",
    prevEl: "#slider-left",
  },
  slidesPerView: 2,
  spaceBetween: 40,
  speed: 600,
});

new Swiper(".material__photos", {
  loop: true,
  navigation: {
    nextEl: ".slider__button-left",
    prevEl: ".slider__button-left",
  },
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 600,
});
