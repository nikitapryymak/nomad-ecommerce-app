import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './CartItem.css';
import { MinusCircleIcon, PlusCircleIcon } from './Icons';

export default function CartItem({ item }) {

    const { increaseQty, decreaseQty, removeItem } = useContext(CartContext);

    function handleClick() {
        if (item.quantity > 1) {
            decreaseQty(item);
        }
    }

    return (
        <div className='CartItem'>

            <div className="left">
                <img src={item.imgURL} alt="item" />
                <div className="title-price">
                    <h2>{item.title}</h2>
                    <h3>${item.price}</h3>
                    <h4 onClick={() => removeItem(item)}>Remove Item</h4>
                </div>
            </div>

            <div className="right">
                <div onClick={() => increaseQty(item)}><PlusCircleIcon width='1.75rem' /></div>
                <p>{item.quantity}</p>
                <div onClick={handleClick}><MinusCircleIcon width='1.75rem' /></div>
                
            </div>
        </div>
    )
}
