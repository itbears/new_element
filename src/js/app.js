import Swiper, { Navigation, Pagination } from 'swiper';
import '../scss/app.scss';
// import 'swiper/css';
import 'swiper/css/bundle';
/* Your JS Code goes here */

new Swiper ('.swiper-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 1000,
    loop: true,
    autoplay: {
        delay: 1000,
    },
    speed: 800,
});

// sublist  
let menu = document.querySelector('.header__user-city-item');
let subMenu = document.querySelector('.header__user-city-item-sublist');

menu.addEventListener('click', function() {
    subMenu.classList.toggle('display-block');
} )

//header-catalog
let catalogBtn = document.querySelector('.header__user-button');
let headerCatalog = document.querySelector('.header__catalog');

catalogBtn.addEventListener('click', function() {
    headerCatalog.classList.toggle('catalog-block');
} )
// catalogBtn.addEventListener('click', function() {
//     headerCatalog.classList.toggle('header__catalog--top');
// })