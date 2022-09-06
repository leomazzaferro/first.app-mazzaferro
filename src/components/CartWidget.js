// CONTEXT
import { CartContext } from "../context/CartContext";
// DEPENDENCYS
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
`;

const StyledIcon = styled(HiOutlineShoppingCart)`
  width: 25px;
  height: 25px;
`;

const StyledCount = styled.span`
  color: black;
`;

function CartWidget() {
  const { totalProducts } = useContext(CartContext);
  
  return (
    <StyledDiv>
      <div><Link as={Link} to="/cart"><StyledIcon /></Link></div>
      <div><StyledCount>{totalProducts() || "" }</StyledCount></div>
    </StyledDiv>
  );
}

export default CartWidget;
