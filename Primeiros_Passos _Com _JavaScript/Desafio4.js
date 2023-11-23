/*
O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura**)

Elabore um algoritimo que dado o opeso e a altura de um adulto mostre sua ccondição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5: Abaixo do peso;
- Entre 18.5 e 25: Peso normal;
- Entre 25 e 30: Acima do peso;
- Entre 30 e 40: Obeso;
- Acima de 40: Obesidade Grave
*/

let pesoEmKg = 77;
let alturaEmMetros = 1.87;

const IMC = pesoEmKg / (alturaEmMetros ** 2);
console.log(IMC);

if (IMC < 18.5) {
    console.log('Abaixo do peso');
} else if (IMC < 25) {
    console.log('Peso normal');
} else if (IMC < 30) {
    console.log('Acima do peso');
} else if (IMC < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
};



