import React from 'react';
import Meat from '../Assets/Meat.png';
import Bacon from '../Assets/Bacon.png';
import Cheese from '../Assets/Cheese.png';
import Salad from '../Assets/Salad.png';

const Ingredients = () => {
  return (
      <div className="Ingredients">
        <div className="MeatPic">
          <img className="img" src={Meat} alt="Meat" width="40px"  />
          Meat
          <p className="Sum_Ingredients">x1</p>
          <button className="Delete">Delete</button>
        </div>
        <div className="CheesePic">
          <img className="img" src={Cheese} alt="Cheese" width="40px" />
          Cheese
          <p className="Sum_Ingredients">x1</p>
          <button className="Delete">Delete</button>
        </div>
        <div className="SaladPic">
          <img className="img" src={Salad} alt="Salad" width="40px" />
          Salad
          <p className="Sum_Ingredients">x1</p>
          <button className="Delete">Delete</button>
        </div>
        <div className="BaconPic">
          <img className="img" src={Bacon} alt="Bacon" width="40px" />
          Bacon
          <p className="Sum_Ingredients">x1</p>
          <button className="Delete">Delete</button>
        </div>
      </div>
  );
};

export default Ingredients;