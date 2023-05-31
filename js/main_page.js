AOS.init();



// navi toggle
const hambuger_btn = document.querySelector('.fa-bars')
const x_btn = document.querySelector('.fa-x')
const nav = document.querySelector('.toggle_box')

hambuger_btn.addEventListener('click', function () {
  nav.classList.add('nav_show');
  this.classList.add('ham_hidden');
  x_btn.classList.add('ham_show');
})
x_btn.addEventListener('click', function () {
  nav.classList.remove('nav_show');
  this.classList.remove('ham_show');
  hambuger_btn.classList.remove('ham_hidden');
})


// header auto slide
const container = document.querySelector('.container');
const slide_item = document.querySelectorAll('header .slide_item');
let slide_len = slide_item.length;
let current_idx = 0;

let first_clone = slide_item[0].cloneNode(true);
let last_clone = slide_item[slide_len - 1].cloneNode(true);

container.appendChild(first_clone);
container.insertBefore(last_clone, slide_item[0]);

let slideClone = document.querySelectorAll('header .slide_item');
let slideClone_len = slideClone.length;

console.log(slideClone_len);

for (i = 0; i < slideClone_len; i++) {
  slideClone[i].style.left = i * 100 + '%'
}

gotoSlide(1)
function gotoSlide(idx) {
  container.style.left = idx * -100 + '%';
  container.style.transition = 1 + 's';
  current_idx = idx;
}

let a = 0;
function autoSlide() {
  if (a < slideClone_len - 1) {
    gotoSlide(a + 1);
    a++;
  } else {
    a = 1;
    gotoSlide(a);
    container.style.transition = 'none';
  }
}
let auto = setInterval(autoSlide, 2500);





// sec01 slider
var swiper = new Swiper("#sec01 .mySwiper1", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: "#sec01 .swiper-pagination",
    clickable: true,
  },
});






// sec05 sldie
var swiper = new Swiper("#sec05 .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: "#sec05 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#sec05 .swiper-button-next",
    prevEl: "#sec05 .swiper-button-prev",
  },
});





// sec06 Path Move
let b = true

const svgline = document.querySelector('#Layer_1')

window.addEventListener('scroll', function () {
  let scrollLocation = document.documentElement.scrollTop
  let svgTop = svgline.getBoundingClientRect().top + scrollLocation

  if (scrollLocation > svgTop - 300) {
    if (b === true) {
      svgline.style.opacity = 1
      new Vivus('Layer_1', { duration: 200, start: 'autostart' })
    }
    b = false
  }

},)





// sec08 swipeSlide
var swiper = new Swiper(".mySwiperR", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

