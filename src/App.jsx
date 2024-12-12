
import './App.css'
import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';

const App = () => {
   return (
      <div className="d-flex flex-column min-vh-100">
           <Navbar />
           {/* <Login /> */}
         {/*<Register/> */}
          {/*  <Home /> */}
          <Cart />
         <Footer/>
      </div>
   );
};



export default App
