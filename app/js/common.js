new Swiper(".slider-headline", {
  loop: true,
  autoplay: true,
  speed: 800,
});

new Swiper("#project-slider-1", {
  slidesPerView: "auto",
  navigation: {
    nextEl: "#slider-btn-r-1",
    prevEl: "#slider-btn-l-1",
  },
  speed: 600,
});

new Swiper("#project-slider-2", {
  slidesPerView: "auto",
  navigation: {
    nextEl: "#slider-btn-r-2",
    prevEl: "#slider-btn-l-2",
  },
  speed: 600,
});

new Swiper(".material__photos", {
  loop: true,
  navigation: {
    nextEl: ".slider__button-right",
    prevEl: ".slider__button-left",
  },
  slidesPerView: "auto",
  speed: 600,
});

new Swiper(".designers__slider", {
  slidesPerView: "auto",
  watchOveflow: true,
  speed: 600,
});

var burgerButton = document.querySelector(".burger-button");

burgerButton.addEventListener("click", function () {
  document.body.classList.toggle("menu-opened");
});
