import ItemDetail from "./ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc , getDoc , getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", id);
    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = {
            id: snapshot.id,
            ...snapshot.data()
          }
          setItem(data);
        }
      })
      .catch((error) => console.error("error" , error));
  }, [id]);

  return (
    <div>
      <h1>ItemDetailContainer</h1>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
