import React from 'react';
import './App.css';
import Ingredients from "./Ingredients/ingredients";


const App = () => (
  <div className="App">
    <Ingredients></Ingredients>
    <fieldset>
      <legend>Burger</legend>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        <div className="Salad"></div>
        <div className="Cheese"></div>
        <div className="Meat"></div>
        <div className="BreadBottom"></div>
        <div className="Price">Price:</div>
      </div>
    </fieldset>
  </div>
);

export default App;
