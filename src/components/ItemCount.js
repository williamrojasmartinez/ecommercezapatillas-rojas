import React, { useState } from 'react'
import '../styles/ItemCount.css';

function ItemCount( { stock, initial, onAdd } ) {

const [count, setCount] = useState(initial)

const disminuir = () => {
  count > initial && setCount(count - 1)
}

const aumentar = () => {
  count < stock && setCount(count + 1)
}


  return (
    <>
    <div className="contador">
        <button onClick={disminuir}><box-icon name='down-arrow' type='solid'></box-icon></button>
      
        <span>{count}</span>

        <button onClick={aumentar}><box-icon name='up-arrow' type='solid'></box-icon></button>
      
      
      <h6>{`Solo quedan ${stock} unidades`}</h6>
      <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </div>
    
    </>
  )
}

export default ItemCount
