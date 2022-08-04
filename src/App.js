
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes , Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <NavBar/>

      <Routes>
        
        <Route path="/" element={<ItemListContainer greeting='Bienvenidos!!!' />} />
        
        <Route path="/category/:category" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="*" element={<ItemListContainer />} />

      </Routes>
    </div>
  );
}

export default App;
