import React, { useEffect, useState } from 'react';
import Header from './Header';
import CardPizza from './cardpizza';


const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error('Error fetching pizzas:', error));
  }, []);

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
