import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This compenent should produce some html
class App extends Component {

  render() {

    return (
      <div>

      </div>
    );
  }
};

// Take this component's generated html and put it on the page
React.render(<App />, document.querySelector('.container'));
