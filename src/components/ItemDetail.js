// COMPONENTS
import ItemCount from "./ItemCount";
// CONTEXT
import { CartContext } from "../context/CartContext";
// DEPENDENCYS
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledImg = styled.img `
  width: 400px;
`

const StyledDetail = styled.div `
  text-align: left;
`

const StyledContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin: 48 px;
`

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState();
  const { addToCart } = useContext(CartContext);
  const [goToCart , setGoToCart] = useState(false);

  const handleAdd = (quantityToAdd) => {
    setCount(quantityToAdd);
    addToCart(item, quantityToAdd);
    setGoToCart(true)
  };

  useEffect(() => {
    console.log({ count });
  }, [count]);

  return (
    <StyledContainer>
      <div>
        <StyledImg src={`${item.img}`} alt={`${item.img}`}></StyledImg>
      </div>
      <StyledDetail>
        <h2>{item.name}</h2>
        <h3>${item.price}</h3>
        <p>{item.description}</p>
        {goToCart ? (
          <div>
            <Link as={Link} to="/cart"><button className="btn btn-success mt-2 mx-2">Ir A Pagar</button></Link>
            <Link as={Link} to="/*"><button className="btn btn-primary mt-2 mx-2">Continuar Comprando</button></Link>
          </div>
        ) : (
          <ItemCount initial={1} stock={item.stock} onAdd={handleAdd} />
        )}
      </StyledDetail>
    </StyledContainer>
  );
};

export default ItemDetail;
