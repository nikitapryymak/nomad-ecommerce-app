import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import './Nav.css';

function Nav() {
    return (
        <div className='Nav'>
            <div className='nav-content'>
                
                <div className="logo">
                    <Link to='/'>NOMAD</Link>
                </div>
                <div className="links">
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/cart'><CartIcon /></Link>
                </div>

            </div>
        </div>
    )
}

export default React.memo(Nav);