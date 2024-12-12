
import React from 'react';

const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className="card-pizza">
      <img src={img} alt={name} className="pizza-image" />
      <h2>{name}</h2>
      <p>{desc}</p>
      <h3>Precio: ${price}</h3>
      <h4>Ingredientes:</h4>
      <ul>
        {Array.isArray(ingredients) && ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
        ) : (
          <li>No hay ingredientes disponibles.</li>
        )}
      </ul>
    </div>
  );
};

export default CardPizza;
