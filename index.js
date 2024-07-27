
const containerProdutos = document.querySelector('[data-todos]');
const containerLancamentos = document.querySelector('[data-lancamentos]');


async function buscarProdutos(){
    try{
        const api = await fetch("http://localhost:3000/produtos");
        const produtos = await api.json();

        produtos.forEach((produto) => {   
            containerProdutos.innerHTML += `
                    <div class="swiper-slide" id="slide_card">
                        <div class="container_Card">
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
                    </div>
            `;  
                             
        });

        // exibir somente os lançamentos
        const produtosFiltrados = produtos.filter(produto => produto.categoria === true);
        console.log(produtosFiltrados)
        produtosFiltrados.forEach(produto => {
            containerLancamentos.innerHTML += `
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
        });

        callSwiper();
        addCart();
        calculatorDiscount();

        document.querySelectorAll('.heart').forEach(value => {
            value.addEventListener('click', function(event){
                event.preventDefault();
                value.setAttribute('src', './assets/heart-solid.svg');
            })
        });

        document.querySelectorAll('#link_user').forEach(value => {
            value.addEventListener('click', function(event){
                event.preventDefault();
                window.location.href = "./login.html";  
            })
        });

    } catch(error){
        containerCard.innerHTML = `<p> Houve um erro ao carregar produtos: ${error} </p> `
    }

}

buscarProdutos();




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
    
    let discount = 0;

    const listaValorOld = document.querySelectorAll(".card_valor_old span");
    let valoresConvertidosOld = [];

    listaValorOld.forEach(item => {
        const textoValor = item.textContent.trim(); 
        const valorConvertido = parseFloat(textoValor.replace(',', '.'));
        valoresConvertidosOld.push(valorConvertido);
    });


    const listaValorActual = document.querySelectorAll(".card_valor_discount span");
    let valoresConvertidosActual = [];

    listaValorActual.forEach(item => {
        const textoValor = item.textContent.trim();
        const valorConvertido = parseFloat(textoValor.replace(',', '.'));
        valoresConvertidosActual.push(valorConvertido);
    });

 
    document.querySelectorAll(".sale span").forEach((valueSale, index) => {
                discount = 0;    
                discount = (((valoresConvertidosOld[index] - valoresConvertidosActual[index]) / valoresConvertidosOld[index]) * 100).toFixed(0);
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



    




