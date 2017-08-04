import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome';
import Form from './components/Form';

// Create a new component. This compenent should produce some html
class App extends React.Component {

  render() {

    return (
      <div>
        <Welcome />
        <Form />
      </div>
    );
  }
};

// Take this component's generated html and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
