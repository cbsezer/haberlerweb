import React, { useState, } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            HBR
            <i className="fab fa-galactic-republic"></i>
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Anasayfa
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gundem'
                className='nav-links'
              >
                Gündem
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ekonomi'
                className='nav-links'>  
                Ekonomi
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/dunya'
                className='nav-links'
              >
                Dünya
            </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/spor'
                className='nav-links'
              >
                Spor
          </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/magazin'
                className='nav-links'
              >
                Magazin
        </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;