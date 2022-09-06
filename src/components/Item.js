// DEPENDENCYS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {Button , Card } from 'react-bootstrap';

const StyledDiv = styled.div `

  /* a {
    color: black;
  } */

`

const Item = ({product}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/item/${product.id}`)
  }

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
            <Card.Title> {product.name} </Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Card.Text>
              ${product.price}
            </Card.Text>
            <Link to={`/item/${product.id}`}>
              <Button variant="primary" onClick={handleClick}> Ver </Button>
            </Link>
          </Card.Body>
        </Card>
    
      </StyledDiv>
  );
};

export default Item;
