import React, { useState } from 'react'
import '../styles/ItemCount.css';

function ItemCount( { stock, initial, onAdd } ) {

const [click, setClick] = useState(initial)

const substract = () => {
    click != 1 ? setClick(click - initial) : setClick(initial)
}

onAdd = () => {
  
    setClick(click + 1)
  
  if (click == stock) {
    setClick(stock)
  }
 
}


  return (
    <div className="contador">
        <button onClick={substract}><box-icon name='down-arrow' type='solid'></box-icon></button>
      
        <span>{click}</span>

        <button onClick={onAdd}><box-icon name='up-arrow' type='solid'></box-icon></button>
      
      
      <h6>{`Solo quedan ${stock} unidades`}</h6>
    </div>
  )
}

export default ItemCount
