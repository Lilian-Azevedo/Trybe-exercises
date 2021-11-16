


/*
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

console.log ("Bem-vinda, ", info.personagem);
console.log (info);

for (let item in info) {
    console.log (item);
};

for (let item in info) {
    console.log (info[item]);
};
*/



let info = [
   {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  },
  {
    personagem: 'Tio Patinhas',
    origem: ["Christmas on Bear Mountain","Dell's Four Color Comics #178"],
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  },
];

let personagem1 = info[0];
let personagem2 = info[1];
console.log(personagem1.personagem+" e "+ personagem2.personagem);
console.log(personagem1.origem+" e "+ personagem2.origem);
console.log(personagem1.nota+" e "+ personagem2.nota);
if (personagem1.recorrente==="Sim" && personagem2.recorrente==="Sim"){
    console.log("Ambos recorrentes");
} else if (personagem1.recorrente ==="Sim") {
    console.log("Somente ", personagem1, "é recorrente");
} else if (personagem2.recorrente ==="Sim") {
    console.log("Somente ", personagem2, "é recorrente");
} else {
    console.log("Nenhum é recorrente");
};

//exercicios a partir do 6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
    ],
  };
//console.log ("O livro favorito de ", leitor.nome, ' ', leitor.sobrenome," se chama ", leitor.livrosFavoritos[0].titulo);
console.log(leitor.nome," tem " ,leitor.livrosFavoritos.length, " livros favoritos.");
