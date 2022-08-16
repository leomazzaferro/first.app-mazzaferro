import { createContext , useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({children}) => {
    const [ cart , setCart ] = useState([]);
    console.log(cart)
    
    const isInCart = () => {}

    const removeItem = (id) => {
        const cartDraft = cart.filter ((item) => item.id !== id);
        setCart(cartDraft)
    }

    const cleanCart = () => {
        setCart([])
    }

    const addToCart = (item, quantityToAdd) => {
        console.log({item, quantityToAdd})
        if (cart.length === 0) {
            const itemToAdd = {
                ...item,
                quantity: quantityToAdd,
            }
            
            setCart([...cart, itemToAdd])
            return
        }

        const itemDuplicateIndex = cart.findIndex((itemInTheCart) => itemInTheCart.id === item.id)

        if (itemDuplicateIndex >= 0) {
            const itemToUpdate = {
                ...item,
                quantity: cart[itemDuplicateIndex].quantity + quantityToAdd
            }
            const cartDraft = [...cart]
            cartDraft[itemDuplicateIndex] = itemToUpdate
            setCart(cartDraft)
            } else {
            const itemToAdd = {
                ...item,
                quantity: quantityToAdd
            }
            const cartDraft = [...cart, itemToAdd]
            setCart(cartDraft)
        }
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