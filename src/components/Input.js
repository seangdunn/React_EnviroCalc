import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activity: '',
      diet: '',
      years: '',
      months: '',
      animals: 0,
      carbon: 0,
      forest: 0,
      grain: 0,
      water: 0
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.runFormula = this.runFormula.bind(this);
  }

  handleInputs(event, inputName) {
    this.setState({
      [inputName]: event.target.value
    });
  }

  // runFormula() {
  //   this.setState({
  //     animals: {this.state.years * 365},// input value * formula,
  //     carbon: {this.state.years * 7,436},// input value * formula,
  //     forest: {this.state.years * 10,957},// input value * formula,
  //     grain: {this.state.years * 16,436},// input value * formula,
  //     water: {this.state.years * 401,766}// input value * formula
  //   });
  // }

  render() {
    return (
      <div>
        <select value={this.state.activity} onChange={(event)=> this.handleInputs(event, 'activity')}>
          <option>Sedentary</option>
          <option>Slighty Active</option>
          <option>Athlete</option>
        </select>
        <select value={this.state.diet} onChange={(event)=> this.handleInputs(event, 'diet')}>
          <option>Meat Eater</option>
          <option>Pescatarian</option>
          <option>Vegetarian</option>
          <option>Vegan</option>
        </select>
        <input type="number" placeholder="Years" value={this.state.years} onChange={(event)=> this.handleInputs(event, 'years')} />
        <input type="number" placeholder="Months" value={this.state.months} onChange={(event)=> this.handleInputs(event, 'months')} />
      </div>
    );
  }
}

export default Input;
