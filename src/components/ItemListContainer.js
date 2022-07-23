import React from 'react'
import ItemCount from '../components/ItemCount';
import '../styles/ItemListContainer.css'
import ItemList from './ItemList';

function ItemListContainer(props) {

  //FUNCIÓN PARA AGREGAR LOS PRODUCTOS AL CARRITO
  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} al carrito`);
  }

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
       onAdd={onAdd}
      />   

      <ItemList />   
    </div>

    </>
  )
}

export default ItemListContainer
