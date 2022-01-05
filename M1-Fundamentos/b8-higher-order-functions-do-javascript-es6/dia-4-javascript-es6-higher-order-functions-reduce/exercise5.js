const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
  
function containsA() {
  return names
    .reduce((acumulador, item) => {
      word = item.toLowerCase().split('');
      for (let letter of word) {
        if (letter === 'a') acumulador = acumulador + 1;
      };
      return acumulador;
    }, 0);
}

console.log(containsA());