import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import datajson from '../../datosjson/datos.json';
import AddToCart from '../addtocart/AddToCart';
import ItemCount from '../itemcount/ItemCount';
import './ItemDetailContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';

const ItemDetailContainer = () => {
    
    const [name, setName] = useState(useParams().name);
    const [data, setData] = useState({});
    
    useEffect(()=>{
        setTimeout(() => {
            setData(datajson.filter(data => data.name.toLowerCase().replace(/ /g,"-") === name)[0]);
        }, 2000)
    }, [])

    console.log(typeof data.review)

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
                            <div>
                                <ItemCount data={data}/>
                                <AddToCart />
                            </div>
                        </div>
                    </section>
                :
                    null
            }
        </div>
    )
}

export default ItemDetailContainer
