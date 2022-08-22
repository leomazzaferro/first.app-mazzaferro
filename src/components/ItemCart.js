import React , { useContext } from 'react'
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const StyledDiv = styled.div `
  border: 1px solid;
  width: 400px;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 10px;
`

function ItemCart({product}) {
  const { removeItem } = useContext(CartContext);
  
  return (

    <StyledDiv>
      <img src={product.img} alt={product.name} />
      <div>
        <p>Nombre:{product.name}</p>
        <p>Cantidad:{product.quantity}</p>
        <p>Precio:{product.price}</p>
        <p>Total:{product.quantity * product.price}</p>
        <button onClick={() => removeItem(product.id)}>ELiminar</button>
      </div>
    </StyledDiv>

  )
}

export default ItemCart