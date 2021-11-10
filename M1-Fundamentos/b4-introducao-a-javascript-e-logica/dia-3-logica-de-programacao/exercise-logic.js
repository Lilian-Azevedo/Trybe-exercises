//exercicio n.1

// //let n=5;
// let line="";

// for (i=0; i<n;i+=1){
//     line = line +"*";
// }
// for (i=0; i<n;i+=1){
//   //  console.log (line);
// }

//exercício n.2

// let line2="";
// for (i=0; i<n;i+=1){
//     line2 = line2 +"*";
//    // console.log (line2);
// }

//exercicio n.3
//tentei de várias formas e não deu certo, resolvi copiar o gabarito e entender linha a linha


let n = 5;//numero de asteriscos querido
let symbol = '*'; //criou uma string que tem um *
let inputLine = '';//outra string que tem espaço dentro
let inputPosition = n;// criou uma outra variável para receber o valor do 'n'. Será que não poderia usar só o n? (R: acho que até dá mas pode bugar e dessconfigurar o valor inicial, já que esse valor vai ser reduzido no fim do segundo loop)

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {//entra num loop que para em 'n-1'
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {//um segundo loop interno, aparentemente para acrescentar dados na mesma linha (usei um esquema parecido antes, mas acho que não tava bom pq tentei usar array)
    if (columnIndex < inputPosition) {//Assim que o comando entra no segundo loop, ele compara se o índice da coluna (considerando como uma array, é como se fosse o indice da string)é menor que o n
      inputLine = inputLine + ' ';//aqui há uma concatenação de strings. Ele pega a string com o espaço e adiciona um espaço a ele mesmo, ou seja, na primeira vez que entrar aqui, ele vai sair como sendo dois espaços; na segunda vez com três e sucessivamente até um valor antes do n.
    } else {//aqui um senão, ou seja, o valor da coluna vai ser igual ao n. Logo, espera-se que quando chegue aqui, ele ja tem todos os espaços na primeira linha e o ultimo valor concatenado seria um *
      inputLine = inputLine + symbol;//como esperado, ele pega todos os espaços concatenados e acrescenta um * no final
    }
  }//sai do segundo loop, espera-se que saia da primeira linha assim "     *" 
  console.log(inputLine);//imprime a linha feita nesse segundo loop
  inputLine = '';//reinicia a string que soma espaços, como sendo só um espaço novamente
  inputPosition -= 1;//reposicionou a string que recebia o n anteriormente para sendo n-1, ou seja, vai decair a quantidade de espaços já que quando chegar no if, a comparação vai ser menor.
}; //sai e entra novamente no primeiro loop, enquanto index de linha for menor que o n
//vou tentar novamente com array em outro momento, mas acho que ele imprimiria ["","","",'*'] ainda.

//exercicio 4


n = 7;
symbol = '*';
inputLine = '';
let centerPosition = (n+1)/2;

for (let distance = 0; distance <centerPosition; distance += 1) {
    for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (Math.abs(columnIndex - centerPosition)>distance) {//usei o módulo para absoluto pego do site *https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
    }
    console.log(inputLine);
    inputLine ="";
  }
  