import React, { useContext } from 'react';

import { HiOutlineShoppingCart } from 'react-icons/hi';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';

const StyledCount = styled.h5`
    color: white;
    padding-top: 4px;
    margin-left: 4px;
`

function CartWidget() {
    const data = useContext(CartContext);
    console.log(data)
        return (
        <div>
            <HiOutlineShoppingCart 
                style={{
                    width: "25px",
                    height: "25px",
                }} />
            <StyledCount><h3>hola</h3></StyledCount>
        </div>
    )  
}

export default CartWidget;