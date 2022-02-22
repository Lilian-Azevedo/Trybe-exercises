import React, { Component } from 'react';
import { number, func } from 'prop-types';
import '../styles/buttons.css';
import '../styles/counter.css';

export default class UpdateTimer extends Component {
  render() {
    const { min, seg, update, startTimer } = this.props;
    return (
      <div className='main'>
        <div className='timer'>
            <h3>{min < 10? '0'+ min : min}</h3>
            <span>:</span>
            <h3>{seg < 10? '0'+ seg : seg }</h3>
        </div>
        <div className='container-min'>
            <span>1min</span>
            <div className='buttons-update'>
                <button type='button' onClick={update} id='min-increase' name='min'>Aumentar</button>
                <button type='button' onClick={update} id='min-decrease' name='min' disabled={ min === 0}>Diminuir</button>
            </div>
        </div>
        <div className='container-seg'>
            <span>5seg</span>
            <div className='buttons-update'>
                <button type='button' onClick={update} id='seg-increase' name='seg'>Aumentar</button>
                <button type='button' onClick={update} id='seg-decrease' name='seg' disabled={ seg === 0}>Diminuir</button>
            </div>
        </div>

        <button type='button' onClick={ startTimer } disabled={ min === 0 && seg === 0  }>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
        </button>
      </div>
    )
  }
}

UpdateTimer.propTypes = {
  min: number.isRequired,
  seg: number.isRequired,
  update: func.isRequired,
  startTimer: func.isRequired,
}