import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import CartWidget from '../cartwidget/CartWidget';

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

                <CartWidget cartCount={0}/>
            </header>
        </>
    )
}

export default Navbar
