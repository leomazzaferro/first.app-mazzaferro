import ItemDetail from './ItemDetail'
import React , { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [item, setItem] = useState([]);
  const { id } = useParams();

  const getOneProduct = (id) => {
      fetch("../JSON/DataApi.json")
          .then((response) => response.json())
          .then((data) => setItem(data.filter((item) => item.id === parseInt(id))[0])
          );
  };

  useEffect(() => {
    getOneProduct(id);
  }, [id]);

  return (
    <div>  
      <h1>ItemDetailContainer</h1>
      < ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer