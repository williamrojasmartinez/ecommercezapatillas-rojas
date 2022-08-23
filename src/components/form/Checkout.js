import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import swal from 'sweetalert';
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

        const name = document.querySelector(".inputNombre").value
        const expresionNom = /^[a-zA-ZÀ-ÿ\s]{3,20}$/
        if (!expresionNom.test(name)) {
          swal({
            text: "Para el Nombre solo se permite letras y espacios (entre 3 y 20 letras)",
            icon: "warning"
          })
        return false
      }


        const ape = document.querySelector(".inputApellido").value
        const expresionApe = /^[a-zA-ZÀ-ÿ\s]{3,20}$/
        if (!expresionApe.test(ape)) {
          swal({
            text: "Para el Apellido solo se permite letras y espacios (entre 3 y 20 letras)",
            icon: "warning"
          })
        return false
      }


         const Telefono = document.querySelector(".inputTel").value
         const expresionTel = /^[3|6]?[ -]*([0-9][ -]*){9}$/
         if (!expresionTel.test(Telefono)) {
          swal({
            text: "Para el Telefonoolo solo se permiten números que empiecen por 3 o 6 y que no superen los 10 números",
            icon: "warning"
          })
         return false
       } 



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
          <input className='inputNombre'
              type="text" 
              placeholder="Nombre" 
              name="nombre" 
              required
              onChange={datosComprador} 
              />  
          
          <input className='inputApellido'
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
          
          <input className='inputTel'
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


