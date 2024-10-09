

// var slider = tns({
//   container: ".services__features--details",
//   items: 3,
//   speed: 300,
//   gutter: 30,
//   slideBy: 1,
//   autoplay: false,
//   navPosition: "bottom",
//   contianerControls: "#controls",
//   prevButton: ".prev",
//   nextButton: ".next",
//   responsive: {
//     1250: {
//       items: 1,
//     },
//     200: {
//       items: 1,
//     },
//   },
// });

var slider = tns({
  container: ".services__card",
  items: 3,
  speed: 200,
  gutter: 30,
  slideBy: "1",
  autoplay: false,
  navPosition: "bottom",
  controls: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
  responsive:{
    1250:{
      items: 3,

    },
    200:{
      items:2,
    }

  }
});

