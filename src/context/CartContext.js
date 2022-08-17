import { createContext , useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({children}) => {
    const [ cart , setCart ] = useState([]);
    console.log(cart)
    
    const isInCart = (id) => cart.find(item => item.id === id) ? true : false;

    const removeItem = (id) => {
        const cartDraft = cart.filter ((item) => item.id !== id);
        setCart(cartDraft)
    }

    const cleanCart = () => {
        setCart([])
    }

    const addToCart = (item, quantityToAdd) => {
        let cartDraft = []
        let product = cart.find(itemId => itemId.id === item.id)
        if (product) {
            product.quantity += quantityToAdd;
            cartDraft = [...cart];
        } else {
            let product = {...item, quantity: quantityToAdd};
            cartDraft = [...cart, product]
        }
        setCart(cartDraft)
    }
    
    const valueToShare = {
        cart,
        cantInCart: cart.length,
        isInCart,
        addToCart,
        cleanCart,
        removeItem,
    }
    
    return (
        <CartContext.Provider value={ valueToShare }>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;