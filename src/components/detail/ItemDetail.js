import React, { useContext, useState } from 'react'
import ItemCount from '../itemList/ItemCount'
import '../../components/detail/ItemDetail.css'
import { CartContext } from '../../context/CartContext';
import swal from 'sweetalert';



function ItemDetail({  titulo, image, descripcion, stock, precio, id, tallas }) {


  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    const tenis = {id, titulo, image, descripcion, stock, precio, tallas}

    const elementoActivo = document.querySelector('input[name="talla"]:checked')

    if(elementoActivo){
      console.log(elementoActivo.value)
      console.log(`Agregaste ${cantidad} al carrito`)

      const itemAComprar = {
        id,
        titulo,
        image,
        precio,
        cantidad
      }
        
      addToCart(itemAComprar)
    
    } else {
        swal({
          text: "SELECCIONA UNA TALLA POR FAVOR",
          icon: "error"
        })
    }
   
    
  }


  return (
    <div className='tarjetas'>
        <div className='card'>

            <div className='imgBox'>
                <img src={image} />
            </div>

                <div className='details'>

                    <div className='titulo'>
                    {titulo}
                    </div>
                    
                    <div className='descripcion'>
                    {descripcion}
                    </div>

                    <div className='talla'>
                                
                                <p>Tallas:</p>

                                  {
                                   tallas.map((talla, index) => {
                                    return <ul key={index}>
                                              <li>
                                                <input 
                                                    type="radio"
                                                    name="talla"
                                                    value='tallas'
                                                />
                                                { talla }
                                              </li>
                                            </ul>
                                   })
                                   
                                  }
                    </div>

                    <div className='precio'>
                    {`$ ${precio}.00 `}
                    </div>

                    

                    <div>
                      <ItemCount
                      stock={stock}
                      initial={1}
                      onAdd={onAdd}
                      /> 
                    </div>
                
                </div>
     
        </div>

    </div>
  )
}

export default ItemDetail

