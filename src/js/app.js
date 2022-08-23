import Swiper, { Navigation, Pagination } from 'swiper';
import '../scss/app.scss';
import 'swiper/css';
import 'swiper/css/bundle';
/* Your JS Code goes here */

new Swiper ('.swiper-slider', {
    modules: [Navigation, Pagination],
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
