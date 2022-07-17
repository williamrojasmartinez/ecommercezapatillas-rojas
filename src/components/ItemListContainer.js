import React from 'react'
import '../styles/ItemListContainer.css'

function ItemListContainer(props) {
  return (
    <div className="texto">
      <p className='parrafo'>
        {props.texto}
      </p>
    </div>
  )
}

export default ItemListContainer
