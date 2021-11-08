import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../cartcontext/CartContext';
import './Cart.css';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

import {formatNumber} from '../../helpers/formatNumber';
import {db} from '../../firebaseconfig';
import { collection, getDocs, addDoc } from '@firebase/firestore';

const Cart = () => {
    const [order, setOrder] = useState(false);
    const [orderId, setOrderId] = useState('')
    const [items, setItems, removeItem, itemInCart, setCountItems, countItems, getTotal, clearItems] = useContext(CartContext);

    const rmToCart = (e) =>{
        const id = e.target.closest('.cart-item-trash').getAttribute('data-id');
        removeItem(id);
    }

    const handleOrder = async () =>{
        const docOrder = await addDoc(collection(db, 'Orders'), {items});
        setOrder(true);
        setOrderId(docOrder.id);
        clearItems();
    }

    return (
        <>
            {

            order?
            <div className="cart-container order-container">
                <img src="/img/order-icon.gif" className="order-icon"/>
                <h2>Muchas gracias por tu compra!</h2>
                <p>Comprobante: <span>{orderId}</span></p>
            </div>
            :
            <section className="cart-container">
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
                                <p>{item.count}</p>
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
                <div className="cart-footer">
                    <div className="cart-item-footer">
                        
                    </div>
                    <div className="cart-item-footer">
                        
                    </div>
                    <div className="cart-item-footer">
                        
                    </div>
                    <div className="cart-item-footer">
                        <h4>Total: $ {formatNumber(getTotal())}</h4>
                    </div>
                    <div className="cart-item-footer">
                        <div className="btn" onClick={handleOrder}>
                            <FontAwesomeIcon icon={faCreditCard} className="faCreditCard"/>
                            Order
                        </div>
                    </div>
                </div>
            </section>
            }
        </>
    )
}

export default Cart
