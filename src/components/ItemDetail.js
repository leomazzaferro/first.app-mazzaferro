import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import styled from "styled-components";

const StyledImg = styled.img `
  width: 300px;

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
    <div>
      <h3>ItemDetail</h3>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <StyledImg src={`${item.img}`} alt={`${item.img}`}></StyledImg>
      {goToCart ? ( 
        <div>
          <Link as={Link} to="/cart"><button>Ir A Pagar</button></Link>
          <Link as={Link} to="/*"><button>Continuar Comprando</button></Link>
        </div>
        ) : ( 
          <ItemCount initial={1} stock={item.stock} onAdd={handleAdd} /> 
      )}
    </div>
  );
};

export default ItemDetail;
