import React, {useState, useEffect} from 'react';
import './ItemList.css';
import datajson from '../../datosjson/datos.json';
import Item from '../item/Item';

const ItemList = () => {

    const [datos, setDatos] = useState([]);

    useEffect(()=>{ 
        setTimeout(()=>{
            setDatos(datajson);
        }, 2000)
    }, []);

    return (
        <>
            <div className="itemList container">
                {
                    datos.map((data)=>(
                        <Item data={data} key={data.id}/>
                    )
                    )
                }
            </div>
        </>
    )
}

export default ItemList
