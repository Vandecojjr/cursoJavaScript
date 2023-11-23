/*
Faça um programa para calcular o valor de uma viagem.

Vorcê tera 5 variáveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustivel que esta no seu carro;
    4 - Gasto médio de combustivel do carro por KM;
    5 - Distancia em KM da viagem;

Imprima no console o valor que sera gasto para realizar esta viagem
*/

const precoEtanol = 4.3;
const precoGasolina = 5.1;
let tipoDeCombustivelNoCarro = "gasolina";
const gastoMedioDoCarroEmKm = 10;
let distanciaAPercorrerEmKm = 350;

let totalEmLitros = distanciaAPercorrerEmKm / gastoMedioDoCarroEmKm;
let totalGasto; 

if (tipoDeCombustivelNoCarro === "etanol" ) {
    totalGasto = totalEmLitros * precoEtanol;
}else {
    totalGasto = totalEmLitros * precoGasolina;
};

console.log(totalGasto.toFixed(2));