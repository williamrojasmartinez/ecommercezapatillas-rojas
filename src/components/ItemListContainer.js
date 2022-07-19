import React from 'react'
import ItemCount from '../components/ItemCount';
import '../styles/ItemListContainer.css'

function ItemListContainer(props) {
  return (
    <>

    <div className="texto">
      <p className='parrafo'>
        {props.texto}
      </p>
      
    </div>
    
    <div>
      <ItemCount
       stock={5}
       initial={1}
      />      
    </div>

    </>
  )
}

export default ItemListContainer
