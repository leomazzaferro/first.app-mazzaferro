import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes , Route } from 'react-router-dom';
import styled from 'styled-components';
// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './context/CartContext';

const StyledDiv = styled.div `

    text-align: center;
    
    a {
        text-decoration: none;
        color: black;
    }

`

function App() {
  return (
    <StyledDiv>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Bienvenidos!!!' />} />
          <Route path="/category/:category" element={<ItemListContainer greeting='Bienvenidos!!!' />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<ItemListContainer greeting='Bienvenidos!!!' />} />
          <Route path='/cart' element={<h1>Carrito</h1>} />
        </Routes>
      </CartProvider>
    </StyledDiv>
  );
}

export default App;
