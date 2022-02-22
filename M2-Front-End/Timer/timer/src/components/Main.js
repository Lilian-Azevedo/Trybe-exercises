import React, { Component } from 'react'
import '../styles/buttons.css';
import '../styles/counter.css';
import '../styles/hourglass.css';
import Countdown from './Countdown';
import UpdateTimer from './UpdateTimer';

export default class App extends Component {
  state = {
    min: 0,
    seg: 0,
    start: false,
  }

  updateTimer = ({target: { name, id }}) => {
    if(name === 'min') {
        this.setState((previous)=> ({
            min: id === 'min-increase'? previous.min + 1 : previous.min - 1,
        }))
    } else {
        this.setState((previous)=> ({
            seg: id === 'seg-increase'? previous.seg + 5 : previous.seg - 5,
        }))
    }
  }

  startTimer = () => {
    this.setState({ 
        start: true,
    });
  }

  cancelTimer = () => {
    this.setState({ 
        start: false,
    });
  }

  render() {
    return (
      <div className="page">
        {!this.state.start && <UpdateTimer {...this.state}
          update={this.updateTimer}
          startTimer ={this.startTimer}/>}
        {this.state.start && <Countdown {...this.state}
          cancelTimer ={this.cancelTimer}/>}
      </div>
    );
  }
}
