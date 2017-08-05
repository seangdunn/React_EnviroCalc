import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome';
import Input from './components/Input';
import Data from './components/Data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Welcome to EnviroCalc'
    };
  }

  render() {

    return (
      <div>
        <Welcome message={this.state.message} />
        <Input />
        <Data />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
