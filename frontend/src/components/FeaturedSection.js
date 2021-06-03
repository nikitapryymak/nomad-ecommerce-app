import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import Product from './Product';
import { Link } from 'react-router-dom';
import './FeaturedSection.css';

export default function FeaturedSection() {

    const { products } = useContext(ProductsContext);

    return (
        <div className='FeaturedSection'>
            <h1>Featured Collection</h1>
            <div className="products-container">
                { products.map(product => {
                    return (product.id <= 4) ?
                    <Product product={product} key={product.id} />
                    : ''
                    })
                }
            </div>
            <Link to='/shop'>
                <button className='view-products-btn'>View All Products</button></Link>
        </div>
    )
}
