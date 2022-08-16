import React, { useContext } from 'react';

import { HiOutlineShoppingCart } from 'react-icons/hi';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';

const StyledDiv = styled.div `
    display: flex;
    
`

const StyledIcon = styled(HiOutlineShoppingCart) `
    width: 25px;
    height: 25px
`

const StyledCount = styled.p `
    color: black;
`

function CartWidget() {
    const {cantInCart} = useContext(CartContext);
    console.log(cantInCart)
        return (
        <StyledDiv>
            <StyledIcon/>
            <StyledCount>{cantInCart}</StyledCount>
        </StyledDiv>
    )  
}

export default CartWidget;