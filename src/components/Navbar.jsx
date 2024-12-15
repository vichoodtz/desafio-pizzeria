import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';


const Navbar = () => {
   const { calculateTotal } = useContext(CartContext);
   const { token, logout } = useContext(UserContext);
  const total = calculateTotal();


   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 m-0">
          <div className="container-fluid">
          <Link className="navbar-brand" to="/">🍕 Home</Link>
         <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
               {token ? (
                  <>
                     <li className="nav-item">
                     <Link className="nav-link" to="/profile">🔓 Profile</Link>
                     </li>
                     <li className="nav-item">
                     <button className="nav-link btn btn-link" onClick={logout}>🔒 Logout</button>
                     </li>
                  </>
               ) : (
                  <>
                     <li className="nav-item">
                     <Link className="nav-link" to="/login">🔐 Login</Link>
                     </li>
                     <li className="nav-item">
                     <Link className="nav-link" to="/register">🔐 Register</Link>
                     </li>
                  </>
               )}
            </ul>
            </div>
            <div className="d-flex">
            <Link to="/cart" className="btn btn-primary">
            🛒 Total: {formatCurrency(total)}
          </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
