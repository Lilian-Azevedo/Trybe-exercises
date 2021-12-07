  const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(false);

  //exercicio 2
  const oddsAndEvens = (array) => {
    const ordem = `Os números ${array.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`;
    return (ordem);
  }
  console.log(oddsAndEvens ([13, 3, 4, 10, 7, 2]));
  

