import React from 'react'
import ItemCount from '../itemList/ItemCount'
import '../../components/detail/ItemDetail.css'

function ItemDetail({ titulo, image, descripcion, stock, precio }) {


  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} al carrito`);
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

