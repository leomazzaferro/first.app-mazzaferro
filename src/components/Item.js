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
            <Link to={`/item/${product.id}`}>
              <Button variant="primary"> Ver </Button>{" "}
            </Link>
          </Card.Body>{" "}
        </Card>{" "}
    
      </StyledDiv>
  );
};

export default Item;
