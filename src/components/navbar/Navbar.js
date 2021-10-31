import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <header className="header">
                <Link to="/" className="header-logo">Shoes</Link>

                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/catalog" className="nav-link">Catalog</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/reviews" className="nav-link">Reviews</Link>
                </nav>

                <div className="cart">
                    <div className="cart-icon">
                        <FontAwesomeIcon icon={faShoppingBag}/>
                    </div>
                    <div className="cart-icon">
                        <FontAwesomeIcon icon={faHeart}/>
                    </div>
                    
                </div>
            </header>
        </>
    )
}

export default Navbar
