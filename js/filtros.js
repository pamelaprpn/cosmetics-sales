const inputSearch = document.querySelector('.input_search');

inputSearch.addEventListener('input' , filtrarPesquisa)

function filtrarPesquisa(){
    const produtos = document.querySelectorAll('.container_Card');

    if(inputSearch.value != ""){
        for(let produto of produtos){
            let titulo = produto.querySelector('.card_titulo').textContent.toLowerCase();
            let valorFiltro = inputSearch.value.toLowerCase();
            ;

            if(!titulo.includes(valorFiltro)){
                produto.style.display = "none";
            }else{
                produto.style.display = "block";
                document.querySelector('#section_lancamento').style.display = "none"; 

            }
        }
    }else{
        produtos.style.display = "block";    
    }
}

const btnCategoria = document.querySelectorAll('.item_categoria');

btnCategoria.forEach((botao) => {
    let nameCategoria = botao.getAttribute("name");
    botao.addEventListener("click", () => filtarPorCategoria(nameCategoria));
})

function filtarPorCategoria(filtro){
    const produtos = document.querySelectorAll(".container_Card");
    for(let produto of produtos){
        let categoria = produto.querySelector(".categoria").textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();

        if(!categoria.includes(valorFiltro) && valorFiltro != 'Todos' && valorFiltro != 'Lançamentos'){
            produto.style.display = "none";
        }else{
            produto.style.display = "block";
        }
    }
}



