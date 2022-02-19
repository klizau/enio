$(document).ready(function () {
  $(".slider-headline").slick({
    arrows: false,
    loop: true,
  });

  $(".slider-portfolio").slick({
    prevArrow: ".slider-l",
    nextArrow: ".slider-r",
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  });

  $(".portfolio-slide").slick({
    prevArrow: ".slider-left",
    nextArrow: ".slider-right",
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  });
});
