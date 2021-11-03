import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [countItems, setCountItems] = useState(0);

    const removeItem = (itemId) =>{
        setCountItems(countItems - items.filter(item => item.id == itemId)[0].count);
        setItems(items.filter(item => item.id != itemId));
        
    }

    const itemInCart = (item) =>{
        return items.includes(item);
    }

    const clearItems = () =>{
        setItems([])
    }


    return(
        <CartContext.Provider value={[items, setItems, removeItem, itemInCart, setCountItems, countItems]}> 
            {children}
        </CartContext.Provider>
    )
}