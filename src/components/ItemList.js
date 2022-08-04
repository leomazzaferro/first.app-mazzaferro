import React from 'react'
import Item from './Item'

const ItemList = ({listProducts}) => {
  return (
    <div
    style={{
      display: 'flex',
      flexFlow: 'row wrap' ,
    }}>
        {listProducts.map((product)=> <Item key={product.id} product={product} /> )}
    </div>
  )
}

export default ItemList