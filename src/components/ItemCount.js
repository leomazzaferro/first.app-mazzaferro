// DEPENDENCYS
import React, { useState } from "react";

function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button className="btn btn-danger mt-2 mx-2" disabled={count <= 1} onClick={decrease}>
        -
      </button>
      <span> {count} </span>
      <button className="btn btn-success mt-2 mx-2" disabled={count >= stock} onClick={increase}>
        +
      </button>
      <div>
        <button className="btn btn-primary mt-2" disabled={stock <= 0} onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
