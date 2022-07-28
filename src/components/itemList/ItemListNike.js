import React, { useEffect, useState } from 'react'
import  { Link } from "react-router-dom";
import Item from '../itemList/Item'
import DataNike from '../../data/DataNike'
import '../itemList/ItemList.css'

function ItemListNike() {
  
    const mision = () => {
    const promesa = new Promise(resolve => {
        setTimeout(() => {
            resolve(DataNike)
        }, 500)
    })
    return promesa
  }
    
function useTenisNike() {

const [tenis, setTenis] = useState([])

useEffect(() => {
    mision()
    .then(resultado => {
        setTenis(resultado)
    })
}, [])

return tenis

}

const tenisNike = useTenisNike()

    return (
    <div className='contenedorAdidas'>
        <h2>NIKE</h2>

        <section className='contenedorTenisAdidas'>
        
            {
               
                tenisNike.map(item => {
                    return (
                        <Item
                            key={item.id}
                            titulo={item.titulo}
                            image={item.image}
                            precio={item.precio}   
                            boton={<Link to={`/nike/${item.id}`}><button className='boton'>Más detalles</button></Link>}
                        />
                    )
                })
        
            }

        </section>
    </div>
  )
}

export default ItemListNike