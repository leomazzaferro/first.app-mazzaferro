import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useNavigate } from "react-router-dom";

const ItemDetail = ({item}) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleAdd = (quantityToAdd) => {
      const message = `Añadiste ${quantityToAdd} unidad`;
      quantityToAdd === 1 ? console.log (message) : console.log (`${message}es`);
      setCount(quantityToAdd);
      console.log(count);
      navigate('/cart');
  }

  return (
    <div>
        <h3>ItemDetail</h3>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <img src={`${item.img}`} alt={`${item.img}`}></img>
        <ItemCount initial={1} stock={item.stock} onAdd={handleAdd} />
    </div>
  )
}

export default ItemDetail