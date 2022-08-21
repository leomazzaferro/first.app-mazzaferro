import React , { useContext } from 'react'
import { CartContext } from '../context/CartContext';

function ItemCart({product}) {
  const { removeItem } = useContext(CartContext);
  
  return (

    <div>
      <img src={product.img} alt={product.name} />
      <div>
        <p>Nombre:{product.name}</p>
        <p>Cantidad:{product.quantity}</p>
        <p>Precio:{product.price}</p>
        <p>Total:{product.quantity * product.price}</p>
        <button onClick={() => removeItem(product.id)}>ELiminar</button>
      </div>
    </div>

  )
}

export default ItemCart