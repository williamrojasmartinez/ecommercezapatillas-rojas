import React, { useEffect, useState } from 'react'
import '../../components/detail/ItemDetail.css'

function ItemDetail({ titulo, image, descripcion, precio }) {


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
                                
                                <p>Tallas</p>

                                  <ul>
                                    <li><input 
                                    type="radio"
                                    name="talla"
                                    value="6.5" />6.5</li>
                                    <li><input 
                                    type="radio"
                                    name="talla"
                                    value="7" />7</li>
                                    <li><input 
                                    type="radio"
                                    name="talla"
                                    value="7.5" />7.5</li>
                                    <li><input 
                                    type="radio"
                                    name="talla"
                                    value="8" />8</li>
                                    <li><input 
                                    type="radio"
                                    name="talla"
                                    value="8.5" />8.5</li>
                                    <li><input 
                                    type="radio"
                                    name="talla"
                                    value="9" />9</li>
                                    <li><input 
                                    type="radio"
                                    name="talla"
                                    value="9.5" />9.5</li>
                                    <li><input 
                                    type="radio"
                                    name="talla"
                                    value="10" />10</li>
                                  </ul>
                              </div>

                    <div className='precio'>
                    {`$ ${precio}.00 `}
                    </div>

                    <div>
                    <button className='btn'>Agregar al Carrito</button>
                    </div>
                
                </div>
     
        </div>

    </div>
  )
}

export default ItemDetail

