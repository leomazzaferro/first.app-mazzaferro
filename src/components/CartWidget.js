import React from 'react'

import { HiOutlineShoppingCart } from 'react-icons/hi';

function CartWidget() {
    return (
        <div>
            <HiOutlineShoppingCart 
                style={{
                    width: "25px",
                    height: "25px",
                }} />
        </div>
    )  
}

export default CartWidget