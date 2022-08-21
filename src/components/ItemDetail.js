import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
//import { useNavigate } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState();
  console.log(item);
  //const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleAdd = (quantityToAdd) => {
    const message = `Añadiste ${quantityToAdd} unidad`;
    quantityToAdd === 1 ? console.log(message) : console.log(`${message}es`);
    setCount(quantityToAdd);
    addToCart(item, quantityToAdd);
    //navigate('/cart');
  };

  useEffect(() => {
    console.log({ count });
  }, [count]);

  return (
    <div>
      <h3>ItemDetail</h3>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <img src={`${item.img}`} alt={`${item.img}`}></img>
      <ItemCount initial={1} stock={item.stock} onAdd={handleAdd} />
    </div>
  );
};

export default ItemDetail;
