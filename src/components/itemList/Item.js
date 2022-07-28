import React from 'react'

function Item({ id, titulo, image, precio, boton }) {
  
    return (
      
      <div className='cardAdidas'>
      {id}
      {titulo}
      <img src={image} />
      {`$ ${precio}.00 `}
      {boton}
    </div>
    
  )
      
    
}

export default Item
