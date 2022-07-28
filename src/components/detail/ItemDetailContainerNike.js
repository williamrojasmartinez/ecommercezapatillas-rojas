import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Cargando from '../../images/cargando.gif' 
import ItemDetail from '../detail/ItemDetail'
import DataNike from '../../data/DataNike'



function ItemDetailContainerNike() {
  
  const params = useParams();

    const getItem = () => {
        const promesa = new Promise((resolve) => {
              setTimeout(() => {
                //resolve(DataAdidas[0])
                resolve(DataNike)
              }, 500)  
        })
        return promesa
    }



    function useTenisAdidas() {

      const [tenis, setTenis] = useState([]);
      
      useEffect(() => {
        getItem()
        .then(resultado => {
          setTenis(resultado)
      })
        //setTenis(DatosAdidas)
        
      }, [])
      
      return tenis
    }
    
    const tenisAdidas = useTenisAdidas();
    
    const result = tenisAdidas.filter(tenis => tenis.id == params.id);
    const product = result[0];
    console.log(product);

  return (
    <div>
        {
          product !== undefined ?
          <>
                     <ItemDetail
                        titulo={product.titulo}
                        descripcion={product.descripcion}
                        image={product.image}
                        precio={product.precio}
                     />
          </>         
          :
          <img className='cargando' src={`${Cargando}`}/>

        }
    
    </div>
  )
}

export default ItemDetailContainerNike

