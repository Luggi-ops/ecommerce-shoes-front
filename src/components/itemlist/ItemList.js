import React, {useState, useEffect} from 'react';
import './ItemList.css';
import datajson from '../../datosjson/datos.json';
import Item from '../item/Item';
import { useParams } from 'react-router-dom';

const ItemList = ({match}) => {

    const [data, setData] = useState([]);
    const [category, setCategory] = useState(useParams().category);

    useEffect(()=>{ 
        setTimeout(()=>{
            if(category == undefined){
                setData(datajson);
            }else{
                setData(datajson.filter(data => data.category == category));
            }
            
        }, 2000)

    }, [category]);

    return (
        <>
            <div className="itemList container">
                {
                    data.map((data)=>(
                        <Item data={data} key={data.id}/>
                    )
                    )
                }
            </div>
        </>
    )
}

export default ItemList
