import Swiper from 'swiper/bundle';
import '../scss/app.scss';
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
    autoplay: {
        delay: 1000,
    },
    speed: 800,
});
