import React from 'react';
import './App.css'
import 'boxicons';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer'
import FotoInicio from './images/fotoInicio.png'
import Cart from './components/cart/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Checkout from './components/form/Checkout';
import ItemDetailContainer from './components/detail/ItemDetailContainer';




function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        
        <NavBar/>
         
            <Switch>

              <Route path="/cart" exact>
               <Cart />
              </Route>

              <Route path="/checkout" exact>
               <Checkout />
              </Route>

              <Route path="/" exact>
                <ItemListContainer 
                texto='En Worm Sports encontraras solo zapatillas originales, con estilos exclusivos para toda la familia, con un rango de tallas y estilos lo suficientemente amplio para cubrir todas tus necesidades, ademas de la gran gama de colores que puedas imaginarte. Entra en nuestra tienda virtual y haz tu compra. Recuerda que tenemos retro clásicos en varias marcas.¡Entra ya y compra! Envíos a todo el país. Respaldo y garantía. Productos originales. Pagos contra entrega.'
                img={<img className='fotoInicio' src={`${FotoInicio}`} alt='Foto de inicio'/>}
                />
              </Route> 

              <Route path="/:marca" exact>
                  <ItemListContainer />
              </Route>


              <Route path="/detalle/:id" exact>
                <ItemDetailContainer />
              </Route>

              <Route path="*"
              component={NotFound} >
              </Route>

            </Switch>
            
        </BrowserRouter>
        
      </CartProvider>
       
    </div>
  )
}

function NotFound() {
   return (
     <>
       <h1 className='notFound'>404 Not Found (Llegaste a una página que no existe)</h1> 
    </>  
  ) 
 }

export default App;
