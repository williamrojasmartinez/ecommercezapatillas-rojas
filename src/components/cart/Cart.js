import React, { useContext } from 'react'
import CartContext from '../../context/CartContext';
import '../cart/Cart.css'



function Cart() {

  const { cartItem } = useContext(CartContext);
  const { removeProduct } = useContext(CartContext);
  //JSON.stringify(cartItem)

  return (
    <div className='contenedorCarrito'>

      {
        cartItem <= 0 ?
          <>
          <div className='cartIcon'><box-icon name='cart' animation='tada' rotate='90' ></box-icon></div>
          <p className='parrafoCarrito'>Su carrito de compras se encuentra vacío. Escoge una de estas dos opciones:  <strong><a href='Adidas' className='enlaceCarrito'>Adidas</a>
          </strong> o <strong><a href='Nike' className='enlaceCarrito'>Nike</a></strong></p> 
          </>
         :
          cartItem.map((item, index) => {
          return (
            <div className='itemProductos' key={index} data={item}>
                <div className='carritoItem'><img src={item.image}/></div>
                
                <div className='titulo'>{item.titulo}</div>
                
                <div className='remove' onClick={() => removeProduct(item.id) }><box-icon  type='solid' name='trash'></box-icon></div>
                
                <div className='precio'>{` $ ${item.precio}.00`}</div>       
            </div>
          )})
   
          
      }
       <div className='carritoFooter'>
        <h3>Total: $0.00</h3>
        <button className='btnComprar'>Comprar</button>
       </div>
      
    </div>
    

  )

      
}

export default Cart
