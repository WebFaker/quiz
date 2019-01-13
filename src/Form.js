import React, { Component } from 'react';
import data from './data';

class Form extends Component {
  render() {
    return (
        <div className="form">
            <p className="informations">Question: {this.props.questionIndex}/10 - Vies: {this.props.lifeIndex}/3</p>
            <p className="question">{data.apis[this.props.category].api[this.props.questionIndex - 1].question}</p>
            <div className="imageContainer">
              <img
                className="image"
                src={data.apis[this.props.category].api[this.props.questionIndex - 1].image}
                alt="Devine ce que c'est !"
              />
            </div>
            <form
                className="formula"
                onSubmit={this.props.checkResult}>
                <input
                    className="input"
                    type='text' 
                    placeholder='Ex: Rattata'
                    value={this.props.result}
                    onChange={this.props.onChange2}
                />
                <button className="submit">Valider</button>
            </form>
            <p className="icon">{this.props.icon}</p>
            <p>{this.props.customMessage}</p>
            <button className="reset" onClick={this.props.reset}>Recommencer</button>
        </div>
    );
  }
}

export default Form;
