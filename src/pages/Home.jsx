import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { CartContext } from '../context/CartContext';


const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext);


  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="container">
      <div className="row">
        {Array.isArray(pizzas) && pizzas.length > 0 ? (
          pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4">
            <CardPizza
            id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              desc={pizza.desc}
            />
             <button onClick={() => addToCart(pizza)}>Añadir al carrito</button>
             </div>
          ))
        ) : (
          <p>No hay pizzas disponibles.</p>
        )}
         </div>
      </div>
    </div>
  );
};

export default Home;
