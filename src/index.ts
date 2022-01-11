console.log("Hello World!");

import "./index.scss"

import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

// init Swiper:
var s1 = new Swiper('.s1', {
    direction: 'horizontal',
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
});

var s2 = new Swiper('.s2', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var s3 = new Swiper('.s3', {
    loop:true ,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        // when window width is >= 480px
        640: {
        slidesPerView: 2,
        spaceBetween: 15
        },
        // when window width is >= 640px
        768: {
        slidesPerView: 3,
        spaceBetween: 15
        },

        992: {
        slidesPerView: 4,
        spaceBetween: 20
        }
    }
})

var s4 = new Swiper('.s4', {
    loop:true ,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        // when window width is >= 480px
        640: {
        slidesPerView: 2,
        spaceBetween: 30
        },
        // when window width is >= 640px
        768: {
        slidesPerView: 3,
        spaceBetween: 15,
        },

        992: {
        slidesPerView: 4,
        spaceBetween: 20
        }
    }
})

var s5 = new Swiper('.s5', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true,
      },
});

function myFunction(x: HTMLElement) {
    x.classList.toggle("change");
}

const menu = document.querySelector(".header__bottom__menu") as HTMLElement;
const menu_product = document.querySelector(".header__bottom__left");
menu_product.addEventListener("click", ()=>{
    myFunction(menu);
    (menu_product.querySelector(".header__bottom__menu__dropdown") as HTMLElement).classList.toggle('show');
})

const menu__mobile__buttons = document.querySelector(".header__mobile__left") as HTMLElement;
const menu_mobile = document.querySelector(".menu-mobile") as HTMLElement;
menu__mobile__buttons.addEventListener("click",()=>{
    menu_mobile.classList.toggle("active");
});

const overlay=menu_mobile.querySelector(".menu-mobile__overlay") as HTMLElement;
overlay.addEventListener("click",()=>{
    menu_mobile.classList.toggle("active");
})