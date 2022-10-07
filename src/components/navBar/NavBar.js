import React from 'react';
import logo from '../../images/logo.jpg';
import CartWidget from '../cart/CartWidget';
import '../../components/navBar/NavBar.css';
import  { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
        <header>
        <Link to='/' className='logo'>
            <img src={logo} alt="Logo de la empressa" className="Imagen Logo"/>
            <h2>Worm Sports</h2>
        </Link>
        
        <nav>
            <ul className="nav justify-content-end">
                <li>
                  <Link to='/'>Inicio</Link>
                </li>
                <li>
                  <Link to='marca/adidas'>Adidas</Link>
                </li>
                <li>
                  <Link to='marca/nike'>Nike</Link>
                </li>
                <li>
                  <Link to='marca/new-balance'>New Balance</Link>
                </li>
              </ul>
        </nav>
        <CartWidget />
      </header> 
    </div>
  )
}

export default NavBar
