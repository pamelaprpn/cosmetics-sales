const { beforeEach} = require('@jest/globals');
const {calculatorDiscount, buscarTodosProdutos} = require('../index');

global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        {
          name: 'Produto 1',
          image: 'image.jpg',
          priceOld: '100,00',
          priceActual: '80,00',
          avaliacao: 'avaliacao.jpg',
          categoria: 'Categoria 1',
          lancamento: true
        },
        {
            name: 'Produto 2',
            image: 'image2.jpg',
            priceOld: '200,00',
            priceActual: '150,00',
            avaliacao: 'avaliacao2.jpg',
            categoria: 'Categoria 2',
            lancamento: false
          }
      ])
    })
  );

beforeEach(() => {
    document.body.innerHTML = `
        <div class="swiper-slide" id="slide_card">
            <div class="container_Card">                 
            </div>
        </div>
                    
  `;
})

test('Deve validar o retorno dos produtos', () => {

    buscarTodosProdutos()

    const produtos = document.querySelectorAll('#wrapper_card .swiper-slide');

    expect(produtos.length).toBe(2);
    
});


// test('Deve calcular o desconto e atualizar o DOM', () => {

//     calculatorDiscount();
//     const sales = document.querySelector(".sale span");
    
//     expect(sales[0].textContent).toBe('23');
    
// });