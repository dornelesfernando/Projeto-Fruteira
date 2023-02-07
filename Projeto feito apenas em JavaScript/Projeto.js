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
quantidadeDeItens = ["0", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

/*_____________________________________________________________________________*/

const nome = "Fernando";
const sobrenome = "Dorneles";
const idade = 17;

// Altere a quantidade do produto para selecionar os ítens
const escolha = [[id[0], "Qtd"],
                     [id[1], 3],  // Melancia
                     [id[2], 2],  // Banana
                     [id[3], 5],  // Abacaxi
                     [id[4], 0],  // Maça
                     [id[5], 0],  // Pera
                     [id[6], 0],  // Abacate
                     [id[7], 0],  // Uva
                     [id[8], 0],  // Kiwi
                     [id[9], 0],  // Ameixa
                     [id[10], 0]];  // Manga

//console.log(escolha);

/*_____________________________________________________________________________*/
// Recolhendo os valores

const nomeDosProdutoEscolhidos = [];
const valoresDosProdutoEscolhidos = [];
let qtdAuxiliar = 0;
let valorAuxiliar = 0;
let qtdTotal = 0;
for (let x = 0; x < escolha.length; x++) {
    for (let c = 0; c < escolha[x].length; c++) {  
        if (escolha[x][c] > 0) { 
            qtdAuxiliar = escolha[x][1]  ;
            qtdTotal = qtdTotal + qtdAuxiliar;
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

const carrinho_de_compras = [];
const arrayAuxiliar = [];
    for (let x = 0; x < nomeDosProdutoEscolhidos.length && valoresDosProdutoEscolhidos.length; x++) {
        arrayAuxiliar.push(nomeDosProdutoEscolhidos[x]);
        arrayAuxiliar.push(valoresDosProdutoEscolhidos[x]);
        carrinho_de_compras.push(arrayAuxiliar);
    }
    
console.log(carrinho_de_compras);

/*_____________________________________________________________________________*/
// Fazeendo a soma dos valores

let valor_a_ser_pago = 0;
let valor_sem_desconto = 0;

for (let x = 0; x < valoresDosProdutoEscolhidos.length; x++) {
    valor_a_ser_pago = valor_a_ser_pago + valoresDosProdutoEscolhidos[x];
    valor_sem_desconto = valor_a_ser_pago;
}
// console.log(valor_a_ser_pago);


/*_____________________________________________________________________________

// Descontos
const valorDeDescontoTotais = [];

if(qtdTotal.length > 20){  // Em compras de acima de 20 unidades totais
    let desconto = valor_a_ser_pago * 0.15;  // Desconto de 15% no valor total
    valorDeDescontoTotais.push(desconto);
    valor_a_ser_pago = valor_a_ser_pago - (valor_a_ser_pago * 0.15);
}





// Soma dos descontos
let totalDeDescontos = 0;
for (let x = 0; x < valorDeDescontoTotais.length; x++) {
    totalDeDescontos = totalDeDescontos + valorDeDescontoTotais[x];
}
*/


/*_____________________________________________________________________________
// Menu

// Decoração 
const detalhe = " — — — — — — — — — — — — — — — — — — "

// Dados da loja
const cnpj = "01.234.567/0001-89";
const loja = '"Console.log(frutas)"';
const endereco = "Programação, 1000, JavaScript";

const cliente = cadastroDePessoa(nome, sobrenome, idade);

// console.log(carrinho_de_compras[0][0]);
console.log(detalhe);
console.log(`|     Cnpj: ${cnpj}      |`);
console.log(`|       ${loja}       |`);
console.log(`|   ${endereco}   |`);
console.log(detalhe);
console.log(`|   Cliente: ${cliente.sobrenome} ${cliente.nome}      |`);
console.log(`|   Idade: ${cliente.idade} anos                  |`);
console.log(detalhe);
console.log(`|Nome do produto  Qtd  Valor  Desc  |`);
for (let x = 0; x < idRetornado.length; x++) {
    console.log(`| ${carrinho_de_compras[x][0]}             ${carrinho_de_compras[x][1].toFixed(2)}         |`)   
}
console.log(detalhe);
console.log(`| Quantidade total de produtos: ${qtdTotal}  |`);
console.log(`| Valor sem descontos: ${valor_sem_desconto.toFixed(2)}       |`);
console.log(`| Descontos: ${totalDeDescontos.toFixed(2)} R$               |`);
console.log(`| Valor a pagar: ${valor_a_ser_pago} R$           |`);
console.log(`|                        24/01/2023 |`)
console.log(detalhe);
*/
