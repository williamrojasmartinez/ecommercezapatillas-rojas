import React from 'react';
import logo from '../images/logo.jpg';
import CartWidget from './CartWidget';
import '../styles/NavBar.css';


const NavBar = () => {
  return (
    <div>
        <header>
        <a href='/#' className='logo'>
            <img src={ logo } alt="Logo de la empressa" className="Imagen Logo"/>
            <h2>Worm Sports</h2>
        </a>
        
        <nav>
            <ul className="nav justify-content-end">
                <li>
                  <a href='/#'>Inicio</a>
                </li>
                <li>
                  <a href='/#'>Adidas</a>
                </li>
                <li>
                  <a href='/#'>Nike</a>
                </li>
              </ul>
        </nav>
        <CartWidget />
      </header> 
    </div>
  )
}

export default NavBar
