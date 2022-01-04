const newEmployees = (funcaoPedida) => {
    const employees = {
      id1: funcaoPedida('Pedro Guerra '), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: funcaoPedida('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: funcaoPedida('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const emailEmployees = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return {fullName, email: `${email}@trybe.com`};
};

//console.log(newEmployees(emailEmployees));

//2
const randomNumber = () => {
    const number = Math.round((Math.random() * 5) + 1);
    return number;
};

const verifyEqual = (givenNumber, number) => givenNumber === number;

const lottery = (givenNumber, randomNumber) => {
    const number = randomNumber();
    return verifyEqual(givenNumber, number) ? `Parabén, você ganhou!` : `Tente novamente`;  
};

//console.log(lottery(1, verifyEqual));

//3
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswers, studentAnswers) => {
    const resultRight = studentAnswers.filter((item, index) => item === rightAnswers[index]);
    const resultIncorrect = studentAnswers.filter((item, index) => item !== rightAnswers[index] && item !== 'N.A');
    
    return `Resultado: ${resultRight.length + (resultIncorrect.length * (-0.5))}`;
};

console.log(checkAnswers(rightAnswers, studentAnswers));