//-- Defini o acumulador total
let total = 0;
//-- Chamando a variável limpar()
limpar()

function adicionar(){
    //-- Produto, Nome do produto, Valor unitário, Quantidade e Preço
    let produto = document.getElementById('produto').value;
    let nomeDoProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //-- Aviso: quantidade nula ou negativa
    if(quantidade <= 0){
        alert("Quantidade nula ou negativa");
        return("");
    }

    //-- Preço
    let preco = valorUnitario * quantidade;

    //-- Subtotal
    carinho = document.getElementById('lista-produtos');
    carinho.innerHTML = carinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${preco}</span>
    </section>`

    //-- Total
    total = total + preco;
    valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$${total}`;

    //-- Zerando a quantidade
    quantidade = document.getElementById('quantidade').value = 0;
}

function limpar(){
    //-- Defini o texto do subtotal no HTML para vazio
    carinho = document.getElementById('lista-produtos').innerHTML = '';

    //-- Defini o texto do total no HTML para 0
    valorTotal = document.getElementById('valor-total').innerHTML = 'R$0';

    //-- Defini a quantidade para 0
    quantidade = document.getElementById('quantidade').value = 0;

    //-- Defini o acumulador total para 0
    total = 0;
}
