//Cinco programas, um para cada operação aritmética básica

const a = 30;
const b = 10;

function adicao() {
    console.log(a + b);
}

adicao();

function subtracao() {
    console.log(a - b);
}
subtracao();

function multiplicacao() {
    console.log(a * b);
}
multiplicacao();

function divisao() {
    console.log (a / b);
}
divisao();

function porcentagem() {
    console.log (a % b);
}
porcentagem();


//Programa que retorne o maior de dois números.

const numero1 = 50;
const numero2 = 30;

if (numero1 > numero2) {
    console.log(numero1);
} else {
    console.log(numero2);
}

//Programa que retorne o maior de três números.

const firstNumber = 60;
const secondNumber = 40;
const thirdNumber = 20;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log('O maior número é: ' + firstNumber);
  } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    console.log('O maior número é: ' + secondNumber);
  } else {
    console.log('O maior número é: ' + thirdNumber);
  };

//Programa que retorna se um número é negativo ou positivo.

const number = 10;

if (number > 0) {
  console.log('positive');
} else if (number < 0) {
  console.log('negative');
} else {
  console.log('zero');
};

//Programa que defina três constantes com os valores dos três ângulos internos de um triângulo.

const ladoA = 60;
const ladoB = 60;
const ladoC = 60;

let somaDosLadosDoTriangulo = ladoA + ladoB + ladoC;
let ladosPositivos = ladoA > 0 && ladoB > 0 && ladoC > 0;

if(ladosPositivos) {
    if(somaDosLadosDoTriangulo === 180) {
        console.log(true);
    } else {
        console.log(false)
    }
} else {
    console.log("angulo invalido")
}