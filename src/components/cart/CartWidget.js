import React, { useContext } from 'react'
import  { Link } from "react-router-dom";
import CartContext from '../../context/CartContext';



function CartWidget() {

  const { cartItem } = useContext(CartContext);
  console.log(cartItem);

  return (
    <div className='carrito'>
        <box-icon name='cart-download' ></box-icon>
        <Link to='/cart'><span className='item'> { cartItem.length } </span></Link>
          
    </div>
  )
}

export default CartWidget
