import React, {useContext} from 'react';
import { CartContext } from '../cartcontext/CartContext';
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
    const [items, setItems] = useContext(CartContext);
    return (
        <div className="cart">
            <div className="cart-icon">
                <FontAwesomeIcon icon={faShoppingBag}/>
                <div className="shop">{items.length}</div>
            </div>
            <div className="cart-icon">
                <FontAwesomeIcon icon={faHeart}/>
            </div>
        </div>
    )
}

export default CartWidget
