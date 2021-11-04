import React, {useContext, useState} from 'react';
import { CartContext } from '../cartcontext/CartContext';
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {formatNumber} from '../../helpers/formatNumber';

const CartWidget = () => {
    const [items, setItems, removeItem, itemInCart, setCountItems, countItems, getTotal] = useContext(CartContext);
    const [cartOpen, setCartOpen] = useState(false);
    const rmToCart = (e) =>{
        const id = e.target.closest('.cart-item-trash').getAttribute('data-id');
        removeItem(id);
    }

    const handleCartClick = () =>{
        setCartOpen(!cartOpen);
    }

    return (
        <div className="cart">
            <div className="cart-icon" onClick={handleCartClick}>
                <FontAwesomeIcon icon={faShoppingBag}/>
                <div className="shop">{countItems}</div>
            </div>
            <div className="cart-icon" >
                <FontAwesomeIcon icon={faHeart} />
            </div>

            <section className="cart-widget" style={cartOpen? {clipPath: "circle(141.4% at 100% 0)", transition: "all .5s"} : {clipPath: "circle(0% at 100% 0)"}}>
                <div className="cart-header">
                    <div className="cart-item-header">
                        <h4>Product</h4>
                    </div>
                    <div className="cart-item-header">
                        <h4>Price</h4>
                    </div>
                    <div className="cart-item-header">
                        <h4>Count</h4>
                    </div>
                    <div className="cart-item-header">
                        <h4>Total</h4>
                    </div>
                    <div className="cart-item-header">
                    </div>
                </div>
                <div className="cart-item-container">
                    {
                        items.map(item => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="cart-item-name">
                                    <p>{item.name}</p>
                                    <p>$ {formatNumber(item.price)}</p>
                                </div>
                                <div className="cart-item-count">
                                    <p>x {item.count}</p>
                                </div>
                                <div className="cart-item-price">
                                    <p>$ {formatNumber(item.price * item.count)}</p>
                                </div>
                                <div className="cart-item-trash" onClick={rmToCart} data-id={item.id}>
                                <FontAwesomeIcon icon={faTrashAlt} className="icon-trash" />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="cart-footer">
                    <div className="cart-item-footer">
                        
                    </div>
                    <div className="cart-item-footer">
                        
                    </div>
                    <div className="cart-item-footer">
                        
                    </div>
                    <div className="cart-item-footer">
                        <h4 className="cart-item-total">$ {formatNumber(getTotal())}</h4>
                    </div>
                    <div className="cart-item-footer">
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default CartWidget
