import React, { createContext , useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({children}) => {
    const [ cart , setCart ] = useState();
    console.log(cart)
    
    const isInCart = () => {}

    const cleanCart = () => {
        setCart([])
    }
    
    return (
        <CartContext.Provider
            value={{ 
                cart, isInCart, cleanCart
            }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;