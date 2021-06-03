import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';
import './CartPage.css';

export default function CartPage() {

    const { cartItems, itemCount, total, clearCart } = useContext(CartContext);

    return (
        <div className='CartPage'>
            <h1>Cart <span>({itemCount} {itemCount > 1 ? 'items' : 'item'})</span></h1>

            { cartItems.length > 0 ? 
             <div className="cart-items-container">

                { cartItems.map(item => <CartItem item={item} key={item.id} />) }

                <div className="checkout-info">
                    <button onClick={() => clearCart()} className='clear-cart-btn'>Clear Cart</button>
                    <h1 className='cart-total'>Total: <span className='total'>${total}</span></h1>
                    <Link to='/checkout'><button className='checkout-btn'>Continue to Checkout</button></Link>
                </div>

            </div>
            : <p>No items in cart.</p> }
            
        </div>
    )
}
