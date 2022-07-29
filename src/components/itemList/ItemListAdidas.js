import React, { useEffect, useState } from 'react'
import  { Link } from "react-router-dom";
import Cargando from "../../images/cargando.gif"
import Item from '../itemList/Item'
import DataAdidas from '../../data/DataAdidas'
import '../itemList/ItemList.css'


function ItemListAdidas() {
  
    const mision = () => {
    const promesa = new Promise(resolve => {
        setTimeout(() => {
            resolve(DataAdidas)
        }, 1000)
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
                Cargando < tenisAdidas  ? 
                tenisAdidas.map(item => {
                    return (
                        <Item
                            key={item.id}
                            titulo={item.titulo}
                            image={item.image}
                            precio={item.precio}  
                            boton={<Link to={`/adidas/${item.id}`}><button className='boton'>Más detalles</button></Link>} 
                        />
                    )
                })
                : <img className='cargando' src={`${Cargando}`}/>
                
            }

        </section>
    </div>
  )
}

export default ItemListAdidas
