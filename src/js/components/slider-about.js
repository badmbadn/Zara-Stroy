import { Swiper, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation,Thumbs,EffectCoverflow  } from 'swiper'
Swiper.use([ Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation,Thumbs,EffectCoverflow  ])

const SliderAbout = new Swiper('.about-slider', {
	speed:1000,
	parallax: true,
    navigation: {
        nextEl: '.about-slider__prev',
        prevEl: '.about-slider__next',
      },
    breakpoints: {
        1025: {
            
             
        }
    }
  })