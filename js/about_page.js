AOS.init();

// sec02 slide
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // sec04 gsap
  gsap.to('.sec04 .slide_container',{
    x:-1400,
    duration:10,
    scrollTrigger:{
      trigger:'.sec04',
      start: 'left',
      end:'right 0',
      pin:true,
      markers:true,
      scrub:10,
      toggleActions:"play none none none",
    }
  })