//exercicio 1
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

for (let index in names) {
    console.log ("Olá, "+ names[index]);
};

//exercicio 2 
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let prop in car) {
    console.log (prop, car[prop]);
}