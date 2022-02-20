import React, { Component } from 'react'

export default class Buttons extends Component {
  render() {
    const { showPlay, showStop, showRetake, showCancel, startTimer, stopTimer, retakeTimer, cancelTimer, min } = this.props;
    return (
    <div>
        {showPlay && <button type='button' onClick={ startTimer } disabled={ min === 0}>Iniciar</button>}
        {showStop && <button type='button' onClick={stopTimer} >Parar</button>}
        {showRetake && <button type='button' onClick={ retakeTimer} >Retomar</button>}
        {showCancel &&  <button type='button' onClick={ cancelTimer} >Cancelar</button>}
        <div>
            <Buttons {...this.state}
                stopTimer={ this.stopTimer }
                startTimer={ this.stopTimer }
                retakeTimer={ this.stopTimer }
                cancelTimer={ this.stopTimer } />
        </div>
    </div>
    )
  }
}
