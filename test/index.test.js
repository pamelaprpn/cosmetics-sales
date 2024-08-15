const { beforeEach, expect} = require('@jest/globals');
const {calculatorDiscount, buscarTodosProdutos} = require('../index');

global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        {
          name: 'Produto 1',
          image: './assets/produtos/fluido_selador.svg',
          priceOld: 100,
          priceActual: 80,
          avaliacao: './assets/Estrelinhas4.svg',
          categoria: 'Cabelos',
          lancamento: true
        },
        {
            name: 'Produto 2',
            image: './assets/produtos/fluido_selador.svg',
            priceOld: 200,
            priceActual: 150,
            avaliacao: './assets/Estrelinhas4.svg',
            categoria: 'Skincare',
            lancamento: false
        }
      ])
    })
  );


test('Deve validar o retorno dos produtos', async () => {

   const data = await buscarTodosProdutos();

   console.log(data)

   expect(data).toHaveBeenCalledWith("https://backend-cosmetics-sepia.vercel.app/produtos");
    
});




// beforeEach(() => {
//     document.body.innerHTML = `
//        <div class="swiper-slide" id="slide_card">
//             <div class="container_Card">
//                 <div class="card">
//                     <a href="#">
//                         <img class="heart" src="./assets/heart-regular.svg" alt="Favoritos" />
//                     </a>
//                     <p class="sale">-<span >0</span>%</p>
//                     <div class="image">
//                         <img class="card_image" src="${produto.image}"
//                         alt="${produto.name}">
//                     </div>
//                     <div class="info">
//                         <h2 class="card_titulo">${produto.name}</h2>
//                         <img class="avaliacao" src="${produto.avaliacao}" alt="Avaliações de clientes" />
//                         <p class="card_valor_old">R$<span>${produto.priceOld}</span></p>
//                         <p class="card_valor_discount">R$<span>${produto.priceActual}</span></p>
//                         <p class="categoria" hidden>${produto.categoria}</p>
//                         <p class="lancamento" hidden>${produto.lancamento}</p>
//                         <button class="card_button">
//                             <img src="./assets/cart-plus-solid.svg" alt="Icone carrinho no card">
//                             <p>Comprar</p>
//                         </button>
//                      </div>
//                 </div>
//             </div>
//             `; 
// })



// test('Deve calcular o desconto e atualizar o DOM', () => {

//     calculatorDiscount();
//     const sales = document.querySelector(".sale span");
    
//     expect(sales[0].textContent).toBe('23');
    
// });