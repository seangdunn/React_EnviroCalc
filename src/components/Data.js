import React from 'react';
import {Input} from './Input';

class Data extends React.Component {

  render() {
    return (
      <div>
        <p>{props.animals} Animals not eaten</p>
        <p>{this.state.carbon} C02 saved</p>
        <p>{this.state.forest} Sq ft of forest saved</p>
        <p>{this.state.grain} lbs of grain saved</p>
        <p>{this.state.water} gallons of water saved</p>
      </div>
    );
  }
}

export default Data;
