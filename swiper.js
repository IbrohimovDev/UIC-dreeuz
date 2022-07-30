<<<<<<< HEAD
import Swiper, { Pagination, Navigation } from 'swiper';
import 'swiper/css/bundle'


const swiper = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  Pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  Navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
=======



// const swiper = new Swiper(".mySwiper", {
//     modules: [Navigation, Pagination],
//     slidesPerView: 4,
//     freeMode: true,
//     loop: true,
//     Pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     Navigation: {
//       nextEl: ".next",
//       prevEl: ".prev",
//     },
//   });



>>>>>>> 5f1996630f995c91652294645b895358f981d3cf

