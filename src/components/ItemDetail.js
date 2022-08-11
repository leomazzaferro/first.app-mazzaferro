import React, { useState } from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  const [count, setCount] = useState(0)

  const onAdd = (quantityToAdd) => {
      const message = `Añadiste ${quantityToAdd} unidad`
      quantityToAdd === 1 ? console.log (message) : console.log (`${message}es`)
      setCount(quantityToAdd)
      console.log(count)
      
  }

  return (
    <div>
        <h3>ItemDetail</h3>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <img src={`${item.img}`} alt={`${item.img}`}></img>
        <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail