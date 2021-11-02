import React, { useState } from 'react';
import './ItemCount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({data, addsCount = 0}) => {
    const [counterItem, setCounterItem] = useState(addsCount);
    const [stock, setStock] = useState(data.stock-addsCount);

    const handleDecrement = () =>{
        if(counterItem > 0){
            setCounterItem(counterItem-1);
            setStock(stock+1);
        } else {
            setCounterItem(counterItem);
            setStock(stock);
        }
    }

    const handleIncrement = () =>{
        if(stock > 0){
            setCounterItem(counterItem+1);
            setStock(stock-1);
        } else{
            setCounterItem(counterItem);
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
                <p className="itemCount__value">{counterItem}</p>

                <div className="itemCount__icon">
                    <FontAwesomeIcon icon={faPlus} onClick={handleIncrement}/>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
