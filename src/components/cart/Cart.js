import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../cartcontext/CartContext';
import FormCart from '../formCart/FormCart';
import FormCardCredit from '../formCardCredit/FormCardCredit';
import './Cart.css';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import {formatNumber} from '../../helpers/formatNumber';
import {db} from '../../firebaseconfig';
import { collection, getDocs, addDoc } from '@firebase/firestore';


const Cart = () => {
    const [order, setOrder] = useState({orderDate: {}, orderConfirm: false});
    const [orderId, setOrderId] = useState('')
    const [items, setItems, removeItem, itemInCart, setCountItems, countItems, getTotal, clearItems] = useContext(CartContext);
    const [siguiente, setSiguiente] = useState(false);
    const [card, setCard] = useState(false);

    const rmToCart = (e) =>{
        const id = e.target.closest('.cart-item-trash').getAttribute('data-id');
        removeItem(id);
    }

    const handleOrder = async () =>{
        setOrder({orderDate: {...order.orderDate}, orderConfirm: true});
        const docOrder = await addDoc(collection(db, 'Orders'), {...items, order: order.orderDate});
        setOrderId(docOrder.id);
        clearItems();
    }

    const handleSiguiente = () =>{
        setSiguiente(!siguiente)
    }

    const handlePagar = () =>{
        setCard(!card)
    }

    return (
        <>
            {

            order.orderConfirm?
            <div className="cart-container order-container">
                <img src="/img/order-icon.gif" className="order-icon"/>
                <h2>Muchas gracias por tu compra!</h2>
                <p>Comprobante: <span>{orderId}</span></p>
            </div>
            :
            <section className="cart-container">
                <div className="cart-pasarela">
                    <div className="cart-products cart-products--active">
                        <div className="cart-header">
                            <div className="cart-item-header">
                                <h4>Producto</h4>
                            </div>
                            <div className="cart-item-header">
                                <h4>Precio</h4>
                            </div>
                            <div className="cart-item-header">
                                <h4>Cantidad</h4>
                            </div>
                            <div className="cart-item-header">
                                <h4>Total</h4>
                            </div>
                            <div className="cart-item-header">
                            </div>
                        </div>
                        <div className="cart-list-products">
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
                        </div>
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
                                {
                                    items.length > 0?

                                    <div className="btn" onClick={handleSiguiente}>
                                        Siguiente
                                    </div>
                                    :
                                    null
                                }
                                
                            </div>
                        </div>
                    </div>

                    <div className={siguiente? "cart-form cart-form--active" : "cart-form"}>
                        <FormCart setOrder={setOrder} order={order} handlePagar={handlePagar}/>
                    </div>

                    <div className={card? "cart-card cart-card--active" : "cart-card"}>
                        <FormCardCredit handleOrder={handleOrder}/>
                    </div>
                </div>

                <div className="dotsPasarelaContainer">
                    <div className={siguiente? "dotPasarela dotPasarela--active dotPasarela--next" : "dotPasarela dotPasarela--active"}>
                        <FontAwesomeIcon icon={faCircle} className="faCreditCard" />
                    </div>
                    <div className={card? "dotPasarela dotPasarela--next dotPasarela--active" : "dotPasarela"}>
                        <FontAwesomeIcon icon={faCircle} className="faCreditCard" />
                    </div>
                    <div className={order.orderConfirm? "dotPasarela dotPasarela--next dotPasarela--active" : "dotPasarela"}>
                        <FontAwesomeIcon icon={faCircle} className="faCreditCard"/>
                    </div>
                </div>
            </section>
            }
        </>
    )
}

export default Cart
