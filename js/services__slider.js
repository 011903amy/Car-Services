var slider = tns({
  container: ".homeContent__content",
  items: 3,
  speed: 200,
  gutter: 20,
  slideBy: "1",
  autoplay: false,
  navPosition: "bottom",
  controls: "#controls",
  prevButton: ".prev",
  nextButton: ".next",

  responsive:{
    1250:{
      items:3,
    },
    200:{
      items:2,
    },
  }
});

