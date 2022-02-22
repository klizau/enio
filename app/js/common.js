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
    nextEl: ".slider__button-right",
    prevEl: ".slider__button-left",
  },
  slidesPerView: 'auto',
  speed: 600,
});

new Swiper(".designers__profile", {
  slidesPerView: 4,
  spaceBetween: 44,
  speed: 600,
});



