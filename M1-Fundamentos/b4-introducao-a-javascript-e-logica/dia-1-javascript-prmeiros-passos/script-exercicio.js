const a = 13;
const b = 7;
const c = 29;

console.log ("Soma = " + (a+b));
console.log ("Subtração = " + (a-b));
console.log ("Multiplicação = " + (a*b));
console.log ("Divisão = " + (a/b));
console.log ("Módulo = " + (a%b));

if (a>b) {
    console.log ("O maior é a:"+a);
} else {
    console.log ("O maior é b:"+b);
}

if (a>b && a>c) {
    console.log ("O maior é a:"+a);
} else if (b>c && b>a){
    console.log ("O maior é b:"+b);
} else {
    console.log ("O maior é c:"+c);
}

const d = -8;
if (d>0) {
    console.log ("Positive");
} else if (d<0) {
    console.log ("Negative");
} else {
    console.log ("zero")
}

const ang1 = 60;
const ang2 = 40;
const ang3 = 80;
if ((ang1+ang2+ang3)=== 180 && ang1>0 && ang2>0 && ang3>0) {
    console.log (true);
} else if (ang1<0 || ang2<0 || ang3<0){
    console.log ("erro");
} else {
    console.log (false);
}

let peçaXadrez="Peão";
switch (peçaXadrez.toLowerCase()) {//*Conferido na internet e no gabarito esse comando
    case "rainha":
        console.log ("Rainha pode se movimentar em diagonal, frente, trás e para os lados");
        break;
    case "rei":
        console.log ("Rei só pode se mover uma casa por vez em qualquer direção");
        break;
    case "bispo":
        console.log ("Bispo só pode se mover em diagonal");
        break;
    case "cavalo":
        console.log ("Cavalo só pode se mover em formato L (3 casas em um sentido e 1 para a lateral");
        break;
    case "torre":
        console.log ("Torre só pode se mover para frente ou para trás");
        break;
    case "peão":
        console.log ("Peão só pode se mover uma casa de cada vez e sem poder voltar (a única exceção é o primeiro movimento de cada peão que pode ser duas casas.)");
        break;     
    default:
        console.log ("Não é uma peça de xadrez");
}


const nota = 55;
if (nota<0 || nota>100){
    console.log ("erro, fora dos limites");
} else{
    if(nota>=90) {
        console.log ("A");
    } else if (nota>=80){
        console.log ("B");
    } else if (nota>=70){
        console.log ("C");
    } else if (nota>=60){
        console.log ("D");
    } else if (nota>=50){
        console.log ("E");
    } else if (nota<50){
        console.log ("F");
    }
}

const a1 = 1;
const a2 = 3;
const a3 = 7;

confirmaPositivo = a1%2===0 || a2%2===0|| a3%2===0;
if (confirmaPositivo===true) {
    console.log ("True");
} else {
    console.log ("False");
}

confirmaFalso = a1%2!==0 || a2%2!==0|| a3%2!==0;
if (confirmaFalso===true) {
    console.log ("True");
} else {
    console.log ("False");
}

const custo=3;
const venda=10;
let custoFinal = custo*1.2;
let lucro = venda - custoFinal;
if (venda<0 || lucro<0){
    console.log ("Erro, valor incorreto")
} else {
    console.log (lucro*1000);
}

const salario = 3000;
let deducaoInss=500;
let deducaoIR;

if (salario<=1556.94){
    deducaoInss = 0.08*salario;
} else if (salario>1556.94 && salario<=2594.92){
    deducaoInss = 0.09*salario;
} else if (salario>2594.92 && salario<=5189.82){
    deducaoInss = 0.11*salario;
} else {
    deducaoInss = 570.88;
} 


let salarioReduzidoInss = salario - deducaoInss;

console.log (salarioReduzidoInss);

if (salarioReduzidoInss<=1903.98){
    deducaoIR = 0;
} else if (salarioReduzidoInss>1903.98 && salarioReduzidoInss<=2826.65){
    deducaoIR = (0.075*salarioReduzidoInss)-142.8;
} else if (salarioReduzidoInss>2826.65 && salarioReduzidoInss<=3751.05){
    deducaoIR = (0.15*salarioReduzidoInss)-354.8;
} else if (salarioReduzidoInss>3751.05 && salarioReduzidoInss<=4664.68){
    deducaoIR = (0.225*salarioReduzidoInss)-636.13;
} else {
    deducaoIR = (0.27*salarioReduzidoInss)-869.36;
} 
let salarioLiquido = salarioReduzidoInss - deducaoIR;
console.log ("Salario líquido é "+ salarioLiquido);
