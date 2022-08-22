import React, { useContext } from "react";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
