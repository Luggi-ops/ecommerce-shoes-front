import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../item/Item';
import { useParams } from 'react-router-dom';
//firestore
import { db } from '../../firebaseconfig';
import { getDocs, collection } from '@firebase/firestore';

const ItemList = () => {

    const {category} = useParams();
    const [data, setData] = useState([]);
    const categoryName = category;

    useEffect(()=>{ 
        const docs = [];
        const getDataFirestore = async () =>{
            const items = await getDocs(collection(db, 'Products'));
            items.forEach(doc => {
                docs.push({...doc.data(), id: doc.id})
            })
            setData(docs)

            if(categoryName === undefined){
                setData(docs)
            } else{
                setData(docs.filter(data => data.category === category))
            }
        }

        getDataFirestore();

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
