let menu = document.querySelector("#menuBars");
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};


window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
};


//Review Section
var swiper = new Swiper(".ReviewSlide", {
    slidesPerView: 1,
    grabCuror: true,
    loop: true,
    spaceBetween: 10,


    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },

    autoplay: {
        delay: 3000,
    },

});
