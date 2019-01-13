import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import data from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 0,
      result: '',
      trueResult: '',
      isWon: false,
      isChanging: false,      
      winMessage: 'Bravo, nardinamouk.',
      looseMessage: 'Nikemouk',
      questionIndex: 1,
      pointsIndex: 0,
      question: ''      
    }
  }
  UNSAFE_componentWillMount = () => {
    console.log(data)
    this.setState({
      question: data.apis[this.state.category].api[this.state.questionIndex - 1].question,
      trueResult: data.apis[this.state.category].api[this.state.questionIndex - 1].answer,
    })
  }
  checkResult = (e) => {
    e.preventDefault(e);
    if (this.state.questionIndex !== data.length) {
      if ( this.state.trueResult.toLowerCase() === this.state.result.toLowerCase()) {
        this.setState({
          isWon: true,
          result: '',
          questionIndex: this.state.questionIndex + 1,
          pointsIndex: this.state.pointsIndex + 1,
          trueResult: data.apis[this.state.category].api[this.state.questionIndex].answer,
        })
      }
      else {
        this.setState({
          isWon: false,
          result: '',
          questionIndex: this.state.questionIndex + 1,
          trueResult: data.apis[this.state.category].api[this.state.questionIndex].answer,
        })
        
      }
    }
    else this.win()
  }
  win = () => {
    this.setState({defaultMessage: this.state.isWon ? this.state.winMessage : this.state.looseMessage})
    this.reset();
  }
  reset = () => {
    this.setState({
      isWon: false,
      result: '',
      questionIndex: 1,
      pointsIndex: 0,
      defaultMessage: '',
      trueResult: data.apis[this.state.category].api[this.state.questionIndex - 1].answer,
    })
  }
  updateResult = (e) => {
    this.setState({result: e.target.value})

    console.log(this.state.questionIndex);
    console.log(this.state.trueResult);
  }
  
  render() {
    return (
      <Form
        message={this.state.bite}
        onChange2={this.updateResult}
        checkResult={this.checkResult}
        customMessage={this.state.defaultMessage}
        questionIndex={this.state.questionIndex}
        pointsIndex={this.state.pointsIndex}
        question={this.state.question}
        result={this.state.result}
        category={this.state.category}
      />
    );
  }
}

export default App;

// class MyObject {
//   constructor(name) {
//     this.name = name;
//     this.surname = 'gemu';
//     this.age = 19;
//   }
//   sayHello = () => {
//     return console.log(`Hello ${this.name} !`)
//   }
//   static random = () => {

//   }
// }

// const MaBite = new MyObject('thomas').sayHello();