let elementWUR = document.getElementById("elementoOndeVoceEsta");

let elementParentWUR = elementWUR.parentNode;
elementParentWUR.style.color = 'violet';

let firstSonOfSon = elementWUR.firstElementChild;
firstSonOfSon.innerText = "Altera texto de firstSon";

//let firstChild = elementParentWUR.firstElementChild;

let primeiroFilho = elementWUR.previousElementSibling;

let atencaoNode = elementWUR.nextSibling;

//let terceiroFilho = elementWUR.nextElementSibling;

let terceiroFilho = elementParentWUR.lastElementChild.previousElementSibling;