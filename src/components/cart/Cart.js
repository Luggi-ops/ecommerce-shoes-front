import React, {useContext} from 'react';
import { CartContext } from '../cartcontext/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import { Link } from 'react-router-dom';


const Cart = () => {
    const [items, setItems, removeItem] = useContext(CartContext);

    const rmToCart = (e) =>{
        console.log(e)
    }

    return (
        <>
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
                        <div className="cart-item">
                            <div className="cart-item-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="cart-item-name">
                                <p>{item.name}</p>
                                <p>$ {item.price}</p>
                            </div>
                            <div className="cart-item-count">
                                <p>1</p>
                            </div>
                            <div className="cart-item-price">
                                <p>$ {item.price}</p>
                            </div>
                            <div className="cart-item-trash">
                             <FontAwesomeIcon icon={faTrashAlt} className="icon-trash" onClick={rmToCart}/>
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
                        <h4>Total</h4>
                    </div>
                    <div className="cart-item-footer">
                        <Link to="/" className="btn">
                            <FontAwesomeIcon icon={faCreditCard} className="faCreditCard"/>
                            Order
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
