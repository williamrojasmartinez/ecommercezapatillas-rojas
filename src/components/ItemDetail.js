import React from 'react'
import '../styles/ItemDetail.css'

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

                    <div className='precio'>
                    {`$ ${precio}.00 `}
                    </div>
                
                </div>
     
        </div>

    </div>
  )
}

export default ItemDetail

