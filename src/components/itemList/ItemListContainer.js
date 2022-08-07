import React from 'react'
import '../itemList/ItemListContainer.css'


function ItemListContainer(props) {

 

  return (
    <>

    <div className="texto">
      <p className='parrafo'>
        {props.texto}
      </p> 
    </div>
  

    </>
  )
}

export default ItemListContainer
