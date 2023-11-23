/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoDoProduto = 100;
let condicaoDePagamento = "3x";
let total

if (condicaoDePagamento === "debito") {
    total = precoDoProduto * 0.9;
} else if (condicaoDePagamento === '2x') {
    total = precoDoProduto;
} else if (condicaoDePagamento === "dinheiro" || condicaoDePagamento === "PIX") {
    total = precoDoProduto * 0.85;
} else {
    total = precoDoProduto * 1.10;
}

console.log(total)