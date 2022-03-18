import { Swiper, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation,EffectFade  } from 'swiper'
Swiper.use([ Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation,EffectFade ])

const swiper = new Swiper('.hero-slider', {
  // Optional parameters
  //direction: 'gorizontal',
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  slidesPerView:1,
  loop: false,

  // If we need pagination
  pagination: {
    el: '.hero-slider__pagination',
    type:'custom',
    renderCustom: function(swiper,current,total) {
       let indT = total >= 10 ? total : `0${total}`
       let indC = current >= 10 ? current : `0${current}`
       return `<b>${indC}</b><span></span>${indT}`
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hero-slider__next',
    prevEl: '.hero-slider__prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable:true,
  },
});



