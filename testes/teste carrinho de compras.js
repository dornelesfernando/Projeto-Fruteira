const produto1 = "Melancia", preco1 = 25;
const produto2 = "Banana  ", preco2 = 5;
const produto3 = "Abacaxi ", preco3 = 7;
const produto4 = "Maça    ", preco4 = 6;
const produto5 = "Pera    ", preco5 = 9;
const produto6 = "Abacate ", preco6 = 4;
const produto7 = "Uva     ", preco7 = 2;
const produto8 = "Kiwi    ", preco8 = 3;
const produto9 = "Ameixa  ", preco9 = 1;
const produto10 = "Manga   ", preco10 = 5;

id0 = ["Produto", "Preço"];
id1 = [produto1, preco1];
id2 = [produto2, preco2];
id3 = [produto3, preco3];
id4 = [produto4, preco4];
id5 = [produto5, preco5];
id6 = [produto6, preco6];
id7 = [produto7, preco7];
id8 = [produto8, preco8];
id9 = [produto9, preco9];
id10 = [produto10, preco10];

id = [id0, id1, id2, id3, id4, id5, id6, id7, id8, id9, id10];

// id10, id5, id4

carrinho_de_compras = [];
preco_carrinho_de_compras = [];
let idRetornado;
let valor_a_ser_pago = 0;

idRetornado = [];
idRetornado.push(id6, id5, id1);  // Insersão manual - teste

// Colocando no carrinho de compras
for (let x = 0; x < idRetornado.length; x++) {
    carrinho_de_compras.push(idRetornado[x]);
    preco_carrinho_de_compras.push(idRetornado[x][1]);
}

// Fazendo a soma dos precos
for (let x = 0; x < preco_carrinho_de_compras.length; x++) {
    valor_a_ser_pago = valor_a_ser_pago + preco_carrinho_de_compras[x];
}

console.log(carrinho_de_compras);
console.log(valor_a_ser_pago);