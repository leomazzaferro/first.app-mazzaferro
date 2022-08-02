import React from "react";
import ItemCount from './ItemCount';

//bootstrap import
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Item = ({product}) => {

  const onAdd = (quantity) => {
    console.log (`Compraste ${quantity} unidades`)
}
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          margin: "1rem",
          padding: "8px",
        }}
      >
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title> {product.name} </Card.Title>{" "}
          <Card.Text>
            {product.description}
          </Card.Text>{" "}
          <Card.Text>
            ${product.price}
          </Card.Text>{" "}
          <Button variant="primary"> Ver </Button>{" "}
          <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        </Card.Body>{" "}
      </Card>{" "}
    </div>
  );
};

export default Item;
