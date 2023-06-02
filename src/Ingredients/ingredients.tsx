import React, { useState } from 'react';
import Meat from '../Assets/Meat.png';
import Bacon from '../Assets/Bacon.png';
import Cheese from '../Assets/Cheese.png';
import Salad from '../Assets/Salad.png';

type IngredientsProps = {
  updateTotalPrice: (newTotalPrice: number) => void;
};

const Ingredients: React.FC<IngredientsProps> = ({ updateTotalPrice }) => {

  type Ingredient = {
    name: string;
    price: number;
    image: string;
    count: number;
    id: string;
  };

  const INGREDIENTS: Ingredient[] = [
    { name: 'Meat', price: 80, image: Meat, count: 0, id: 'meat' },
    { name: 'Cheese', price: 50, image: Cheese, count: 0, id: 'cheese' },
    { name: 'Salad', price: 10, image: Salad, count: 0, id: 'salad' },
    { name: 'Bacon', price: 60, image: Bacon, count: 0, id: 'bacon' },
  ];

  const [ingredients, setIngredients] = useState<Ingredient[]>(INGREDIENTS);
  const [totalSum, setTotalSum] = useState<number>(30);

  const handleDelete = (id: string) => {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === id) {
        setTotalSum(totalSum - ingredient.price * ingredient.count);
        return { ...ingredient, count: 0 };
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
    const deletedIngredient = ingredients.find((ingredient) => ingredient.id === id);
    if (deletedIngredient) {
      updateTotalPrice(totalSum - deletedIngredient.price * deletedIngredient.count);
    }
  };

  const handleIncrement = (id: string) => {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === id) {
        const newCount = ingredient.count + 1;
        setTotalSum(totalSum + ingredient.price);
        return { ...ingredient, count: newCount };
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
    const incrementedIngredient = ingredients.find((ingredient) => ingredient.id === id);
    if (incrementedIngredient) {
      updateTotalPrice(totalSum + incrementedIngredient.price);
    }
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
