import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react';
import getOneProduct from '../mocks/getOneProduct';


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    

    useEffect(() => {
        getOneProduct
            .then((res) => setItem(res))
            .catch((err) => alert("Ha ocurrido un error", err));
    }, []);

  return (
    <div>  
        <h1>ItemDetailContainer</h1>
        < ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer