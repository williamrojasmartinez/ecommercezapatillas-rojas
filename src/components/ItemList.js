import React, { useEffect, useState } from 'react'
import Item from './Item'
import DataAdidas from '../data/DataAdidas'
import '../styles/ItemList.css'

function ItemList() {
  
    const mision = () => {
    const promesa = new Promise(resolve => {
        setTimeout(() => {
            resolve(DataAdidas)
        }, 2000)
    })
    return promesa
  }
    
function useTenisAdidas() {

const [tenis, setTenis] = useState([])

useEffect(() => {
    mision()
    .then(resultado => {
        setTenis(resultado)
    })
}, [])

return tenis

}

const tenisAdidas = useTenisAdidas()

    return (
    <div className='contenedorAdidas'>
        <h2>ADIDAS</h2>

        <section className='contenedorTenisAdidas'>
            
            {
                tenisAdidas.map(item => {
                    return (
                        <Item
                            key={item.id}
                            titulo={item.titulo}
                            image={item.image}
                            precio={item.precio}   
                        />
                    )
                })
            }

        </section>
    </div>
  )
}

export default ItemList
