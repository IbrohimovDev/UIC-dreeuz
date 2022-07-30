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

