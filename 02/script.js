/* 
   Solicite 2 números, faça a soma deles e apresente o resultado final ao usuário
*/

alert("Iremos somar 2 números");

let numberOne= prompt("Digite o primeiro número:");
let numberTwo= prompt("Digite o segundo número:");
let result = Number(numberOne) + Number(numberTwo);

// Se não colocar o Number(), ele irá concatenar e não somar:

alert("Resultado final: " + result);