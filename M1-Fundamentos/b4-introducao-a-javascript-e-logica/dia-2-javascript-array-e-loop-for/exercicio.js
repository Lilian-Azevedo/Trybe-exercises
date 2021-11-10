let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let number of numbers){
    console.log (number);
}

let soma=0;
for (let index=0; index<numbers.length;index+=1){
    soma+=numbers[index];
}
console.log ("A soma é: "+ soma);

let media = soma/numbers.length;

console.log ("A média é: "+ media);

if (media > 20){
    console.log ("Valor maior que 20");
} else {
    console.log ("Valor menor que 20");
}


let maior=0;
for (let incremento=0; incremento<numbers.length;incremento+=1){
    if (numbers[incremento]>=maior){
        maior= numbers[incremento];
    }
}
console.log ("O maior valor é: "+maior);

let somaImpar=0;
for (let impar of numbers)  {
    if (impar%2!==0){
        somaImpar+=1;
    }
}
if (somaImpar>0){
    console.log ("A quantidade de numeros ímpares é: "+somaImpar);
} else{
    console.log ('Não há numeros ímpares');
}

let menor=numbers[0];
for (incremento=0; incremento<numbers.length;incremento+=1){
    if (numbers[incremento]<=menor){
        menor= numbers[incremento];
    }
}
console.log ("O menor valor é: "+menor);

let arrayAte25=[];
for (i=0; i<25;i+=1){
    arrayAte25[i]=i+1;
}
//console.log (arrayAte25);
for (i=0;i<arrayAte25.length;i+=1){
//    console.log (arrayAte25[i]/2);
}
