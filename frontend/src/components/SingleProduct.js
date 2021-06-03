import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import { CartContext } from "../contexts/CartContext";
import { ProductsContext } from "../contexts/ProductsContext";
import { isInCart } from "../helpers";
import './SingleProduct.css';

export default function SingleProduct() {

    const { id } = useParams(); // string
    const { products } = useContext(ProductsContext);
    const { cartItems, addItem, increaseQty } = useContext(CartContext);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = products.filter(product => product.id === Number(id)); // returns arr
        setProduct(foundProduct[0]);
    }, [products, id])

    return product && (
        <div className='SingleProduct'>
            <div className="content">
                <img src={product.imgURL} alt="product" />
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <h2>${product.price}</h2>

                    { isInCart(product, cartItems)  
                        ? <button onClick={() => increaseQty(product)} className='add-cart-btn'>
                            ADD MORE</button>
                        : <button onClick={() => addItem(product)} className='add-cart-btn'>
                            ADD TO CART</button> }
                    
                    <button className='checkout-btn'>PROCEED TO CHECKOUT</button>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}
