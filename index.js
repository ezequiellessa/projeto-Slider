
var $simpleCarousel = document.querySelector(".js-carousel--simple");
 
new Glider($simpleCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
},
responsive: [
    {
        breakpoint: 120,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    {
        breakpoint: 422,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    {
        breakpoint: 625,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: 1069,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
    },
  },
],
});

