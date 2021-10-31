import React from 'react'
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';

const CartWidget = ({cartCount}) => {
    return (
        <div className="cart">
            <div className="cart-icon">
                <FontAwesomeIcon icon={faShoppingBag}/>
                <div className="shop">{cartCount}</div>
            </div>
            <div className="cart-icon">
                <FontAwesomeIcon icon={faHeart}/>
            </div>
        </div>
    )
}

export default CartWidget
