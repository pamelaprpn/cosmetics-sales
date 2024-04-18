const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

});


let iconCartSpan = document.getElementById('.icon_cont')
let buttonCart = document.querySelector('.card_button')



buttonCart.addEventListener('click', (event) => {

})