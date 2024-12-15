import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Cart from './pages/Cart.jsx'
import Pizza from './pages/Pizzas.jsx'
import Profile from './pages/Profile.jsx'
import NotFound from './pages/NotFound.jsx'
import { CartContext } from './context/CartContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { UserProvider, UserContext } from './context/UserContext.jsx'
import './index.css'

const ProtectedRoute = ({ children }) => {
  const { token } = React.useContext(UserContext);
  return token ? children : <Navigate to="/login" />;
};

const AuthRoute = ({ children }) => {
  const { token } = React.useContext(UserContext);
  return token ? <Navigate to="/" /> : children;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
       <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="register" element={<AuthRoute><Register /></AuthRoute>} />
          <Route path="login" element={<AuthRoute><Login /></AuthRoute>} />
          <Route path="cart" element={<Cart />} />
          <Route path="pizza/p001" element={<Pizza />} />
          <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
    </CartProvider>
    </UserProvider>
  </React.StrictMode>,
)