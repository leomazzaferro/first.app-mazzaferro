import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const isInCart = (id) => (cart.find((item) => item.id === id) ? true : false);

  const removeItem = (id) => {
    const cartDraft = cart.filter((item) => item.id !== id);
    setCart(cartDraft);
  };

  const cleanCart = () => {
    setCart([]);
  };

  const addToCart = (item, quantityToAdd) => {
    let cartDraft = [];
    let product = cart.find((itemId) => itemId.id === item.id);
    if (product) {
      product.quantity += quantityToAdd;
      cartDraft = [...cart];
    } else {
      let product = {
        ...item,
        quantity: quantityToAdd,
      };
      cartDraft = [...cart, product];
    }
    setCart(cartDraft);
  };

  const totalPrice = () => {
    return cart.reduce((acc, product) => acc + product.quantity * product.price, 0)
  };

  const totalProducts = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0)
  };

  const valueToShare = {
    cart,
    isInCart,
    addToCart,
    cleanCart,
    removeItem,
    totalPrice,
    totalProducts,
  };

  return (
    <CartContext.Provider value={valueToShare}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
