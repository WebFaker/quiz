import React, { Component } from 'react';
import data from './data';

class Form extends Component {
  render() {
    return (
        <div>
            <p>Question: {this.props.questionIndex}/5 - Points: {this.props.pointsIndex}/5</p>
            <p>{data.apis[this.props.category].api[this.props.questionIndex - 1].question}</p>
            <form
                onSubmit={this.props.checkResult}>
                <input 
                    type='text' 
                    placeholder='Ex: Pikachu'
                    value={this.props.result}
                    onChange={this.props.onChange2}
                />
                <button>SUBMIT</button>
                <p>{this.props.icon}</p>
            </form>
            <p>{this.props.customMessage}</p>
            <button onClick={this.props.reset}>replay</button>
        </div>
    );
  }
}

export default Form;
