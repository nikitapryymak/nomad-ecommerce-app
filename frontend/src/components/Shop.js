import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import Product from "./Product";
import './FeaturedSection.css';

export default function Shop() {

    const { products } = useContext(ProductsContext);

    return (
        <div className='FeaturedSection Shop'>
            <h1>Shop</h1>
            <div className="products-container">
                { products.map(product => 
                    <Product product={product} key={product.id} />
                )}
            </div>
        </div>
    )
}
