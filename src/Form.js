import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
        <div>
            <p>Question: {this.props.questionIndex}/5 - Points: {this.props.pointsIndex}/5</p>
            <p>{this.props.question}</p>
            <form
                onSubmit={this.props.checkResult}>
                <input 
                    type='text' 
                    placeholder='Ex: Pikachu'
                    onChange={this.props.onChange2}
                />
                <button>SUBMIT</button>
            </form>
            <p>{this.props.customMessage}</p>
        </div>
    );
  }
}

export default Form;
