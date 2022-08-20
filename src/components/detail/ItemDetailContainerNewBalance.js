import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom' 
import ItemDetail from '../detail/ItemDetail'
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ItemDetailContainerNewBalance() {
    const params = useParams();

    
    function useTenisNewBalance() {

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
       
      }, [])

      return tenis
    }
    
    const tenisNewBalance = useTenisNewBalance();
    
    const result = tenisNewBalance.filter(tenis => tenis.id == params.id);
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
          
          :  <h1 className='noEncontrado'>Articulo no encontrado</h1>

        }
    
    </div>
  )
}

export default ItemDetailContainerNewBalance
