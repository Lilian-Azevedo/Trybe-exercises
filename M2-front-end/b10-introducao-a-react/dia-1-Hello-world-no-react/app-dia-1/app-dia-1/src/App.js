import React from 'react';
import './App.css';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

//exercicio 1
/* const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Fazer exercicios', 'Revisar conteúdo', 'Estudar coreano'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    );
  }
}

export default App; */

//exercicio 2
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;