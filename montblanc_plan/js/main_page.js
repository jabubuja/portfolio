AOS.init();

// sec06 autoSlide_splidejs
// let items=gsap.utils.toArray('.sec06>.container');
// console.log(items)
// gsap.to(items,{
//   xPercent : '200',
//   ease:'none',
//   scrollTrigger :{
//     trigger:'.title',
//     start: 'top',
//     end:'+=5000',
//     // 값이 증가 될 동안 
//     pin:true,
//     scrub:1,
//     snap: 1 / (items.length - 1 ),
//   }
// })

// import { Splide } from '@splidejs/splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

new Splide('.splide', {
  type   : 'loop',
  drag   : 'free',
  focus  : 'center',
  perPage: 7,
  autoScroll: {
    speed: 2,
  },
}).mount( window.splide.Extensions );