var slider = tns({
  container: ".headerBanner__slider",
  items: 1,
  axis: "vertical",
  speed: 200,
  slideBy: "page",
  autoHeight: true,
  autoplay: true,
  navPosition: "bottom",
  controls: false,

  responsive: {
    1250: {
      items: 1,
    },
    200: {
      items: 1,
    },
  },
});

