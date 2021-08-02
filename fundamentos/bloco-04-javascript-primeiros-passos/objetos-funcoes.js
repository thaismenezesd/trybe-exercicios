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