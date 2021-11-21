import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import CartWidget from '../cartwidget/CartWidget';

const Navbar = () => {
    return (
        <>
            <header className="header">
                <Link to="/" className="header-logo">Shoes!</Link>

                <nav>
                    <ul className="nav">
                        <li><Link to="/" className="nav-link">Inicio</Link></li>
                        <li className="category">
                            <p className="nav-link">Categorias</p>
                            <ul className="submenu">
                                <li><Link to="/producto/nike" className="nav-link">Nike</Link></li>
                                <li><Link to="/producto/vans" className="nav-link">Vans</Link></li>
                            </ul>
                        </li>
                    </ul> 
                </nav>

                <CartWidget />
            </header>
        </>
    )
}

export default Navbar
