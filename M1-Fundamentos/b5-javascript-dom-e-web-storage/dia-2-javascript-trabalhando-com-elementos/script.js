let elementWUR = document.getElementById("elementoOndeVoceEsta");

let elementParentWUR = elementWUR.parentNode;
elementParentWUR.style.color = 'violet';

let firstSonOfSon = elementWUR.firstElementChild;
firstSonOfSon.innerText = "Altera texto de firstSon";

//let firstChild = elementParentWUR.firstElementChild;

let primeiroFilho = elementWUR.previousElementSibling;

let atencaoNode = elementWUR.nextSibling;

//let terceiroFilho = elementWUR.nextElementSibling;

//let terceiroFilho = elementParentWUR.lastElementChild.previousElementSibling;

//parte II
let newSection = document.createElement('section');
newSection.id = "novoIrmao";
elementParentWUR.appendChild (newSection);

let filhoDoOndeVoceEsta = document.createElement ('section');
filhoDoOndeVoceEsta.id = 'filhoDoOndeVoceEsta';
elementWUR.appendChild(filhoDoOndeVoceEsta);

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

let terceiroFilho = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

