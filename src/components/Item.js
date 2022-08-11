import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//bootstrap import
import {Button , Card } from 'react-bootstrap';

const StyledDiv = styled.div `

  /* a {
    color: black;
  } */

`

const Item = ({product}) => { 

  return (
      <StyledDiv>
    <Link to={`/item/${product.id}`}>
        <Card
          style={{
            width: "18rem",
            margin: "1rem",
            padding: "8px",
          }}>
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
          </Card.Body>{" "}
        </Card>{" "}
    </Link>
      </StyledDiv>
  );
};

export default Item;
