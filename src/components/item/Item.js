import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import ItemCount from '../itemcount/ItemCount';
import AddToCart from '../addtocart/AddToCart';

const Item = ({data}) => {
    const [count, setCount] = useState(1);

    return (
        <>
            <div className="item-card">
                <div className="item-card-img">
                    <Link to={`/product/${data.category}/${data.name.toLowerCase().replace(/ /g,"-")}`}>
                        <img src={data.img} alt="" />
                    </Link>
                </div>
                <div className="item-content">
                    <h3>{data.name}</h3>
                    <p>${data.price}</p>
                    <div>
                        {
                            data.review.map((star)=>(
                                <FontAwesomeIcon icon={faStar} index={star} className="icon-start"/>
                            ))
                        }
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHeart} className="icon-fav"/>
                    </div>
                    <ItemCount data={data} count={count} setCount={setCount}/>
                    <AddToCart />
                </div>
            </div>
        </>
    )
}

export default Item
