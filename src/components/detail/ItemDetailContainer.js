import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom' 
import ItemDetail from '../detail/ItemDetail'
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {

    const [detalleProducto, setDetalleProducto] = useState({})
    const [loading, setLoading]= useState(true)

    const { id } = useParams()


    useEffect(() => {
        const db = getFirestore();
        const coleccionProductos = collection(db, "productos")
        const referenciaDoc = doc(coleccionProductos, id)
        getDoc(referenciaDoc)
        .then((result)=>{
            setDetalleProducto({
              id:result.id,
              ...result.data()
            })
          })
          .catch((error)=> console.log(error))
          .finally(()=> setLoading(false))
       },[id])

  return (
    <div>
        {loading ? <p> Cargando...</p> : <ItemDetail
                        id={detalleProducto.id}
                        titulo={detalleProducto.titulo}
                        descripcion={detalleProducto.descripcion}
                        stock={detalleProducto.stock}
                        image={detalleProducto.image}
                        precio={detalleProducto.precio}
                        tallas={detalleProducto.tallas}
                     />}
    </div>
  )
}

export default ItemDetailContainer
