
import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';

const CardPizza = ({ name, price, ingredients, img }) => {
   return (
      <div className="card" style={{ width: '35rem' }}>
         <img src={img} className="card-img-top" alt={name} />
         <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Ingredientes: {ingredients.join(', ')}</p>
            <p className="card-text">Precio: {formatCurrency(price)}</p>
            <div className="d-flex gap-2">
            <button className="btn btn-primary">
            Ver más
          </button>
          <button className="btn btn-secondary">
            Añadir al carrito
          </button>
          </div>
         </div>
      </div>
   );
};

export default CardPizza;
