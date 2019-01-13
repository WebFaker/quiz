import React, { Component } from 'react';
import './App.css'

class GameOver extends Component {
  render() {
    let className = 'prout ';
    if (this.props.gameOver === true) {
      className += 'is-Active';
    }
    return (
        <div className={className}>GAME OVER</div>
    );
  }
}

export default GameOver;
