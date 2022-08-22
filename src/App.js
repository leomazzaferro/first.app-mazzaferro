import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { doc , getDoc , getFirestore } from "firebase/firestore";
import { useEffect , useState } from "react";
// bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./context/CartContext";

const StyledDiv = styled.div`
  text-align: center;

  a {
    text-decoration: none;
    color: black;
  }
`;




function App() {
  const [value, setValue] = useState('')

/*   useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", "CMMSonQzvK6vvhEyOwu0");
    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = {
            id: snapshot.id,
            ...snapshot.data()
          }
          console.log(data);
          setValue(data);
        }
      })
      .catch((error) => console.error("error" , error));
  }, []); */

  return (
    <StyledDiv>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos!!!" />}/>
          <Route path="/category/:category" element={<ItemListContainer greeting="Bienvenidos!!!" />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<ItemListContainer greeting="Bienvenidos!!!" />}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </CartProvider>
    </StyledDiv>
  );
}

export default App;
