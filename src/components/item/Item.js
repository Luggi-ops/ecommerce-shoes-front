import React from 'react';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import ItemCount from '../itemcount/ItemCount';

const Item = ({data}) => {
    return (
        <>
            <div className="item-card">
                <div className="item-card-img">
                    <img src={data.img} alt="" />
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
                    <ItemCount data={data}/>
                </div>
            </div>
        </>
    )
}

export default Item
