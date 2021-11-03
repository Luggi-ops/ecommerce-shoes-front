import React, { useState } from 'react';
import './ItemCount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({data, count, setCount}) => {
    const [stock, setStock] = useState(data.stock-count);

    const handleDecrement = () =>{
        if(count > 0){
            setCount(count-1);
            setStock(stock+1);
        } else {
            setCount(count);
            setStock(stock);
        }
    }

    const handleIncrement = () =>{
        if(stock > 0){
            setCount(count+1);
            setStock(stock-1);
        } else{
            setCount(count);
            setStock(stock);
        } 
    }

    return (
        <div className="itemCountContainer">
            <p className="stock">Stock: {stock} disponibles</p>
            <div className="itemCount">
                
                <div className="itemCount__icon">
                    <FontAwesomeIcon icon={faMinus} onClick={handleDecrement}/>
                </div>
                <p className="itemCount__value">{count}</p>

                <div className="itemCount__icon">
                    <FontAwesomeIcon icon={faPlus} onClick={handleIncrement}/>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
