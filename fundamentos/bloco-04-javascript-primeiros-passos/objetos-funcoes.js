let player = {
    name: 'Marta',
    lastName:'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: {
    sixTimes: [2006, 2007, 2008, 2009, 2010, 2018]
    }
};

console.log('A jogadora' + ' ' + player.name + ' ' + player.lastName + ' ' + 'tem ' + player.age + ' anos de idade');

console.log('A jogadora' + ' ' + player.name + ' ' + player.lastName + ' ' + 'foi eleita a melhor do mundo por' + ' ' + player.bestInTheWorld.sixTimes.length + ' ' + 'vezes');

//Imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

 for (let key in names) {
     console.log('Olá' + ' ' + names['person1']);
     console.log('Olá' + ' ' + names['person2']);
     console.log('Olá' + ' ' + names['person3']);
 }

 //Imprima um console.log com as chaves e valores desse objeto.

 let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

 for (let key in car) {
    console.log(key, car[key]);
 } 

 //Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

 let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim',
  };

  console.log('Bem vinda,' + ' ' + info.personagem);
  console.log(info);
  
  for (let keys in info) {
    console.log(keys);
  }
  
  for (let keys in info) {
    console.log(info[keys]);
  }

  //função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

  function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificaPalindrome('arara')); //true
  console.log(verificaPalindrome('desenvolvimento')); //false

  //função que receba um array de inteiros e retorne o índice do maior valor.


  function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

  //função que receba um array de inteiros e retorne o índice do menor valor.

  function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
    return indiceMenor;
  }
  
  console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));
