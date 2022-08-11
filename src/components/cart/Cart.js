import React, { useContext } from 'react'
import CartContext from '../../context/CartContext';
import '../cart/Cart.css'



function Cart() {

  const { cartItem } = useContext(CartContext);
  const { removeProduct } = useContext(CartContext);
  JSON.stringify(cartItem)

  return (
    <div className='contenedorCarrito'>

      {
        cartItem <= 0 ?
          <>
          <p className='parrafoCarrito'>Su carrito de compras se encuentra vacío. Escoge una de estas dos opciones:  <strong><a href='Adidas' className='enlaceCarrito'>Adidas</a>
          </strong> o <strong><a href='Nike' className='enlaceCarrito'>Nike</a></strong></p> 
          </>
         :
          cartItem.map((item, index) => {
          return (
            <div className='itemProductos' key={index}>
                <div className='carritoItem'><img src={item.image}/></div>
                
                <div className='titulo'>{item.titulo}</div>
                
                <div className='remove' onClick={() => removeProduct(item.id) }><box-icon  type='solid' name='trash'></box-icon></div>
                
                <div className='precio'>{` $ ${item.precio}.00`}</div>       
            </div>
          )})
   
          
      }
       
      
    </div>
    

  )

      
}

export default Cart
