
import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from './pizzas';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="pizza-list">
        {Array.isArray(pizzas) && pizzas.length > 0 ? (
          pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              desc={pizza.desc}
            />
          ))
        ) : (
          <p>No hay pizzas disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
