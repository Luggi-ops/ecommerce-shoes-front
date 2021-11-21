import React, {useState, useEffect, useContext} from 'react';
import { CartContext } from '../cartcontext/CartContext';
import { useParams, Link } from 'react-router-dom';
import AddToCart from '../addtocart/AddToCart';
import ItemCount from '../itemcount/ItemCount';
import {formatNumber} from '../../helpers/formatNumber';
//css
import './ItemDetail.css';

//iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

//firestore
import { db } from '../../firebaseconfig';
import { getDocs, collection } from '@firebase/firestore';

const ItemDetail = () => {
    const [items, setItems, removeItem, itemInCart, setCountItems, countItems] = useContext(CartContext);
    const [data, setData] = useState({});
    const [item, setItem] = useState({});
    const [count, setCount] = useState(1);
    const name = useParams().name;
    
    useEffect(()=>{
        const docs = []
        const getDataFirestore = async () => {
            const items = await getDocs(collection(db, 'Products'));
            items.forEach(doc => {
                docs.push({...doc.data(), id: doc.id})
            })

            setData(docs.filter(data => data.name.toLowerCase().replace(/ /g,"-") === name)[0])
        }

        getDataFirestore();

        setItem(getDataProduct(data))

    }, [])

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
                                <p className="price">${formatNumber(data.price)}</p>
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
                                    itemInCart(data) ? <Link to="/carrito" className="goToCart">Finalizar compra.</Link> : null
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
