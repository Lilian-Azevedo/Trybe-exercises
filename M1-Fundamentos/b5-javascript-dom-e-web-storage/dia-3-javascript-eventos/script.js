function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
  };
};
  
createDaysOfTheWeek();


function createNumberOfDay() {
    const dezDaysList = [28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysList = document.querySelector('#days');
  
    for (let index = 0; index < dezDaysList.length; index += 1) {
      const day = dezDaysList[index];
      const dayNumberItem = document.createElement('li');

      if (day === 24 || day === 31) {
        dayNumberItem.innerHTML = day;
        dayNumberItem.className = 'day holiday friday';
        daysList.appendChild(dayNumberItem);
      }
      else if (day === 3 || day === 10 || day === 17) {
        dayNumberItem.innerHTML = day;
        dayNumberItem.className = 'day friday';
        daysList.appendChild(dayNumberItem);  
      } 
      else if (day === 25) {
        dayNumberItem.innerHTML = day;
        dayNumberItem.className = 'day holiday';
        daysList.appendChild(dayNumberItem);  
      }
      else {
        dayNumberItem.innerHTML = day;
        dayNumberItem.className = 'day';
        daysList.appendChild(dayNumberItem);  
      }
    };
};

createNumberOfDay();

function createBotaoFeriado(feriados) {
    let btFeriado = document.createElement('button');
    btFeriado.id = 'btn-holiday';
    let buttonPai = document.querySelector('.buttons-container');
      
    btFeriado.innerHTML = feriados;
    buttonPai.appendChild(btFeriado);
}

createBotaoFeriado('Feriados');
/* 
function clickButtHoliday() {
    let botaoFeriado = document.getElementById('btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    let backOriginColor = 'rgb(238,238,238)';
    let newBackColor = 'rgb(110,247,97)';
      
 
    botaoFeriado.addEventListener('click', function() {
     for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === newBackColor) {
        holidays[index].style.backgroundColor = backOriginColor;
      } else {
        holidays[index].style.backgroundColor = newBackColor;
      }
     }
    })
}
  clickButtHoliday(); */

  //nao sei pq meu não rodou, já que está identico ao do gabarito. Copiei o do gabarito por enquanto para conferir de novo e ver onde tá o erro.

  function displayHolidays() {
    let getHolidayButton = document.getElementById('btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  
  displayHolidays();

//exerc.4
function createBotaoFriday(friday){
  let btFriday = document.createElement('button');
  btFriday.id = 'btn-friday';
  let buttonPai = document.querySelector('.buttons-container');
    
  btFriday.innerHTML = friday;
  buttonPai.appendChild(btFriday);
}
createBotaoFriday('Sexta-Feira');

function displayFriday(fridayArray) {
  let fridayButton = document.querySelector('#btn-friday');
  let getFridayDays= document.getElementsByClassName('friday');
  let sextouText = 'SEXTOOOOOUUU';

  fridayButton.addEventListener('click', function() {
    for (let index = 0; index < getFridayDays.length; index += 1) {
      if (getFridayDays[index].innerHTML !== sextouText) {
        getFridayDays[index].innerHTML = sextouText;
      } else {
        getFridayDays[index].innerHTML = fridayArray[index];
      }
    }
  })
};
let fridayDays = [3, 10, 17, 24, 31];
displayFriday(fridayDays);

//exerc. 6
//zoom passando por cima do numero, ele aumenta de tamanho e quando passa de novo, diminui
function createZoomOn() {
  //vou precisar de mouseOver e out, aumentar ou diminuir fonte no objeto que tá sedno passado, que é os dias
  let listDays = document.getElementById('days');
  listDays.addEventListener('mouseover', function(e){
    e.target.style.fontSize = '28px';
  })
}
function createZoomOut() {
  let listDays = document.getElementById('days');
  listDays.addEventListener('mouseout', function(e) {
    e.target.style.fontSize = '20px';
  })
}
createZoomOn();
createZoomOut();

//exerc.7
//o param da função vai ser filho do my-tasks(c), o create vai ser com span
function createPersonTask(task) {
  let divPaiTasks = document.querySelector('.my-tasks');
  let personTask = document.createElement('span');
  personTask.innerHTML = task;
  divPaiTasks.appendChild(personTask);
}
createPersonTask('Estudar Coreano');
//exerc. 8  
function addColorTask(cor) {
  let divPaiTasks = document.querySelector('.my-tasks');
  let backgroundColorTask = document.createElement('div');

  backgroundColorTask.className = 'task';
  backgroundColorTask.style.backgroundColor = cor;

  divPaiTasks.appendChild(backgroundColorTask);
}
addColorTask('yellow');

//exerc. 9
//criar um evento de click na div cor, quando selecionar ,a classe da div vai ser task selected e quando clicar de novo ele vira task
function createClassTaskSelected() {
  let divColor = document.querySelector('.task');
  let countFalse;
  divColor.addEventListener('click', function(e) {
    if (countFalse === undefined) {
      e.target.className = 'task selected';
      countFalse = 1;
    } else {
      e.target.className = 'task';
      countFalse = undefined;
    } 
  })
}
createClassTaskSelected();
//exerc 10
//se a div de cor estiver selecionada, e clicar num numero, ele muda de cor para a da bola. 
//Tentei e não funcionava, alterei de querySelector para className no divTask e funcionou, não entendi, pergunar ao Baêta depois. Também não funciona se co bColor for do Task selected, pq?
//Estava com um nome gigante na cor e usei a recomendação do gabarito de criar var.
function addColorTaskDay() {
  let task = document.querySelector('.task'); 
  let listDays = document.querySelector('#days');
  let divTaskSelected = document.getElementsByClassName('task selected');
  let taskColor = task.style.backgroundColor;

  listDays.addEventListener('click', function(e) {
    if (divTaskSelected.length !== 0 && e.target.style.color !== taskColor) {
      e.target.style.color = taskColor;
    } else if (e.target.style.color === taskColor && divTaskSelected.length !==  0) {
      e.target.style.color = 'rgb(119,119,119)';
    }
  })
}
addColorTaskDay();
//exerc. bonus
