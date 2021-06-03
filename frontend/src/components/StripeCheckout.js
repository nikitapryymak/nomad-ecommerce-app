import { useStripe } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { fetchFromAPI } from '../helpers';
import './Checkout.css';
import LoadingCircle from './LoadingCircle';

export default function StripeCheckout() {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const { cartItems } = useContext(CartContext);
    const stripe = useStripe();

    async function handleGuestCheckout(e) {
      e.preventDefault();
      setLoading(true);
      const line_items = cartItems.map(item => {
        return {
          quantity: item.quantity,
          price_data: {
            currency: 'usd',
            unit_amount: item.price * 100, // amount is in cents (stripe converts)
            product_data: {
              name: item.title,
              description: item.description,
              images: [item.imgURL], 
            }
          }
        }
      });
  
      const response = await fetchFromAPI('create-checkout-session', {
        body: { line_items, customer_email: email }
      });
  
      const { sessionId } = response;
      const { error } = await stripe.redirectToCheckout({
        sessionId
      });
      
      if (error) {
        console.log(error);
        setLoading(false);
      }
    }
  
    return (
      <form onSubmit={handleGuestCheckout} className='stripe-checkout-form'>

        <input 
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
        />
        <div className="checkout-btn-container">
            <button type='submit' className={`checkout-btn ${loading && 'loading'}`} disabled={loading}>
                Checkout
            </button>
            { loading && <LoadingCircle /> }
        </div>

      </form>
    );
}