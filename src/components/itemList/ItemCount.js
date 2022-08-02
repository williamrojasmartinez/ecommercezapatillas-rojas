import React, { useState } from 'react'
import  { Link } from "react-router-dom"; 
import '../itemList/ItemCount.css';

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
        <button className="btn-disminuir" onClick={disminuir}><box-icon name='down-arrow' type='solid'></box-icon></button>
      
        <span>{count}</span>

        <button className="btn-aumentar" onClick={aumentar}><box-icon name='up-arrow' type='solid'></box-icon></button>
      
        <div className='texto-y-boton'>
            <h6>{`Quedan ${stock} unidades`}</h6>
            
            <Link to='/cart'><button className='btn-agregar' onClick={() => onAdd(count)}>Agregar al Carrito</button></Link>
        </div>

    </div>
    
    </>
  )
}

export default ItemCount
