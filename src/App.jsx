
import './App.css'
import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';

const App = () => {
   return (
      <div className="d-flex flex-column min-vh-100">
         <Navbar />
         <Home />
         <Footer/>
      </div>
   );
};



export default App
