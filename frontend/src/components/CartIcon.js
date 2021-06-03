import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import cart from '../img/cart.png';
import './CartIcon.css';

export default function CartIcon() {

    const { itemCount } = useContext(CartContext);

    return (
        <div className='CartIcon'>
            <img className='cart-img' src={cart} alt='cart' />
            { itemCount > 0 && <div className='cart-count'>{itemCount}</div> } 
        </div>
    )
}
