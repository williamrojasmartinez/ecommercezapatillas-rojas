import React from 'react';
import 'boxicons';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer 
          texto='En Worm Sports encontraras solo zapatillas originales, con estilos exclusivos para toda la familia, con un rango de tallas y estilos lo suficientemente amplio para cubrir todas tus necesidades, ademas de la gran gama de colores que puedas imaginarte. Entra en nuestra tienda virtual y haz tu compra. Recuerda que tenemos retro clásicos en varias marcas.¡Entra ya y compra! Envíos a todo el país. Respaldo y garantía. Productos originales. Pagos contra entrega.'
        />
    </div>
  );
}

export default App;
