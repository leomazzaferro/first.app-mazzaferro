
import React , {useEffect, useState} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';


function ItemListContainer({greeting}) {

    const [listaProductos, setListaProductos] = useState([])


    const productos = [
        {id:'01', name:'remera', description:"Lorem ipsum dolor sit amet", price:1250, img:'https://picsum.photos/200', stock:5,},
        {id:'02', name:'pantalon', description:"Lorem ipsum dolor sit amet", price:2300, img:'https://picsum.photos/201', stock:15},
        {id:'03', name:'campera', description:"Lorem ipsum dolor sit amet", price:3800, img:'https://picsum.photos/202', stock:7},
        {id:'04', name:'buzo', description:"Lorem ipsum dolor sit amet", price:2900, img:'https://picsum.photos/203', stock:3},
        ]
    const data = new Promise((resolve, reject) => {
    
            let condition = true
                setTimeout(()=> {
            if(condition){
                    resolve(productos)
            }else{
                    reject('')
            }}, 2000)
            
        })

    
    

    useEffect (()=>{
        data
        .then((resp)=> setListaProductos(resp))
    }, [])


    const onAdd = (quantity) => {
        console.log (`Compraste ${quantity} unidades`)
    }
    
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList listaProductos={listaProductos} />

            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    );
}

export default ItemListContainer;