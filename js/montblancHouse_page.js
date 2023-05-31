AOS.init();

// sec02 gsap
gsap.to('.sec02',{
  y:0,
  scrollTrigger:{
    trigger:'.sec02',
    start: 'top',
    end:'bottom',
    pin:true,
  }
})
gsap.to('.sec02 .third',{
  y:-500,
  duration:1,
  scrub:4,
  scrollTrigger:{
    trigger:'.sec02 h1',
    start: 'top 100px',
    end:'top 200px',
    pin:true,
  }
})
gsap.to('.sec02 .second',{
  y:-500,
  duration:1,
  scrub:4,
  scrollTrigger:{
    trigger:'.sec02 h1',
    start: 'top -400px',
    end:'top 500px',
    pin:true,
  }
})

// sec03 slide
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 50,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },
});


// sec04 slide
var swiper = new Swiper(".mySwiperS", {
  spaceBetween: 10,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});