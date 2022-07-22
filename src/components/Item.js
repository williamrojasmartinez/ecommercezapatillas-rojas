import React from 'react'

function Item({ id, titulo, image, precio }) {
  
    return (
    <div className='cardAdidas'>
      {id}
      {titulo}
      <img src={image} />
      {`$ ${precio}.00 `}
      <button className='botonAdidas'>Más detalles</button>
    </div>
  )
}

export default Item
