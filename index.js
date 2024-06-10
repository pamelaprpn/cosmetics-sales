const openModalCEP = document.getElementById('link_cep');
const modalCEP = document.getElementById('modalLocation');


openModalCEP.addEventListener('click', function(event){
    event.preventDefault();
    modalCEP.style.display = 'block';

});

callSwiper();
calculatorDiscount();
addCart();

document.querySelectorAll('#link_user').forEach(value => {
    value.addEventListener('click', function(event){
        event.preventDefault();
        window.location.href = "./login.html";  
    })
});


document.querySelectorAll('.heart').forEach(value => {
    value.addEventListener('click', function(event){
        event.preventDefault();
        value.setAttribute('src', './assets/heart-solid.svg');
    })
});



function callSwiper(){
    const swiperBanner = new Swiper('#banner_swiper', {
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

    const swiperCard = new Swiper('#card_swiper', {
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
               
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },
       
    });
    

   
}


function calculatorDiscount() {
    
    let valor_old = [];
    let valor_current = [];
    let discount = 0;
    
    
    document.querySelectorAll(".card_valor_real span").forEach(valueOld => {
        total = parseFloat(valueOld.textContent.replace(',', '.'));
        valor_old.push(total);
        
    });
    
    document.querySelectorAll("#card_valor_discount span").forEach(valueCurrent => {
        total = parseFloat(valueCurrent.textContent.replace(',', '.'));
        valor_current.push(total);
        
    });
    
    document.querySelectorAll(".sale span").forEach((valueSale, index) => {
            discount = 0;    
            discount = (((valor_old[index] - valor_current[index]) / valor_old[index]) * 100).toFixed(0);
            console.log(discount);
            valueSale.textContent = discount;

    });

}


function addCart() {
    let elementAddCart = document.querySelector(".icon_count");
    

    let count = 0;

    document.querySelectorAll(".card_button").forEach(button => {
        button.addEventListener('click', () => {
            count = count + 1;
            elementAddCart.textContent = count;

        });
    });


}



    




