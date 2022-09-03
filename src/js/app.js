import Swiper from 'swiper/bundle';
import '../scss/app.scss';
// import 'swiper/css';
import 'swiper/css/bundle';

/* Your JS Code goes here */
new Swiper('.swiper-slider', {
    effect: "fade",

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 1000,
    loop: true,
    // autoplay: {
    //     delay: 1000,
    // },
    speed: 800,
});

// // sublist  
// let menu = document.querySelector('.header__user-city-item');
// let subMenu = document.querySelector('.header__user-city-item-sublist');

// menu.addEventListener('click', function () {
//     subMenu.classList.toggle('display-block');
// })

//header-catalog
let catalogBtn = document.querySelector('.header__user-button');
let headerCatalog = document.querySelector('.header__catalog');

catalogBtn.addEventListener('click', function () {
    headerCatalog.classList.toggle('catalog-block');
})

//city
let cityBtn = document.querySelector('.header__user-city');
let citySubList = document.querySelector('.header__user-city-item-sublist');
let cityIcon = document.querySelector('.header__user-city-icon');
let citySvg = document.querySelector('.header__user-city-svg');
let subMenu = document.querySelector('.header__user-city-item-sublist');

cityBtn.addEventListener('click', function () {
    cityBtn.classList.toggle('city-active');
    citySubList.classList.toggle('sublist-active');
    cityIcon.classList.toggle('display-none');
    citySvg.classList.toggle('transform');
    subMenu.classList.toggle('display-block');
})

const headerBurger = document.querySelector(".header__burger")
const headerNav = document.querySelector(".header__nav")
headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("active")
    headerNav.classList.toggle("active")
})