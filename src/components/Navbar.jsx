// src/components/Navbar.jsx
import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';

const Navbar = () => {
   const total = 25000;
   const token = false;

   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 m-0">
          <div className="container-fluid">
         <a className="navbar-brand" href="/">🍕 Home</a>
         <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
               {token ? (
                  <>
                     <li className="nav-item">
                        <a className="nav-link" href="/profile">🔓 Profile</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="/logout">🔒 Logout</a>
                     </li>
                  </>
               ) : (
                  <>
                     <li className="nav-item">
                        <a className="nav-link" href="/login">🔐 Login</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="/register">🔐 Register</a>
                     </li>
                  </>
               )}
            </ul>
            </div>
            <div className="d-flex">
            <button className="btn btn-primary">
               🛒 Total: {formatCurrency(total)}
            </button>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
