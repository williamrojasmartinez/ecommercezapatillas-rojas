import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Cargando from '../../images/cargando.gif' 
import ItemDetail from '../detail/ItemDetail'
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemDetailContainerAdidas = () => {

  const params = useParams();

    //  const getItem = () => {
    //      const promesa = new Promise((resolve) => {
    //            setTimeout(() => {
    //              resolve(DataAdidas)
    //            }, 500)  
    //      })
    //      return promesa
    //  }



    function useTenisAdidas() {

      const [tenis, setTenis] = useState([]);
      
      useEffect(() => {
        const db = getFirestore();

    const itemsCollection = collection(db, 'productos')
      getDocs(itemsCollection)
      .then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}))
      console.log(data);
      setTenis(data)
    })
    .catch((error) => console.error(error))
      //   getItem()
      //    .then(resultado => {
      //      setTenis(resultado)
      //  })
        
        
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
                        id={product.id}
                        titulo={product.titulo}
                        descripcion={product.descripcion}
                        stock={product.stock}
                        image={product.image}
                        precio={product.precio}
                        tallas={product.tallas}
                     />
          </>         
          :
          <img className='cargando' src={`${Cargando}`}/>

        }
    
    </div>
  )
}

export default ItemDetailContainerAdidas
