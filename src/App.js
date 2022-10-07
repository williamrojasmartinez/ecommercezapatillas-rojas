import React from 'react';
import './App.css'
import 'boxicons';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer'
import FotoInicio from './images/fotoInicio.png'
import Cart from './components/cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Checkout from './components/form/Checkout';
import ItemDetailContainer from './components/detail/ItemDetailContainer';
import NotFound from './components/notFound/NotFound';



function App() {

  return (
    <div className="App">
      
      <CartProvider>
        <BrowserRouter>
        
        <NavBar/>
         
            <Routes>
              
              <Route path="/cart" element={<Cart />} />

              
              <Route path="/checkout" element={<Checkout />} />
              
              <Route path="/"
              element={
                <ItemListContainer 
                texto='En Worm Sports encontraras solo zapatillas originales, con estilos exclusivos para toda la familia, con un rango de tallas y estilos lo suficientemente amplio para cubrir todas tus necesidades, ademas de la gran gama de colores que puedas imaginarte. Entra en nuestra tienda virtual y haz tu compra. Recuerda que tenemos retro clásicos en varias marcas.¡Entra ya y compra! Envíos a todo el país. Respaldo y garantía. Productos originales. Pagos contra entrega.'
                img={<img className='fotoInicio' src={`${FotoInicio}`} alt='Foto de inicio'/>}
                />
              }
              >
              </Route>
              
              <Route path="marca/:marca" element={<ItemListContainer />} />
              
              <Route path="/detalle/:id" element={<ItemDetailContainer />} />

              <Route path="*" element={<NotFound />} />
              
            </Routes>
            
        </BrowserRouter>
        
      </CartProvider>
      
    </div>
  )
}

export default App;
