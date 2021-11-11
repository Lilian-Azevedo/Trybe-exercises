function verificaPalindrome (palavra) {
    palavraInvertida = palavra.split('').reverse().join('');//achei o conteúdo no site *https://www.devmedia.com.br/forum/inverter-string-no-javascript/570951 (com a seguinte explicação de Victor Machado: Utilizando a função .split(''), eu estou criando uma array com as letras, depois utilizo a função .reverse() para inverter a posição da array e por ultimo a função join(''), para unir todos os campos em uma string novamente.)
    if (palavraInvertida == palavra){
        return true;
    } else {
        return false;
    };
}

console.log (verificaPalindrome("arara"));
console.log (verificaPalindrome("desenvolvimento"));

function arrayMaiorValor(numeros){
    let maiorIndice=0;
    let maiorValor=numeros[0];

    for (let index in numeros){
        if (numeros[index]>maiorValor){
           maiorValor = numeros[index];
           maiorIndice = index;
        };
    };
    return maiorIndice;
};

//console.log (arrayMaiorValor([2, 3, 6, 7, 10, 1]));

//exercicio 3

function arrayMenorValor(numeros){
    let menorIndice=0;
    let menorValor=numeros[0];

    for (let index in numeros){
        if (numeros[index]<menorValor){
           menorValor = numeros[index];
           menorIndice = index;
        };
    };
    return menorIndice;
};

console.log (arrayMenorValor ([2, 4, 6, 7, 10, 0, -3]));