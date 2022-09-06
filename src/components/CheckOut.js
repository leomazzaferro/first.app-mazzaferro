// CONTEXT
import { CartContext } from '../context/CartContext';
// DEPENDENCYS
import React , { useContext , useState } from 'react';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function CheckOut() {
  const { cart, totalPrice , cleanCart } = useContext(CartContext);
  const [ buyer , setBuyer ] = useState({});
  const [ orderId , setOrderId ] = useState('')
  const navigate = useNavigate();

  const newBuyer = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  const sendOrder = (e) => {
    e.preventDefault()
    if(Object.values(buyer).length !== 3) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios!',
      })
    } else {
      const newOrder = {
        buyer: buyer,
        items: cart,
        total: totalPrice(),
        date: serverTimestamp(),
      }
      const db = getFirestore();
      const orederCollection = collection(db, "orders")
      addDoc(orederCollection, newOrder)
        .then((snapshot)=>{
          setOrderId(snapshot.id)
          cleanCart()
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <>
      {!orderId
      ? <div className='container'>
          <h1>CheckOut</h1>
          <form className='col-md-6 container' onSubmit={sendOrder}>
            <input className='form-control mt-2' type="text" placeholder="Nombre completo" name='name' onChange={newBuyer}/>
            <input className='form-control mt-2' type="number" placeholder="Telefono" name='phone' onChange={newBuyer}/>
            <input className='form-control mt-2' type="email" placeholder="email@mail.com" name='email' onChange={newBuyer}/>
            <button className='btn btn-primary mt-2' type="submit">
              Finalizar Compra
            </button>
          </form>
        </div>
      : <div>
          <h1>Gracias por su compra</h1>
          <p>Su codigo de compra es:<strong> {orderId} </strong></p>
          <button className='btn btn-primary' onClick={()=>navigate("/")} >Home</button>
        </div>
      }
    </>
  )
}

export default CheckOut;