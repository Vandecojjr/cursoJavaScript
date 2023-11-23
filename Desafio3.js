/*
Opções de pagamento
-Debito  - (1)
-PIX ou dinheiro - (2)
-parcelado 2x  - (3)
-3x ou mais - (4)
*/

function valorTotal(preco, opção) {
    
    if (opção === 1) {
        return  preco * 0.9;
    } else if (opção === 3) {
        return  preco;
    } else if (opção === 2) {
        return  preco * 0.85;
    } else {
        return  preco * 1.10;
    }
}

let total = valorTotal(100, 1);
console.log(total);