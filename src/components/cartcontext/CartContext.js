import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [countItems, setCountItems] = useState(0);

    const removeItem = (itemId) =>{
        setCountItems(countItems - items.filter(item => item.id === itemId)[0].count);
        setItems(items.filter(item => item.id !== itemId));
        
    }

    const itemInCart = (item) =>{
        return items.includes(item);
    }

    const clearItems = () =>{
        setItems([])
        setCountItems(0)
    }

    const getTotal = () =>{
        let total = 0;
        if(items.length > 0){
            
            items.forEach(item => {
                total += item.price*item.count;
            })
        } 
        return total;
    }


    return(
        <CartContext.Provider value={[items, setItems, removeItem, itemInCart, setCountItems, countItems, getTotal, clearItems]}> 
            {children}
        </CartContext.Provider>
    )
}