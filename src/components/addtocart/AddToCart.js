import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import './AddToCart.css';

const AddToCart = () => {
    return (
        <div className="addToCart">
            <FontAwesomeIcon icon={faShoppingCart} className="add__icon"/>
            <p>Agregar al carrito</p>
        </div>
    )
}

export default AddToCart;