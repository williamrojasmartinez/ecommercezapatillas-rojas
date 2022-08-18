import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import  { Link } from "react-router-dom";
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import '../form/Checkout.css'

function Checkout() {

    const [comprador, setComprador] =useState({})
    const [orderId, setOrderId] =useState('')

    const { cart } = useContext(CartContext)
    const { precioTotal } = useContext(CartContext)
    const { vaciarCart } = useContext(CartContext)
    

    const datosComprador = (e) => {
        e.preventDefault()
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()

        const db = getFirestore();
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            comprador,
            items: cart,
            total: precioTotal(),
            date: serverTimestamp()
        })
        .then((res) => {
            setOrderId(res.id)
            vaciarCart()
        })
        .catch((error) => console.error(error))
    }

  return (
    <>
    {
        !orderId ?
        <div className='cajaForm'>
        
        <form onSubmit={finalizarCompra} className='my-form'>
        <h3 className='tituloH3Form'>Checkout</h3>
          <input 
              type="text" 
              placeholder="Nombre" 
              name="nombre" 
              required
              onChange={datosComprador} />  
          
          <input 
              type="text" 
              placeholder="Apellido" 
              name="apellido" 
              required 
              onChange={datosComprador} />
          
          <input 
              type="email" 
              placeholder="Email" 
              name="email" 
              required 
              onChange={datosComprador} />  
          
          <input 
              type="tel" 
              placeholder="Telefono" 
              name="telefono" 
              required
              onChange={datosComprador} />
          
          <button type='submit'> Enviar </button>
        </form>
      </div>

    :
      <div className='cajaTextoCompra'>
        <p className='parrafocompra1'>Muchas gracias por tu compra. Te enviaremos un correo cuando tu pedido salga de nuestro almacén.</p>
        <p className='parrafocompra2'>Tu código de referencia es: <strong className='strongId'>{orderId}</strong></p>
        <Link to={`/`}><button className='btnAceptar'>Aceptar</button></Link>
      </div>
    }
    </>
    
  )
}

export default Checkout


