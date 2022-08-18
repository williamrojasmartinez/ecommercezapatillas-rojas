import React, { useContext } from 'react'
import  { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';



function CartWidget() {

 
  const { cartQuantity } = useContext(CartContext);
  

  return (
    <div className='carrito'>
        <box-icon name='cart-download' ></box-icon>
        <Link to='/cart'><span className='item'> { cartQuantity() } </span></Link>
          
    </div>
  )
}

export default CartWidget
