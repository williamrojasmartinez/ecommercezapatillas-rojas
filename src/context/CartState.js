import React, { useReducer } from 'react'
import reducer from './UseReducer'
import CartContext from './CartContext'

function CartState( props ) {

    const initialState = { cart: [] }
    
    console.log(initialState);

    const [state, dispatch] = useReducer(reducer, initialState)

    const addProduct = (id) => {
          dispatch({ type: 'addProduct', payload: id });
    }

    const removeProduct = (tenis) => {
        dispatch({ type: 'removeProduct', payload: tenis });
    }


  return (
    
    <CartContext.Provider value={{addProduct, removeProduct, cartItem: state.cart}}> 
        {props.children}
    </CartContext.Provider>

  )
}

export default CartState
