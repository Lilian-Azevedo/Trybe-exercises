import React, { Component } from 'react';
import playButton from '../images/play.png';
import pauseButton from '../images/pause.png';
import cancelButton from '../images/stop.png';
import '../styles/buttons.css';
import '../styles/counter.css';


export default class Counter extends Component {
  state = {
   min: 0,
   seg: 0,
   showPlay: true,
   showStop: false,
   showCancel: false,
   showRetake:false,
   stoped: false, retake: false, cancel: false,
  }

  updateTimer = ({target: { name }}) => {
    this.setState((previous)=> ({
        min: name === 'increase'? previous.min + 1 : previous.min - 1,
    }))
  }

  stopTimer = () => {
    this.setState({ 
        showStop: false,
        showRetake: true,
        stoped: true });
  }

  retakeTimer = () => {
    this.setState({ 
        retake:true,
        showRetake: false,
        showStop: true });
  }

  cancelTimer = () => {
    this.setState({
        cancel: true,
        seg:0,
        min:0,
        showPlay: true,
        showStop: false,
        showCancel: false,
        showRetake: false });
  }

  startTimer = () => {
    this.setState({ 
        showPlay: false,
        showStop: true,
        showCancel:true });
    if(this.state.seg === 0) {
        this.setState(({seg, min}) => ({
            seg: 59,
            min: (min > 0)? min - 1: min,
        }))
    }

    this.timer = setInterval(() => {
        if(this.state.cancel) {
            this.setState({
                seg: 0,
                min: 0,  
            })
        } else {
            this.setState(({seg, min}) => ({
                seg: (seg !== 0)? seg - 1: 59,
                min: ((seg === 0) && min > 0)? min - 1: min,
            }))
        }
    }, 1000);
  }

  componentDidUpdate(_prevProps, prevState) {
    if(prevState.seg === 1 && prevState.min === 0 || prevState.stoped || prevState.cancel) {
        clearInterval(this.timer);
    }
  }

  render() {
    const {min, seg, showPlay,showCancel,showRetake,showStop} = this.state;
    return (
      <div className='main'>
        <div className='timer'>
            <h3>{min === 0 || min < 10? '0'+ min : min}:{seg === 0 || seg < 10? '0'+ seg : seg }</h3>
        </div>
        <div className='buttons-update'>
            <button type='button' onClick={this.updateTimer} name='increase'>Aumentar</button>
            <button type='button' onClick={this.updateTimer} name='decrease' disabled={ min === 0}>Diminuir</button>
        </div>
        <div className='container-buttons-functions'>
            {showPlay && (<button type='button' onClick={this.startTimer} disabled={ min === 0}><img src={playButton}/></button>)}
            {showStop && (<button type='button' onClick={this.stopTimer} ><img src={pauseButton}/></button>)}
            {showRetake && (<button type='button' onClick={this.retakeTimer} ><img src={playButton}/></button>)}
            {showCancel &&  <button type='button' onClick={this.cancelTimer} ><img src={cancelButton}/></button>}
        </div>
      </div>
    )
  }
}
