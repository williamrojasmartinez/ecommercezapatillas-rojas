import React, { useEffect } from 'react'
import '../itemList/ItemListContainer.css'


function ItemListContainer(props) {

  

 

  return (
    <>

    <div className="texto">
      <p className='parrafo'>
        {props.texto}
        {props.img}
      </p> 
    </div>
    
    </>
  )
}

export default ItemListContainer
