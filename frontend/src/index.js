import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import App from './App';
import CartProvider from './contexts/CartContext';
import ProductsProvider from './contexts/ProductsContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import './index.css';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
// null or resolved stripe object 

ReactDOM.render(
  <Router>
    <ProductsProvider>
      <CartProvider>
        <Elements stripe={stripePromise}>

          <App />

        </Elements>
      </CartProvider>
    </ProductsProvider>
  </Router>,
  document.getElementById('root')
);