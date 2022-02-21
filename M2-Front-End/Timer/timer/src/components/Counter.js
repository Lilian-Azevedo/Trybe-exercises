import React, { Component } from 'react';
import '../styles/buttons.css';
import '../styles/counter.css';
import '../styles/hourglass.css';


export default class Counter extends Component {
  state = {
   min: 0,
   seg: 0,
   showPlay: true,
   showStop: false,
   showCancel: false,
   showRetake:false,
   showUpdate: true,
   stoped: false, retake: false, cancel: false,
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
        showRetake: false,
        showUpdate: true, });
  }

  startTimer = () => {
    this.setState({ 
        showPlay: false,
        showUpdate: false,
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
    if(prevState.seg === 1) {
        this.setState({showUpdate:true})
    }
  }

  render() {
    const {min, seg, showPlay,showCancel,showRetake,showStop, showUpdate} = this.state;
    return (
        <div className='page'>
            <div className='main'>
                <div className='timer'>
                    <h3>{min < 10? '0'+ min : min}</h3>
                    <span>:</span>
                    <h3>{seg < 10? '0'+ seg : seg }</h3>
                </div>
                { showUpdate && (
                <>
                    <div className='container-min'>
                        <span>1min</span>
                        <div className='buttons-update'>
                            <button type='button' onClick={this.updateTimer} id='min-increase' name='min'>Aumentar</button>
                            <button type='button' onClick={this.updateTimer} id='min-decrease' name='min' disabled={ min === 0}>Diminuir</button>
                        </div>
                    </div>
                    <div className='container-seg'>
                        <span>5seg</span>
                        <div className='buttons-update'>
                            <button type='button' onClick={this.updateTimer} id='seg-increase' name='seg'>Aumentar</button>
                            <button type='button' onClick={this.updateTimer} id='seg-decrease' name='seg' disabled={ seg === 0}>Diminuir</button>
                        </div>
                    </div>
                </>)}
                <div className='container-buttons-functions'>
                    {showPlay && (
                    <button type='button' onClick={this.startTimer} disabled={ min === 0 && seg === 0  }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                    </button>)}
                    {showStop && (
                    <button type='button' onClick={this.stopTimer} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>)}
                    {showRetake && (
                    <button type='button' onClick={this.retakeTimer} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                    </button>)}
                    {showCancel &&  (
                    <button type='button' onClick={this.cancelTimer} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                        </svg>
                    </button>)}
                </div>
            </div>
            {!showUpdate && (<div className='container-hourglass'>
                <div className="hourglass" />
            </div>)}
        </div>
    )
  }
}

// Fontes: https://www.youtube.com/watch?v=p78d-ppiPwQ; 
