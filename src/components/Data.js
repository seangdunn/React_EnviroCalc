import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    this.state = {
      animals: 0,
      carbon: 0,
      forest: 0,
      grain: 0,
      water: 0
    };
  }

  render() {
    return (
      <div>
        <p>{animals} Animals not eaten</p>
        <p>{carbon} C02 saved</p>
        <p>{forest} Sq ft of forest saved</p>
        <p>{grain} lbs of grain saved</p>
        <p>{water} gallons of water saved</p>
      </div>
    );
  }
}

export default Form;
