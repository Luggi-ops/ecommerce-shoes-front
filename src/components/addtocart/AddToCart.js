import React from 'react';
import './AddToCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import './AddToCart.css';

const AddToCart = ({handleAddToCart}) => {
    return (
        <div className="addToCart" onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faShoppingCart} className="add__icon"/>
            <p>Agregar al carrito</p>
        </div>
    )
}

export default AddToCart;