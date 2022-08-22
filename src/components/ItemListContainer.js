import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function ItemListContainer({ greeting }) {
  const [listProducts, setListProducts] = useState([]);

  const { category } = useParams();

/*   useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");
    getDocs(itemCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}) );
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []); */

  const getListProducts = (category) => {
    fetch("../JSON/DataApi.json")
      .then((response) => response.json())
      .then((data) => {
        if (category) {
          setListProducts(
            data.filter((product) => product.category === category)
          );
          console.log(`Estas en ${category}`);
        } else {
          setListProducts(data);
        }
      });
  };


  useEffect(() => {
    getListProducts(category);
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
