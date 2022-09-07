// COMPONENTS
import ItemCart from './ItemCart';
// CONTEXT
import { CartContext } from '../context/CartContext';
// DEPENDENCYS
import React , { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div `
  border-bottom: 1px solid;
  width: 800px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 2rem;
`

const Cart = () => {
  const { cart, totalPrice, cleanCart } = useContext(CartContext);
  const navigate = useNavigate();

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
      <StyledDiv>
        <h5>PRODUCTO</h5>
        <h5>SUBTOTAL</h5>
      </StyledDiv>
      <div>
        <ItemCart products={cart} />
      </div>
      <div>
        <p><strong>Precio Total: ${totalPrice()}</strong></p>
        <button className='btn btn-danger mx-2' onClick={cleanCart}>Vaciar Carrito</button>
        <button className='btn btn-success mx-2' onClick={()=>navigate("/checkout")}>Finalizar compra</button>
      </div>
    </div>
  )
}

export default Cart;