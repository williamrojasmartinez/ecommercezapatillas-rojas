import React from 'react'

function Item({ id, marca, titulo, image, precio, boton }) {

    return (
      
      <div className='cardAdidas'>
      {id}
      {marca}
      {titulo}
      <img src={image} />
      {`$ ${precio}.00 `}
      {boton}
    </div>
    
  )
      
    
}

export default Item
