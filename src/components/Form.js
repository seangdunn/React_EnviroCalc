import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  render() {
    return (
      <form>
        <select name="activity">
          <option>Sedentary</option>
          <option>Slighty Active</option>
          <option>Athlete</option>
        </select>
        <select name="diet">
          <option>Meat Eater</option>
          <option>Pescatarian</option>
          <option>Vegetarian</option>
          <option>Vegan</option>
        </select>
        <input name="years" type="number" placeholder="Years" />
        <input name="months" type="number" placeholder="Months" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
