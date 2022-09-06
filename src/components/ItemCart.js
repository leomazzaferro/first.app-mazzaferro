// CONTEXT
import { CartContext } from '../context/CartContext';
// DEPENDENCYS
import React , { useContext } from 'react'
import styled from 'styled-components';
import { MdDelete } from "react-icons/md";

const StyledContainer = styled.div `
  border-bottom: 1px solid;
  width: 800px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`
const StyledImg = styled.img `
  width: 100px;
`

const StyledDiv = styled.div `
  align-self: center;
`
const StyledIcon = styled(MdDelete)`
  width: 25px;
  height: 25px;
`;

function ItemCart({products}) {
  const { removeItem } = useContext(CartContext);
  
  return (
    <>
      {products.map((product) => (
        <StyledContainer key={product.id}>
            <StyledDiv>  
              <StyledImg src={product.img} alt={product.name} />
            </StyledDiv>
            <StyledDiv>
              <p>Nombre: {product.name}</p>
              <p>Cantidad: {product.quantity}</p>
              <p>Precio: ${product.price}</p>
            </StyledDiv>
            <StyledDiv>
              <p>SubTotal: ${product.quantity * product.price}</p>
            </StyledDiv>
            <StyledDiv>
              <button onClick={() => removeItem(product.id)}>{<StyledIcon/>}</button>
            </StyledDiv>
        </StyledContainer>
      ))}
    </>
  )
}

export default ItemCart;
