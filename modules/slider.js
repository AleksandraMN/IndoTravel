import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const albumSlider = document.querySelector('.album__slider');
albumSlider.classList.add('swiper');

albumSlider.innerHTML = `
  <div class="album__list swiper-wrapper">
    <div class="album__item swiper-slide">
      <picture>
        <source srcset="img/album/1.avif" type="image/avif">
        <source srcset="img/album/1.webp" type="image/webp">
        <img src="img/album/1.jpg" alt="Остров" class="album__image"></picture>
    </div>
    <div class="album__item swiper-slide">
      <picture>
        <source srcset="img/album/2.avif" type="image/avif">
        <source srcset="img/album/2.webp" type="image/webp">
        <img src="img/album/2.jpg" alt="Горы" class="album__image"></picture>
    </div>
    <div class="album__item swiper-slide">
      <picture>
        <source srcset="img/album/3.avif" type="image/avif">
        <source srcset="img/album/3.webp" type="image/webp">
        <img src="img/album/3.jpg" alt="Лодки" class="album__image"></picture>
    </div>
    <div class="album__item swiper-slide">
      <picture>
        <source srcset="img/album/4.avif" type="image/avif">
        <source srcset="img/album/4.webp" type="image/webp">
        <img src="img/album/4.jpg" alt="Закат" class="album__image"></picture>
    </div>
    <div class="album__item swiper-slide">
      <picture>
        <source srcset="img/album/5.avif" type="image/avif">
        <source srcset="img/album/5.webp" type="image/webp">
        <img src="img/album/5.jpg" alt="Волны" class="album__image"></picture>
    </div>
    <div class="album__item swiper-slide">
      <picture>
        <source srcset="img/album/6.avif" type="image/avif">
        <source srcset="img/album/6.webp" type="image/webp">
        <img src="img/album/6.jpg" alt="Лагуна" class="album__image"></picture>
    </div>
  </div>
  <div class="album__left"></div>
  <div class="album__right"></div>
  `;
// const albumLeft = document.querySelector('.album__left');
// const albumRight = document.querySelector('.album__right');
// const albumList = document.querySelector('.album__list');


new Swiper('.album__slider', {
  slidesPerView: 2,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.album__right',
    prevEl: '.album__left',
  },
  mousewhell: true,
  keyboard: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

