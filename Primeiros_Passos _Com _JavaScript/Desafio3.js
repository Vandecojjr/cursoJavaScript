/*
  1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
   calcule e imprima a sua media e a sua classificaçãoconforme a tabela abaixo.
  
   Média = (nota 1 + nota 2 . nota 3) / 3;
   
   Classificação:
   - Media menor que 5, reprovação;
   - Média entre 5 e 7, recuperação;
   - Média acima de 7, passou de semestre;
*/

let nota1 = 7.5;
let nota2 = 7;
let nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(1));

if (media < 5) {
    console.log('Reprovação');
} else if (media > 7) {
    console.log('Passou de semestre');
} else {
    console.log('Recuperação');
};