function cadastroDePessoa(nome, sobrenome, idade) {
    return{nome, sobrenome, idade};
}


/*_____________________________________________________________________________*/
// Catalogo

const produto1 = "Melancia", preco1 = 15;
const produto2 = "Banana  ", preco2 = 5;
const produto3 = "Abacaxi ", preco3 = 7;
const produto4 = "Maça    ", preco4 = 3;
const produto5 = "Pera    ", preco5 = 4;
const produto6 = "Abacate ", preco6 = 4;
const produto7 = "Uva     ", preco7 = 2;
const produto8 = "Kiwi    ", preco8 = 3;
const produto9 = "Ameixa  ", preco9 = 1;
const produto10 = "Manga   ", preco10 = 5;

const id0 = ["Produto", "Preço"];
const id1 = [produto1, preco1];
const id2 = [produto2, preco2];
const id3 = [produto3, preco3];
const id4 = [produto4, preco4];
const id5 = [produto5, preco5];
const id6 = [produto6, preco6];
const id7 = [produto7, preco7];
const id8 = [produto8, preco8];
const id9 = [produto9, preco9];
const id10 = [produto10, preco10];

const id = [id0, id1, id2, id3, id4, id5, id6, id7, id8, id9, id10];


/*_____________________________________________________________________________*/
// Altere esse campo

const nome = "Fernando";  // Seu nome
const sobrenome = "Dorneles";  // Seu sobrenome
const idade = 17;  // Sua idade

// Altere a quantidade do produto para selecionar os ítens
const escolha = [[id[0], "Qtd"],
                     [id[1], 2],  // Melancia
                     [id[2], 5],  // Banana
                     [id[3], 6],  // Abacaxi
                     [id[4], 7],  // Maça
                     [id[5], 5],  // Pera
                     [id[6], 6],  // Abacate
                     [id[7], 9],  // Uva
                     [id[8], 12],  // Kiwi
                     [id[9], 1],  // Ameixa
                     [id[10], 3]];  // Manga

/* 
Exemplo:
    Se quiser 4 uvas vá até o "[id[7], 0],  // Uva" e altere o segundo valor para 4, ficando assim:
"[id[7], 4],  // Uva".   
*/


/*_____________________________________________________________________________*/
// Recolhendo os valores

const nomeDosProdutoEscolhidos = [];
const valoresDosProdutoEscolhidos = [];
const quantidadeDosProdutosEscolhidos = [];
let qtdAuxiliar = 0;
let valorAuxiliar = 0;
let qtdTotal = 0;
for (let x = 0; x < escolha.length; x++) {
    for (let c = 0; c < escolha[x].length; c++) {  
        if (escolha[x][c] > 0) { 
            qtdAuxiliar = escolha[x][1]  ;
            qtdTotal = qtdTotal + qtdAuxiliar;
            quantidadeDosProdutosEscolhidos.push(escolha[x][1]);
            nomeDosProdutoEscolhidos.push(escolha[x][0][0]);
                for (let y = 0; y < qtdAuxiliar; y++) {
                    valorAuxiliar = valorAuxiliar + escolha[x][0][1]  
                }
            valoresDosProdutoEscolhidos.push(valorAuxiliar);
            valorAuxiliar = 0;
        }
    }
}

//console.log(qtdTotal);
//console.log(nomeDosProdutoEscolhidos);
//console.log(valoresDosProdutoEscolhidos);
//console.log(quantidadeDosProdutosEscolhidos);


/*_____________________________________________________________________________*/
// Descontos
// Essa parte é alterada manualmente

const descontosDosProdutosEscolhidos = [];
const valorDeDescontoTotais = [];
let descontoAuxiliar = 0;
let diferençaAuxiliar = 0;
let auxiliarDeMundanca = 0;
let novoValor = 0;
let qtdParaDescontoAuxiliar = 0;
const produtosEmPromoção = ["Melancia", "Manga   ", "Maça    ", "Uva     "];

// Descontos **
for (let x = 0; x < nomeDosProdutoEscolhidos.length; x++){
    if(nomeDosProdutoEscolhidos[x] === produtosEmPromoção[0]){
        descontoAuxiliar = valoresDosProdutoEscolhidos[x] * 0.25;
        valorDeDescontoTotais.push(descontoAuxiliar);
        descontosDosProdutosEscolhidos.push(descontoAuxiliar);
        valoresDosProdutoEscolhidos[x]  = valoresDosProdutoEscolhidos[x] - (valoresDosProdutoEscolhidos[x] * 0.25); 
        descontoAuxiliar = 0;
    }
    if(nomeDosProdutoEscolhidos[x] === produtosEmPromoção[1]){
        descontoAuxiliar = valoresDosProdutoEscolhidos[x] * 0.10;
        valorDeDescontoTotais.push(descontoAuxiliar);
        descontosDosProdutosEscolhidos.push(descontoAuxiliar);
        valoresDosProdutoEscolhidos[x]  = valoresDosProdutoEscolhidos[x] - (valoresDosProdutoEscolhidos[x] * 0.10);
        descontoAuxiliar = 0;
    }
    if(nomeDosProdutoEscolhidos[x] !== produtosEmPromoção[0] && nomeDosProdutoEscolhidos[x] !== produtosEmPromoção[1]){
        descontosDosProdutosEscolhidos.push(0);
    }
}
//console.log(valorDeDescontoTotais);


// Descontsos *
for (let x = 0; x < nomeDosProdutoEscolhidos.length; x++) {
    
    qtdParaDescontoAuxiliar = 5;
    if (quantidadeDosProdutosEscolhidos[x] > qtdParaDescontoAuxiliar && nomeDosProdutoEscolhidos[x] === produtosEmPromoção[2]) {
        novoValor = id[4][1] - (id[4][1] * 0.05);
        diferença = quantidadeDosProdutosEscolhidos[x] - qtdParaDescontoAuxiliar;
        auxiliarDeMundanca = valoresDosProdutoEscolhidos[x] - (id[4][1] * diferença);
        auxiliarDeMundanca = auxiliarDeMundanca + (novoValor * diferença);
        valoresDosProdutoEscolhidos[x] = auxiliarDeMundanca;
        novoValor = 0;
        descontoAuxiliar = (id[4][1] * 0.05) * diferença;
        valorDeDescontoTotais.push(descontoAuxiliar);
        descontosDosProdutosEscolhidos[x] = descontosDosProdutosEscolhidos[x] + descontoAuxiliar; 
        descontoAuxiliar = 0;      
    }

    qtdParaDescontoAuxiliar = 6;
    if (quantidadeDosProdutosEscolhidos[x] > qtdParaDescontoAuxiliar && nomeDosProdutoEscolhidos[x] === produtosEmPromoção[3]) {
        novoValor = id[7][1] - (id[7][1] * 0.07);
        diferença = quantidadeDosProdutosEscolhidos[x] - qtdParaDescontoAuxiliar;
        auxiliarDeMundanca = valoresDosProdutoEscolhidos[x] - (id[7][1] * diferença);
        auxiliarDeMundanca = auxiliarDeMundanca + (novoValor * diferença);
        valoresDosProdutoEscolhidos[x] = auxiliarDeMundanca;
        novoValor = 0;
        descontoAuxiliar = (id[7][1] * 0.05) * diferença;
        valorDeDescontoTotais.push(descontoAuxiliar);
        descontosDosProdutosEscolhidos[x] = descontosDosProdutosEscolhidos[x] + descontoAuxiliar; 
        descontoAuxiliar = 0;      
    }
}


//----------------------------------------------
//console.log(descontosDosProdutosEscolhidos);
let valor_a_ser_pago = 0;
for (let x = 0; x < valoresDosProdutoEscolhidos.length; x++) {
    valor_a_ser_pago = valor_a_ser_pago + valoresDosProdutoEscolhidos[x];
}
//console.log(valor_a_ser_pago);
//----------------------------------------------


// Descontos ***
if(qtdTotal > 20){  // Em compras de acima de 20 unidades totais
    descontoAuxiliar = valor_a_ser_pago * 0.15;  // Desconto de 15% no valor total
    valorDeDescontoTotais.push(descontoAuxiliar);
    valor_a_ser_pago = valor_a_ser_pago - (valor_a_ser_pago * 0.15);
    descontoAuxiliar = 0;
}

//console.log(valor_a_ser_pago);
//console.log(qtdTotal);
//console.log(valorDeDescontoTotais);


// Soma dos descontos
let totalDeDescontos = 0;
for (let x = 0; x < valorDeDescontoTotais.length; x++) {
    totalDeDescontos = totalDeDescontos + valorDeDescontoTotais[x];
}

//console.log(totalDeDescontos);


/*_____________________________________________________________________________*/
// Adicionando tudo ao carrinho de compras

const carrinho_de_compras = [];
let arrayAuxiliar = [];
    for (let x = 0; x < nomeDosProdutoEscolhidos.length && valoresDosProdutoEscolhidos.length; x++) {
        arrayAuxiliar.push(nomeDosProdutoEscolhidos[x]);
        arrayAuxiliar.push(valoresDosProdutoEscolhidos[x]);
        arrayAuxiliar.push(quantidadeDosProdutosEscolhidos[x]);
        arrayAuxiliar.push(descontosDosProdutosEscolhidos[x]);
        carrinho_de_compras.push(arrayAuxiliar);
        arrayAuxiliar = [];
    }
    
//console.log(carrinho_de_compras);


/*_____________________________________________________________________________*/
// Menu

// Decoração 
const detalhe = " — — — — — — — — — — — — — — — — — — "

// Dados da loja
const cnpj = "01.234.567/0001-89";
const loja = '"Console.log(frutas)"';
const endereco = "Programação, 1000, JavaScript";

const cliente = cadastroDePessoa(nome, sobrenome, idade);

const valor_sem_desconto = totalDeDescontos + valor_a_ser_pago;


console.log(detalhe);
console.log(`|     Cnpj: ${cnpj}      |`);
console.log(`|       ${loja}       |`);
console.log(`|   ${endereco}   |`);
console.log(detalhe);
console.log(`|   Cliente: ${cliente.sobrenome} ${cliente.nome}      |`);
console.log(`|   Idade: ${cliente.idade} anos                  |`);
console.log(detalhe);
console.log(`|Nome do produto  Qtd  Valor  Desc  |`);
for (let x = 0; x < carrinho_de_compras.length; x++) {
    console.log(`| ${carrinho_de_compras[x][0]}         ${carrinho_de_compras[x][2]}   ${carrinho_de_compras[x][1].toFixed(2)}  ${carrinho_de_compras[x][3].toFixed(2)}  |`)   
}
console.log(detalhe);
console.log(`| Quantidade total de produtos: ${qtdTotal}  |`);
console.log(`| Valor sem descontos: ${valor_sem_desconto.toFixed(2)}       |`);
console.log(`| Descontos: ${totalDeDescontos.toFixed(2)} R$               |`);
console.log(`| Valor a pagar: ${valor_a_ser_pago.toFixed(2)} R$          |`);
console.log(`|                        08/02/2023 |`)
console.log(detalhe);
