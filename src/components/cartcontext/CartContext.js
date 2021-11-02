import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const removeItem = (itemId) =>{
        setItems(items.filter(item => item.id != itemId))
    }

    const itemInCart = (item) =>{
        return items.includes(item);
    }

    return(
        <CartContext.Provider value={[items, setItems, removeItem, itemInCart]}> 
            {children}
        </CartContext.Provider>
    )
}