import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React , { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCart from './ItemCart';


const Cart = () => {
  const { cart, totalPrice, cleanCart } = useContext(CartContext)


  const sendOrder = () => {
    const newOrder = {
      buyer: {name: "leo", phone: 123456, email: "leomazza@gmail.com"},
      items: cart,
      total: totalPrice(),
    }
    const db = getFirestore();
    const orederCollection = collection(db, "orders")
    addDoc(orederCollection, newOrder)
      .then(({ id }) => console.log({ id }))
      .catch((error) => console.log(error))
  }

  if (cart.length === 0) {
    return (
      <div>
        <p>No hay productos en el carrito</p>
        <Link as={Link} to="/*" >Hacer Compras</Link>
      </div>
    )
  }
  return (
    <div>
      <div>
        <ItemCart products={cart} />
      </div>
      <div>
        <p>Precio Total:{totalPrice()}</p>
        <button onClick={cleanCart}>Vaciar Carrito</button>
        <button onClick={sendOrder}>Finalizar compra</button>
      </div>
    </div>
  )
}

export default Cart