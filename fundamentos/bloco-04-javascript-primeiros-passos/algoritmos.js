//Percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

let fruits = [3, 4, 10, 1, 12];
let resultado = 0;

for (let i = 0; i < fruits.length; i+= 1){
    resultado += fruits[i];
}
if(resultado > 15){
    console.log(resultado);
} else {
    console.log("valor < 16");
}

//Programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

const n = 5;

for (let i = 0; i < n; i += 1) {
console.log("*****")
}





