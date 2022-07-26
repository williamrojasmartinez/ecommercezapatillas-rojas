import React, {useEffect, useState} from 'react'
import Cargando from '../images/cargando.gif' 
import ItemDetail from './ItemDetail'
import DataAdidas from '../data/DataAdidas'

const ItemDetailContainer = () => {


    const getItem = () => {
        const promesa = new Promise((resolve) => {
              setTimeout(() => {
                resolve(DataAdidas[0])
              }, 2000)  
        })
        return promesa
    }



    function useTenisAdidas() {

    const [products, setProducts] = useState()

     useEffect(() => {
            getItem()
            .then(result => {
                setProducts(result)
            })
            
        })
        return products
    }
    
    const teni = useTenisAdidas()

  return (
    <div>
        {
          teni !== undefined ?
          <>
                     <ItemDetail
                        titulo={teni.titulo}
                        descripcion={teni.descripcion}
                        image={teni.image}
                        precio={teni.precio}
                     />
          </>         
          :
          <img src={`${Cargando}`}/>

        }
    
    </div>
  )
}

export default ItemDetailContainer
