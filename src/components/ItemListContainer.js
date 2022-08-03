
import React , {useEffect, useState} from 'react';
import ItemList from './ItemList';
//import data from '../mocks/dataApi'

function ItemListContainer({greeting}) {

    const [listProducts, setListProducts] = useState([])


    

    const getListProducts = () => {
        fetch("../JSON/DataApi.json")
            .then((response) => response.json())
            .then((data) => setListProducts(data));
        };


    useEffect(() => {
        getListProducts();
    }, []);
        
        
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