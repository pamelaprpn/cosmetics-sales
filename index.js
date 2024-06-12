const containerProdutos = document.querySelector('[data-todos]');
const containerPromoções = document.querySelector('[data-promocoes]');


async function buscarProdutos(){
    try{
        const api = await fetch("http://localhost:3000/produtos");
        const produtos = await api.json();
        produtos.forEach((produto) => {    
            containerProdutos.innerHTML += `
                    <div class="swiper-slide" id="slide_card">
                        <div class="card">
                            <a href="#">
                                <img class="heart" src="./assets/heart-regular.svg" alt="Favoritos" />
                            </a>
                            <p class="sale">-<span >0</span>%</p>
                        <div class="image">
                            <img class="card_image" src="${produto.image}"
                                alt="${produto.name}">
                        </div>
                        <div class="info">
                            <h2 class="card_titulo">${produto.name}</h2>
                                <img class="avaliacao" src="${produto.avaliacao}" alt="Avaliações de clientes" />
                                <p class="card_valor_old">R$<span>${produto.priceOld}</span></p>
                                <p class="card_valor_discount">R$<span>${produto.priceActual}</span></p>
                                <p class="categoria" hidden>${produto.categoria}</p>
                                <button class="card_button">
                                    <img src="./assets/cart-plus-solid.svg" alt="Icone carrinho no card">
                                    <p>Comprar</p>
                                </button>
                        </div>
                    </div>
            `;  
            
            if(produto.lancamento == true){
                containerPromoções.innerHTML +=`
                <div class="swiper-slide" id="slide_card">
                <div class="card">
                    <a href="#">
                        <img class="heart" src="./assets/heart-regular.svg" alt="Favoritos" />
                    </a>
                    <p class="sale">-<span >0</span>%</p>
                <div class="image">
                    <img class="card_image" src="${produto.image}"
                        alt="${produto.name}">
                </div>
                <div class="info">
                    <h2 class="card_titulo">${produto.name}</h2>
                        <img class="avaliacao" src="${produto.avaliacao}" alt="Avaliações de clientes" />
                        <p class="card_valor_old">R$<span>${produto.priceOld}</span></p>
                        <p class="card_valor_discount">R$<span>${produto.priceActual}</span></p>
                        <p class="categoria" hidden>${produto.categoria}</p>
                        <button class="card_button">
                            <img src="./assets/cart-plus-solid.svg" alt="Icone carrinho no card">
                            <p>Comprar</p>
                        </button>
                </div>
            </div>
                `
            }  
      
             
        })

        addCart();
        calculatorDiscount();
    } catch(error){
        containerCard.innerHTML = `<p> Houve um erro ao carregar produtos: ${error} </p> `
    }

}

buscarProdutos();



// const botaoCategoria = document.querySelectorAll('.item_categoria')

// botaoCategoria.forEach((botao) => {
//     let nomeCategoria = botao.getAttribute('name');
//     botao.addEventListener('click', () => {
//         const produtos = document.querySelectorAll('#slide_card');

//         if(nomeCategoria == Perfumaria && produto.categoria){
//             containerProdutos.innerHTML += `
//             <div class="swiper-slide" id="slide_card">
//             <div class="card">
//                 <a href="#">
//                     <img class="heart" src="./assets/heart-regular.svg" alt="Favoritos" />
//                 </a>
//                 <p class="sale">-<span >0</span>%</p>
//             <div class="image">
//                 <img class="card_image" src="${produto.image}"
//                     alt="${produto.name}">
//             </div>
//             <div class="info">
//                 <h2 class="card_titulo">${produto.name}</h2>
//                     <img class="avaliacao" src="${produto.avaliacao}" alt="Avaliações de clientes" />
//                     <p class="card_valor_old">R$<span>${produto.priceOld}</span></p>
//                     <p class="card_valor_discount">R$<span>${produto.priceActual}</span></p>
//                     <p class="categoria" hidden>${produto.categoria}</p>
//                     <button class="card_button">
//                         <img src="./assets/cart-plus-solid.svg" alt="Icone carrinho no card">
//                         <p>Comprar</p>
//                     </button>
//             </div>
//         </div>
//             `
            
//         }

//     });
    

// })


// function filtarPorCategoria(filtro){
    
// }

callSwiper();



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
        loop: false,
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



    document.querySelectorAll(".card_valor_old span").forEach(valueOld => {
        total = parseFloat(valueOld.textContent.replace(',', '.'));
        console.log(total)
    })

    
    
    
    // document.querySelectorAll(".card_valor_old span").forEach(valueOld => {
    //     total = parseFloat(valueOld.textContent.replace(',', '.'));
    //     valor_old.push(total);
        
    // });
    
    // document.querySelectorAll("#card_valor_discount span").forEach(valueCurrent => {
    //     total = parseFloat(valueCurrent.textContent.replace(',', '.'));
    //     valor_current.push(total);
       
        
    // });
    
    // document.querySelectorAll(".sale span").forEach((valueSale, index) => {

            

    //         discount = 0;    
    //         discount = (((valor_old[index] - valor_current[index]) / valor_old[index]) * 100).toFixed(0);
    //         console.log(discount);
    //         valueSale.textContent = discount;
         

    // });

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



    




