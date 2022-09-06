// COMPONENTS
import ItemDetail from "./ItemDetail";
// DEPENDENCYS
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc , getDoc , getFirestore } from "firebase/firestore";
import styled from "styled-components";


const StyledDiv = styled.div `
  margin: 48px;
`

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
    <StyledDiv>
      <ItemDetail item={item} />
    </StyledDiv>
  );
};

export default ItemDetailContainer;
