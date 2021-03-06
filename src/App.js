import React from 'react';
import 'boxicons';
import NavBar from './components/navBar/NavBar';
import ItemListAdidas from './components/itemList/ItemListAdidas';
import ItemListNike from './components/itemList/ItemListNike'
import ItemListContainer from './components/itemList/ItemListContainer'
import ItemDetailContainerAdidas from '../src/components/detail/ItemDetailContainerAdidas';
import ItemDetailContainerNike from '../src/components/detail/ItemDetailContainerNike';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar/>

            <Switch>
              
              <Route path="/" exact>
                <ItemListContainer 
                texto='En Worm Sports encontraras solo zapatillas originales, con estilos exclusivos para toda la familia, con un rango de tallas y estilos lo suficientemente amplio para cubrir todas tus necesidades, ademas de la gran gama de colores que puedas imaginarte. Entra en nuestra tienda virtual y haz tu compra. Recuerda que tenemos retro clásicos en varias marcas.¡Entra ya y compra! Envíos a todo el país. Respaldo y garantía. Productos originales. Pagos contra entrega.'
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

            </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
