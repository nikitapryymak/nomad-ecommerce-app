import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import StripeCheckout from './StripeCheckout';
import './Checkout.css';

export default function Checkout() {

    const { itemCount, total } = useContext(CartContext);

    return (
        <div className="Checkout">
            <h2>Checkout Summary</h2>
            <h3>Total Items: {itemCount}</h3>
            <h3>Amount: ${total}</h3>
            <StripeCheckout />
        </div>
    );
}
