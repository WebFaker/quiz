import React, { Component } from 'react';
import './App.css'

class GameOver extends Component {
  render() {
    let className = 'gameOver ';
    if (this.props.gameOver === true) {
      className += 'is-Active';
    }
    return (
      <div className={className}>
        <div>GAME OVER</div>
        <button onClick={this.props.reset}>replay</button>
      </div>
    );
  }
}

export default GameOver;
