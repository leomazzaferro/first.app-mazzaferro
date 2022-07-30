
import React , {useEffect, useState} from 'react';
import ItemList from './ItemList';
import {data} from '../mocks/DataApi'

function ItemListContainer({greeting}) {

    const [listProducts, setListProducts] = useState([])


    useEffect (()=>{
        data
        .then((resp)=> setListProducts(resp))
        
    }, [])


    
    
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