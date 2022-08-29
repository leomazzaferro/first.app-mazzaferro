// COMPONENTS
import ItemList from "./ItemList";
// DEPENDENCY
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer({ greeting }) {
  const [listProducts, setListProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");
    if (category) {
      const itemsCollectionQuery = query(itemCollection, where('category', '==', category));
      getDocs(itemsCollectionQuery)
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}) );
        setListProducts(data);
        })
        .catch((error) => console.error(error))
    } else {
      getDocs(itemCollection)
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}) );
          setListProducts(data);
        })
        .catch((error) => console.error(error))
    }
  }, [category]);

  return (
    <div>
      <h1>{greeting}</h1>
      {listProducts.length !== 0 ? (
        <ItemList listProducts={listProducts} />
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
}

export default ItemListContainer;
