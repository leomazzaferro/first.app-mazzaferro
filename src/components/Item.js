import React from "react";
import ItemCount from './ItemCount';

//bootstrap export
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Item = ({producto}) => {

  const onAdd = (quantity) => {
    console.log (`Compraste ${quantity} unidades`)
}
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title> {producto.name} </Card.Title>{" "}
          <Card.Text>
            {producto.description}
          </Card.Text>{" "}
          <Card.Text>
            ${producto.price}
          </Card.Text>{" "}
          <Button variant="primary"> Ver </Button>{" "}
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </Card.Body>{" "}
      </Card>{" "}
    </div>
  );
};

export default Item;
