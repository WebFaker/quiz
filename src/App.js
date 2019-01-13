import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import data from './data';
import GameOver from './GameOver';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 1,
      result: '',
      trueResult: '',
      isWon: false,
      isChanging: false,      
      winMessage: 'Bravo, nardinamouk.',
      looseMessage: 'Nikemouk',
      questionIndex: 1,
      lifeIndex: 3,
      question: '',
      icon: '',
      gameOver: false,
      categoryChoose: false,
    }
  }
  UNSAFE_componentWillMount = () => {
    // console.log(data)
    this.setState({
      question: data.apis[this.state.category].api[this.state.questionIndex - 1].question,
      trueResult: data.apis[this.state.category].api[this.state.questionIndex - 1].answer,
    })
  }
  checkResult = (e) => {
    e.preventDefault(e);
    // Vérifier s'il y a toujours des questions à donner
    if (this.state.questionIndex !== data.apis[this.state.category].api.length) {
      // Vérifier si la réponse donnée correspond à celle attendue
      if ( this.state.trueResult.toLowerCase() === this.state.result.toLowerCase()) {
        this.setState({
          isWon: true,
          result: '',
          questionIndex: this.state.questionIndex + 1,
          trueResult: data.apis[this.state.category].api[this.state.questionIndex].answer,
          icon: '✅ Bravo !'
        })
      }
      else {
        // Vérifier si le joueur a toujours une vie
        if (this.state.lifeIndex <= 1 ) {
          console.log("T'as perdu !");
          this.setState({
            isWon: false,
            gameOver: true,                                                            
            result: ''
          })
          this.win()
          // A faire (Si tu es a 0, Game Over)
        }
        // Sinon lui en enlever une, mais il continue le jeu
        else {
          this.setState({
            isWon: false,
            result: '',
            questionIndex: this.state.questionIndex + 1,
            lifeIndex: this.state.lifeIndex - 1,
            trueResult: data.apis[this.state.category].api[this.state.questionIndex].answer,
            icon: '❌ Dommage ...'
          })
        }
      }
    }
    // S'il n'y a plus de questions a proposer et qu'il lui reste une vie, le joueur a gagné
    else this.win() 
  }

  updateResult = (e) => {
    this.setState({
      result: e.target.value,
      icon: '',
      defaultMessage: ''
    })

    // console.log(this.state.questionIndex);
    // console.log(this.state.trueResult);
  }
  win = () => {
    this.setState({defaultMessage: this.state.isWon ? this.state.winMessage : this.state.looseMessage})
  }
  // Restaure tout à la valeur originale, relance le jeu en quelques sortes
  reset = () => {
    this.setState({
      isWon: false,
      gameOver: false,
      result: '',
      defaultMessage: '',
      questionIndex: 1,
      lifeIndex: 3,
    })
  }

  updateCategoryIndex = (i) => {
    this.setState({category: i})
    this.setState({
      categoryChoose: true,
      isWon: false,
      gameOver: false,
      result: '',
      defaultMessage: '',
      questionIndex: 1,
      lifeIndex: 3,
    })
  }

  render() {
    let categoryClass = 'categories ';
    if (this.props.categoryChoose === true) {
      categoryClass += 'is-Hidden';
    }
    const listItems = data.apis.map((list, i) =>
      <li key={list.id} index={i} onClick={() => this.updateCategoryIndex(i)}>
        {list.id} {list.name}
      </li>
    );
    return (
      <div className="global">
        <div className={categoryClass}>
          {listItems}
        </div>
        <Form
          onChange2={this.updateResult}
          checkResult={this.checkResult}
          customMessage={this.state.defaultMessage}
          questionIndex={this.state.questionIndex}
          lifeIndex={this.state.lifeIndex}
          question={this.state.question}
          result={this.state.result}
          category={this.state.category}
          icon={this.state.icon}
          reset={this.reset}
        />
        <GameOver
          gameOver={this.state.gameOver}
        />
      </div>
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