import React, { useEffect, useState } from 'react';
import './App.css'
import 'boxicons';
import NavBar from './components/navBar/NavBar';
import ItemListAdidas from './components/itemList/ItemListAdidas';
import ItemListNike from './components/itemList/ItemListNike'
import ItemListContainer from './components/itemList/ItemListContainer'
import FotoInicio from './images/fotoInicio.png'
import ItemDetailContainerAdidas from '../src/components/detail/ItemDetailContainerAdidas';
import ItemDetailContainerNike from '../src/components/detail/ItemDetailContainerNike';
//import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import CartProvider from './context/CartContext';
import Checkout from './components/form/Checkout';

function App() {

// El useState i el useEffect es un ejemplo, despues se puede borrar
const [value, setValue] = useState('')

  useEffect(() => {
    const db = getFirestore();
    const docref = doc(db, 'itemsAdidas', '17yY42rRtTLfCzIAM6wk')
    getDoc(docref)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = {
          id: snapshot.id,
          ...snapshot.data()
        }
        console.log(data)
        setValue(data)
      }
    })
    .catch((error) => console.error(error))
  }, [])



  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
      
        <NavBar/>

            <Switch>
              
              <Route path="/" exact>
                <ItemListContainer 
                texto='En Worm Sports encontraras solo zapatillas originales, con estilos exclusivos para toda la familia, con un rango de tallas y estilos lo suficientemente amplio para cubrir todas tus necesidades, ademas de la gran gama de colores que puedas imaginarte. Entra en nuestra tienda virtual y haz tu compra. Recuerda que tenemos retro clásicos en varias marcas.¡Entra ya y compra! Envíos a todo el país. Respaldo y garantía. Productos originales. Pagos contra entrega.'
                img={<img className='fotoInicio' src={`${FotoInicio}`}/>}
                />
              </Route>

              <Route path="/adidas" exact>
                  <ItemListAdidas />
                </Route>

              <Route path="/nike" exact>
                <ItemListNike />
              </Route>

              <Route path="/adidas/:id" exact>
                <ItemDetailContainerAdidas />
              </Route>

              <Route path="/nike/:id" exact>
               <ItemDetailContainerNike />
              </Route>

              <Route path="/cart" exact>
               <Cart />
              </Route>

              <Route path="/checkout" exact>
               <Checkout />
              </Route>

              <Route path="*" 
              component={NotFound}>
              </Route>
            
            </Switch>

        </BrowserRouter>
        </CartProvider>
    </div>
  )
}

function NotFound() {
  return (
    <div>
      <h1 className='notFound'>404 Not Found (Llegaste a una página que no existe)</h1> 
    </div>  
  ) 
}

export default App;
