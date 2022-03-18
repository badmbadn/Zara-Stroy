
import { Swiper, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation,Thumbs,Zoom,EffectCube } from 'swiper'
Swiper.use([ Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation,Thumbs,Zoom,EffectCube ])


const SliderAfter = new Swiper('.slider-after', { 
	direction:'vertical',
	spaceBetween:20,
	loop: true,
		speed:500,
		
		navigation: {
			nextEl: '.slider-after__next',
			prevEl: '.slider-after__prev',
		  },
  });

  const SliderAfterIN = new Swiper('.slider-after-in', {
	direction:'horizontal',
	loop: false,
	speed:400,
	parallax: true,
	nested:true,		
  });

  
 