



import { Swiper, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation,Thumbs,Zoom,EffectCoverflow ,EffectFlip,EffectCreative} from 'swiper'
Swiper.use([ Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation,Thumbs,Zoom,EffectCoverflow,EffectFlip,EffectCreative])

const sliderTab = new Swiper('.slider-tab', {
  //slidesPerView:1,
  loop:false,
  breakpoints: {
    1025: {
      slidesPerView:1.25,
     centeredSlides:2,
      spaceBetween:10,
      loop:true,
     
     
    }
  },
  pagination: {
    el: ".slider-tab__pagination",
    clickable: true,
  },

  
});


const swiperInTab = new Swiper(".slider-in-tab", {
  direction:'vertical',
  slidesPerView:1, 
  spaceBetween:10,
  loop:true,
  speed:900,
  grabCursor: true,
  pagination: {
    el: ".slider-in-tab__pagination",
    clickable: true,
  },
  zoom:true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      origin: "left center",
      translate: ["-5%", 0, -200],
      rotate: [0, 100, 0],
    },
    next: {
      origin: "right center",
      translate: ["5%", 0, -200],
      rotate: [0, -100, 0],
    },
  },
  nested:true,
});
