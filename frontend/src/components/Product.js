import { useContext } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from '../contexts/CartContext';
import { isInCart } from '../helpers';
import './Product.css';

export default function Product({ product }) {

    const { cartItems, addItem, increaseQty } = useContext(CartContext);
    const history = useHistory();

    function handleClick() {
        history.push(`/product/${product.id}`);
    }

    return (
        <div className='Product'>

            <div onClick={handleClick} className="product-img">
                <img src={product.imgURL} alt="product" />
            </div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>

            { isInCart(product, cartItems)  
                ? <button onClick={() => increaseQty(product)}>
                    ADD MORE</button>
                : <button onClick={() => addItem(product)}>
                    ADD TO CART</button> }

        </div>
    )
}