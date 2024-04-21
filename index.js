function callSwiper(){
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
}

callSwiper();

function calculatorDiscount() {
    let elementCard = document.querySelector(".card");

    document.addEventListener("DOMContentLoaded", function () {
        const elementvalorOld = document.querySelector(".card_valor_real span");
        const elementvalorCurrent = document.querySelector('.card_valor span');
        const elementValorDiscount = document.querySelector('.sale')


        const valorOld = parseFloat(elementvalorOld.textContent.replace(',', '.'));
        const valorCurrent = parseFloat(elementvalorCurrent.textContent.replace(',', '.'));

        let discount = ((valorOld - valorCurrent) / valorOld) * 100;

        console.log(`${discount.toFixed(0)}%`);
        elementValorDiscount.textContent = `${discount.toFixed(0)}%`

    });
}

calculatorDiscount();


function addCart (){
    
    const elementIconCart = document.getElementsByClassName('.icon_cont');
    const elementButtonAddCart = document.querySelector('.card_button');

    let counter = 0;

    elementButtonAddCart.addEventListener('click', () => {
        counter++;
        //elementIconCart.textContent = counter;
        console.log(`Total ${counter}`);
        
    });
    
    
    
}

addCart();

