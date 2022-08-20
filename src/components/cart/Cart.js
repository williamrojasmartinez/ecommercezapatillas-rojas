import React, { useContext } from 'react'
import  { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext'
import Carro from '../../images/carro_vacio.gif'
import '../cart/Cart.css'



function Cart() {

  const { cart } = useContext(CartContext) 
  console.log(cart)
  const { removeOneItem } = useContext(CartContext);
  const { precioTotal } = useContext(CartContext);
  const { vaciarCart } = useContext(CartContext)

  return (
    <div className='contenedorCarrito'>

      {
        cart <= 0 ?
          <>
          <div className='cartIcon'><img className='cargando' src={`${Carro}`}/></div>
          <p className='parrafoCarrito'>Su carrito de compras se encuentra vacío. Escoge una de estas dos opciones:  <strong><a href='Adidas' className='enlaceCarrito'>Adidas</a>
          </strong>, <strong><a href='Nike' className='enlaceCarrito'>Nike</a></strong> o <strong><a href='new-balance' className='enlaceCarrito'>New Balance</a></strong></p> 
          </>
         :  
            cart.map((item, index) => {
          return (
            
            <div className='itemProductos' key={index} data={item}>
                <div className='carritoItem'><img src={item.image}/></div>
                
                <div className='titulo'>{item.titulo}<b className='size'>{` (Talla: ${item.tallas})`}</b></div>

                <div className='cantidad'> Qty: <b className='precios'>{item.cantidad}</b></div>

                <div className='precioUnitario'>Precio unitario: <b className='precios'>{` $ ${item.precio}` }</b></div>

                <div className='subtotal'>Subtotal: <b className='precios'>{`$ ${item.precio * item.cantidad}`}</b></div>
                
                <div className='remove' onClick={() => removeOneItem(item.id) }><box-icon  type='solid' name='trash'></box-icon></div>     
            </div>
          )})
   
          
      }
      <>
      {
      cart != 0 &&  
      <div className='carritoFooter '>
        <h3>Total: $ { precioTotal() }</h3>
        <Link to={`/Checkout`}><button className='btnComprar '>Finalizar Compra</button></Link>
        
        <div><button className='btnLimpiarCarrito' onClick={ vaciarCart }>Limpiar Carrito</button></div>
      </div> 
      }
      </>
       
      
    </div>
    

  )

      
}

export default Cart
