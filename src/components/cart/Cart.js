import React, { useContext } from 'react'
import CartContext from '../../context/CartContext';



function Cart() {

  const { cartItem } = useContext(CartContext);

  return (
    <div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>

      {JSON.stringify(cartItem)}
      
    </div>
  )
}

export default Cart
