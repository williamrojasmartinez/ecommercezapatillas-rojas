import React, { useEffect, useState } from 'react'
import  { Link } from "react-router-dom";
import Item from '../itemList/Item'
import '../itemList/ItemList.css'
import Cargando from '../../images/cargando.gif'
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";

function ItemListNewBalance() {

//     const mision = () => {
//     const promesa = new Promise(resolve => {
//         setTimeout(() => {
//             resolve(DataNike)
//         }, 1000)
//     })
//     return promesa
//   }


function useTenisNewBalance() {

    const [tenis, setTenis] = useState([])
    
    useEffect(() => {
        const db = getFirestore();
    
        const itemsCollection = collection(db, 'productos')
    
        itemsCollection &&
            getDocs(query(itemsCollection, where('marca', '==', 'New Balance')))
            .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}))
            console.log(data);
            setTenis(data)
        })
        .catch((error) => console.error(error))
          
       
        // mision()
        // .then(resultado => {
        //     setTenis(resultado)
        // })
    }, [])
    
    return tenis
    
    }
    
    const tenisNewBalance = useTenisNewBalance()
    
        return (
        <div className='contenedorAdidas'>
            <h2>NIKE</h2>
    
            <section className='contenedorTenisAdidas'>
            
                {
                   Cargando < tenisNewBalance  ? 
                   tenisNewBalance.map(item => {
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
                    : <img className='cargando' src={`${Cargando}`}/>
                }
    
            </section>
        </div>
      )
    }

export default ItemListNewBalance
