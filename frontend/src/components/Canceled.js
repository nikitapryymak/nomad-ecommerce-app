import { useHistory } from "react-router";
import './StripeOutcome.css';

export default function Canceled() {

    const history = useHistory();

    function handleClick() {
        history.push('/shop');
    }

    return (
        <div className='outcome-container'>
            <h1>Payment proccessing failed.</h1>
            <p>We were unable to proccess your payment.</p>
            <button onClick={handleClick}>Continue Shopping</button>
        </div>
    )
}
