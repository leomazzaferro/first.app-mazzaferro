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
const StyledImg = styled.img `
  width: 300px;

`

function ItemCart({products}) {
  const { removeItem } = useContext(CartContext);
  
  return (
    <div>
      {products.map((product) => (
        <StyledDiv>
          <div>
            <StyledImg src={product.img} alt={product.name} />
            <p>Nombre:{product.name}</p>
            <p>Cantidad:{product.quantity}</p>
            <p>Precio:{product.price}</p>
            <p>Total:{product.quantity * product.price}</p>
            <button onClick={() => removeItem(product.id)}>ELiminar</button>
          </div>
        </StyledDiv>
      ))}
    </div>
  )
}

export default ItemCart