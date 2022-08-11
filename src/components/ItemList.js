import React from 'react'
import Item from './Item'
import styled from 'styled-components'

const StyledDiv = styled.div `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`

const ItemList = ({listProducts}) => {
  return (
    <StyledDiv>
        {listProducts.map((product)=> <Item key={product.id} product={product} /> )}
    </StyledDiv>
  )
}

export default ItemList