import React, { useState } from 'react';
import './App.css';
import Ingredients from './Ingredients/ingredients';

const App: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const updateTotalPrice = (newTotalPrice: number) => {
    setTotalPrice(newTotalPrice);
  };

  return (
    <div className="App">
      <Ingredients updateTotalPrice={updateTotalPrice} />
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
          <div className="Price">Price: {totalPrice}</div>
        </div>
      </fieldset>
    </div>
  );
};

export default App;
