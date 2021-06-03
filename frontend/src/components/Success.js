import { useContext, useEffect } from "react"
import { useHistory } from "react-router";
import { CartContext } from "../contexts/CartContext"
import './StripeOutcome.css';

export default function Success() {

    const { cartItems, clearCart } = useContext(CartContext);
    const history = useHistory();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (cartItems.length !==0) {
            clearCart();
        }
    }, [clearCart, cartItems]);

    function handleClick() {
        history.push('/shop');
    }

    return (
        <div className='outcome-container'>
            <h1>Thank you for your order.</h1>
            <p>We will send you a confirmation email shortly.</p>
            <button onClick={handleClick}>Continue Shopping</button>
        </div>
    )
}
