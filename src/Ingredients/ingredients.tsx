import React, {useState} from 'react';
import Meat from '../Assets/Meat.png';
import Bacon from '../Assets/Bacon.png';
import Cheese from '../Assets/Cheese.png';
import Salad from '../Assets/Salad.png';

const Ingredients = () => {

  const baseGamburgerPrise:number = 30;

  type Ingredient = {
    name: string;
    price: number;
    image: string;
    count: number;
    id: string;
  };


  const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: Meat, count:0, id: 'meat'},
    {name: 'Cheese', price: 50, image: Cheese, count:0, id: 'cheese'},
    {name: 'Salad', price: 10, image: Salad, count:0, id: 'salad'},
    {name: 'Bacon', price: 60, image: Bacon, count:0, id: 'bacon'},
  ];

  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { name: 'Meat', price: 80, image: Meat, count: 0, id: 'meat' },
    { name: 'Cheese', price: 50, image: Cheese, count: 0, id: 'cheese' },
    { name: 'Salad', price: 10, image: Salad, count: 0, id: 'salad' },
    { name: 'Bacon', price: 60, image: Bacon, count: 0, id: 'bacon' },
  ]);

  const handleDelete = (id: string) => {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === id) {
        return { ...ingredient, count: 0 };
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
  };

  const handleIncrement = (id: string) => {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === id) {
        return { ...ingredient, count: ingredient.count + 1 };
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
  };


  return (
    <fieldset>
      <legend>Ingredients</legend>
      <div className="Ingredients">
        {ingredients.map((ingredient) => (
          <div key={ingredient.id} className={`${ingredient.name}Pic`}>
            <img className="img" src={ingredient.image} alt={ingredient.name} width="40px" />
            {ingredient.name}
            <p className="Sum_Ingredients">x{ingredient.count}</p>
            <button className="Delete" onClick={() => handleDelete(ingredient.id)}>
              Delete
            </button>
            <button className="Increment" onClick={() => handleIncrement(ingredient.id)}>
              +
            </button>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Ingredients;