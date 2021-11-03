import React, {useState, useEffect, useContext} from 'react';
import { CartContext } from '../cartcontext/CartContext';
import { useParams, Link } from 'react-router-dom';
import datajson from '../../datosjson/datos.json';
import AddToCart from '../addtocart/AddToCart';
import ItemCount from '../itemcount/ItemCount';
import './ItemDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ItemDetail = () => {
    const [items, setItems, removeItem, itemInCart, setCountItems, countItems] = useContext(CartContext);
    const [data, setData] = useState({});
    const [item, setItem] = useState({});
    const [count, setCount] = useState(1);
    const name = useParams().name;
    
    useEffect(()=>{
        setTimeout(() => {
            setData(datajson.filter(data => data.name.toLowerCase().replace(/ /g,"-") === name)[0]);
            
        }, 2000)

        setItem(getDataProduct(data))

    }, [data])

    const handleAddToCart = () => {
        setCountItems(countItems+count)
        data.count = count;
        setItems([...items, data]);
    }

    const rmToCart = () =>{
        setCountItems(countItems-count)
        removeItem(data.id);
    }

    const getDataProduct = (data) =>{
        const productData = {
            id: data.id,
            name: data.name,
            img: data.img,
            price: data.price,
            count: count
        }

        return productData;
    }


    return (
        <div className="itemDetailContainer">
            {
                JSON.stringify(data) != '{}'?
                    <section className="itemDetail">
                        <div className="itemDetail-img">
                            <img src={data.img} alt={data.name}/>
                        </div>
                        <div className="itemDetail-content">
                            <div className="itemDetail-title">
                                <h2>{data.name}</h2>
                                <p>Id: {data.id}</p>
                            </div>
                            <div>
                                {
                                    data.review.map((star)=>(
                                        <FontAwesomeIcon icon={faStar} index={star} className="icon-start"/>
                                    ))
                                }
                            </div>
                            <div className="itemDetail-price">
                                <p className="price">${data.price}</p>
                            </div>
                            <div className="itemDetail-color_container">
                                <p>Color: </p><span className="itemDetail-color" style={{backgroundColor: `${data.color}`}}></span>
                            </div>
                            <div>
                                <h3>Talles</h3>
                                <ul className="itemDetail-talles">
                                    {
                                        data.talles.map((talle) => (
                                            <li>{talle}</li>
                                        ))
                                    }
                                </ul>
                                
                            </div>
                            <div>
                                <p>{data.detail}</p>
                            </div>
                            
                            {
                                itemInCart(data) ?

                                <FontAwesomeIcon icon={faTrashAlt} className="icon-trash" onClick={rmToCart}/>

                                :

                                <div className="itemDetail-btn">
                                    <div className="itemDetail-btnCount">
                                        <ItemCount data={data} count={count} setCount={setCount}/>
                                    </div>
                                    <AddToCart className="itemDetail-btnCart" handleAddToCart={handleAddToCart}/>
                                </div>
                            }

                            <div>
                                {
                                    itemInCart(data) ? <Link to="/cart" className="goToCart">Go to cart.</Link> : null
                                }
                                
                            </div>
                        </div>
                    </section>
                :
                    null
            }
        </div>
    )
}

export default ItemDetail
