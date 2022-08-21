import React , { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCart from './ItemCart';


const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext)

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
        {cart.map (product => <ItemCart key={product.id} product={product} />)}
      </div>
      <div>
        <p>Precio Total:{totalPrice()}</p>
      </div>
    </div>
  )
}

export default Cart