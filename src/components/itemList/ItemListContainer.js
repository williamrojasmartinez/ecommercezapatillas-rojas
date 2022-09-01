import React, { useState, useEffect } from 'react' 
import { useParams } from 'react-router-dom'
import  { Link } from "react-router-dom"
import '../itemList/ItemList.css'
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"
import Item from '../itemList/Item'
import '../itemList/ItemListContainer.css' 


function ItemListContainer(props) {
  
  const { marca } = useParams()
  
  const [listaProductos, setListaProductos]= useState([])

  

  useEffect(()=>{
   const db = getFirestore();
   
   const q = marca 
   ? query(collection(db, "productos"), where("marca", "==", marca)) 
   : collection(db, "productos")
   
   getDocs(q)
   .then((result)=>{
     const lista = result.docs.map((product)=> {
       return{
         id: product.id,
         ...product.data()
       }
     })
     setListaProductos(lista)
   })
  }, [marca])


  return (
    <>

   <div className="texto">
      <p className='parrafo'>
        {props.texto}
        {props.img}
      </p> 
    </div>  


    <div className='contenedorAdidas'>
        <h2>{marca}</h2>

      <section className='contenedorTenisAdidas'>

              {
                  listaProductos.map((item, index) => {
                    return (
                        <Item
                            key={index}
                            titulo={item.titulo}
                            image={item.image}
                            precio={item.precio}   
                            boton={<Link to={`/marca/${item.id}`}><button className='boton'>Más detalles</button></Link>}
                            
                        />
                    )
                })
                 
               }

      </section>
    </div>
    
    </>

  )
}

export default ItemListContainer








