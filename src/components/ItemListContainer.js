
import React , {useEffect, useState} from 'react';
import ItemList from './ItemList';
import {data} from '../mocks/DataApi'

function ItemListContainer({greeting}) {

    const [listaProductos, setListaProductos] = useState([])


    useEffect (()=>{
        data
        .then((resp)=> setListaProductos(resp))
    }, [])


    
    
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList listaProductos={listaProductos} />

            

            
        </div>
    );
}

export default ItemListContainer;