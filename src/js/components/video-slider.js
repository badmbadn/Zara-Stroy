import { Swiper, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation,  } from 'swiper'
Swiper.use([ Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, ])

const videoSlider = new Swiper('.video-slider', {
    // Optional parameters
    slidesPerView:1,
    touchRatio:2,
    simulateTouch:false,
    spaceBetween:30,
    loop: false,
    breakpoints: {
        768: {
            slidesPerView:1,
            initialSlide:2
        },
        1024:{
            
            slidesPerView:2,
            initialSlide:2
        },
    },
      
    navigation: {
      nextEl: '.video-slider__next',
      prevEl: '.video-slider__prev',
    },
  
   
  });